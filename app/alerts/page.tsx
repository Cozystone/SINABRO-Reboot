"use client";

import { useState } from "react";
import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { BackIcon } from "@/components/icons";

const notices = [
  {
    id: "1",
    title: "2025년 7월 12일 정기 업데이트 안내",
    date: "25.07.12(수)",
    body: "공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다 공지사항 내용이 들어갑니다",
  },
  { id: "2", title: "2025년 7월 12일 정기 업데이트 안내", date: "25.07.12(수)", body: "" },
  { id: "3", title: "2025년 7월 12일 정기 업데이트 안내", date: "25.07.12(수)", body: "" },
  { id: "4", title: "2025년 7월 12일 정기 업데이트 안내", date: "25.07.12(수)", body: "" },
  { id: "5", title: "2025년 7월 12일 정기 업데이트 안내", date: "25.07.12(수)", body: "" },
];

function NoticeRow({ id, title, date, body }: typeof notices[0]) {
  const [open, setOpen] = useState(id === "1");
  return (
    <div className={`notice-row${open ? " notice-row--open" : ""}`}>
      <button className="notice-row__head" onClick={() => setOpen((v) => !v)}>
        <div className="notice-row__info">
          <p className="notice-row__title">{title}</p>
          <p className="notice-row__date">{date}</p>
        </div>
        <span className="notice-row__chevron">{open ? "∧" : "∨"}</span>
      </button>
      {open && body && (
        <div className="notice-row__body">{body}</div>
      )}
    </div>
  );
}

export default function AlertsPage() {
  const [tab, setTab] = useState<"notice" | "event">("notice");

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          {/* Topbar — 56px (Figma: Frame 59) */}
          <header className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <h1 className="topbar__title">공지사항</h1>
            <span style={{ width: 36 }} />
          </header>
          {/* NOTICE / EVENT tabs — 48px (Figma: Frame 67) */}
          <div className="alerts-tabs">
            <button
              className={`alerts-tab${tab === "notice" ? " active" : ""}`}
              onClick={() => setTab("notice")}
            >
              NOTICE
            </button>
            <button
              className={`alerts-tab${tab === "event" ? " active" : ""}`}
              onClick={() => setTab("event")}
            >
              EVENT
            </button>
          </div>
        </div>

        <div className="screen-body">
          <div className="notices-list">
            {tab === "notice" ? (
              notices.map((n) => <NoticeRow key={n.id} {...n} />)
            ) : (
              <div className="search-empty">이벤트가 없습니다.</div>
            )}
          </div>
        </div>

        <BottomNav current="alerts" />
      </div>
    </AppFrame>
  );
}
