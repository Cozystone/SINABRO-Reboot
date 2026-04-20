"use client";

import { useState } from "react";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { PostCard } from "@/components/post-card";
import { SearchIcon } from "@/components/icons";

const results = [
  {
    id: "1",
    title: "『무진기행』 감상문",
    author: "홍길동",
    handle: "@user-123",
    body: "김승옥의 『무진기행』은 주인공 윤희중이 고향 무진을 다시 찾아가며 겪는 며칠간의 여정을 담은 작품이다. 무진이라는 공간은 단지 고향이라는 의미를 넘어, 윤희중에게는 현실과는 다른 감정과 기억, 그리고 스스로를 돌아볼 수 있는 기회의 공간으로 그려진다.",
    likes: 158,
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"feed" | "user">("feed");

  const filtered = query.trim()
    ? results.filter((r) =>
        r.title.includes(query) || r.body.includes(query) || r.author.includes(query)
      )
    : results;

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <div className="search-bar-wrap">
            <div className="search-bar">
              <SearchIcon />
              <input
                type="search"
                placeholder="검색"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="search-tabs">
            <button
              className={`search-tab${tab === "feed" ? " active" : ""}`}
              onClick={() => setTab("feed")}
            >
              피드
            </button>
            <button
              className={`search-tab${tab === "user" ? " active" : ""}`}
              onClick={() => setTab("user")}
            >
              사용자
            </button>
          </div>
        </div>

        <div className="screen-body">
          {tab === "feed" ? (
            <div className="search-results">
              {filtered.length > 0 ? (
                filtered.map((p) => <PostCard key={p.id} {...p} />)
              ) : (
                <div className="search-empty">
                  검색 결과가 없습니다.<br />다른 키워드로 시도해보세요.
                </div>
              )}
            </div>
          ) : (
            <div className="search-empty">
              일치하는 사용자가 없습니다.
            </div>
          )}
        </div>

        <BottomNav current="search" />
      </div>
    </AppFrame>
  );
}
