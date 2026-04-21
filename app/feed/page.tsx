"use client";

import { useState } from "react";
import Image from "next/image";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { PostCard } from "@/components/post-card";
import { useTheme } from "@/components/theme-provider";

const posts = [
  {
    id: "1",
    title: "『무진기행』 감상문",
    author: "홍길동",
    handle: "@user-123",
    body: "김승옥의 『무진기행』은 주인공 윤희중이 고향 무진을 다시 찾아가며 겪는 며칠간의 여정을 담은 작품이다. 무진이라는 공간은 단지 고향이라는 의미를 넘어, 윤희중에게는 현실과는 다른 감정과 기억, 그리고 스스로를 돌아볼 수 있는 기회의 공간으로 그려진다. 작품을 읽으며 가장 인상 깊었던 부분은 마지막에 주인공이 무진을 떠나는 버스 안의 장면이었다.",
    likes: 158,
  },
  {
    id: "2",
    title: "『데미안』 독후감",
    author: "김서연",
    handle: "@seo.reads",
    body: "헤르만 헤세의 『데미안』을 다시 읽었다. 처음 읽었을 때는 싱클레어의 방황이 그저 청춘의 불안함으로만 보였는데, 지금 읽으니 그것이 자아를 찾아가는 필연적인 과정이었다는 것을 알겠다. '새는 알에서 나오려고 투쟁한다. 알은 세계다.' 이 문장이 오늘따라 유독 선명하게 다가왔다.",
    likes: 94,
  },
  {
    id: "3",
    title: "『채식주의자』를 읽고",
    author: "이준혁",
    handle: "@joon.thinks",
    body: "한강의 『채식주의자』는 읽는 내내 불편했다. 그 불편함이 무엇인지를 생각하다 보니, 나는 영혜가 선택한 거부를 이해하려 하지 않고 설명하려 했다는 걸 깨달았다. 이해와 설명 사이의 간극. 그게 이 소설이 남긴 질문인 것 같다.",
    likes: 212,
  },
];

const sheetItems = ["공유하기", "관심 없음", "피드 신고하기"];

export default function FeedPage() {
  const { theme } = useTheme();
  const [sheetPost, setSheetPost] = useState<string | null>(null);

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <header className="feed-top">
            <Image
              src={theme === "dark" ? "/sinabro_logo_white.svg" : "/sinabro_logo_color.svg"}
              alt="SINABRO"
              width={99}
              height={21}
              priority
            />
          </header>
        </div>

        <div className="screen-body">
          <div className="feed-list">
            {posts.map((p) => (
              <PostCard key={p.id} {...p} onMore={() => setSheetPost(p.id)} />
            ))}
          </div>
        </div>

        <BottomNav current="feed" />

        {sheetPost && (
          <div className="sheet-overlay" onClick={() => setSheetPost(null)}>
            <div className="sheet" onClick={(e) => e.stopPropagation()}>
              <div className="sheet-handle" />
              <ul className="sheet-list">
                {sheetItems.map((item, i) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="sheet-item"
                      style={i > 0 ? { borderTop: "1px solid var(--c-border)" } : undefined}
                      onClick={() => setSheetPost(null)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </AppFrame>
  );
}
