"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BackIcon } from "@/components/icons";
import { useTheme } from "@/components/theme-provider";

type NotifKey = "push" | "email" | "like" | "follow";

type SettingsItem =
  | { label: string; type: "nav"; sub?: string; key?: undefined }
  | { label: string; type: "info"; sub: string; key?: undefined }
  | { label: string; type: "darkMode"; key?: undefined; sub?: undefined }
  | { label: string; type: "notif"; key: NotifKey; sub?: undefined };

const sections: { heading: string; items: SettingsItem[] }[] = [
  {
    heading: "계정",
    items: [
      { label: "프로필 편집", type: "nav", sub: "홍길동 · @user-123" },
      { label: "비밀번호 변경", type: "nav" },
      { label: "연결된 계정", type: "nav", sub: "카카오" },
    ],
  },
  {
    heading: "알림",
    items: [
      { label: "푸시 알림", type: "notif", key: "push" },
      { label: "이메일 알림", type: "notif", key: "email" },
      { label: "좋아요 알림", type: "notif", key: "like" },
      { label: "팔로우 알림", type: "notif", key: "follow" },
    ],
  },
  {
    heading: "화면",
    items: [
      { label: "다크 모드", type: "darkMode" },
      { label: "글자 크기", type: "nav", sub: "보통" },
    ],
  },
  {
    heading: "정보",
    items: [
      { label: "이용약관", type: "nav" },
      { label: "개인정보 처리방침", type: "nav" },
      { label: "오픈소스 라이선스", type: "nav" },
      { label: "앱 버전", type: "info", sub: "1.0.0" },
    ],
  },
];

export default function SettingsPage() {
  const router = useRouter();
  const { theme, toggle: toggleDark } = useTheme();
  const [notifs, setNotifs] = useState<Record<NotifKey, boolean>>({
    push: true,
    email: false,
    like: true,
    follow: true,
  });

  function flipNotif(key: NotifKey) {
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function isOn(item: SettingsItem): boolean {
    if (item.type === "darkMode") return theme === "dark";
    if (item.type === "notif") return notifs[item.key];
    return false;
  }

  function handleToggle(item: SettingsItem) {
    if (item.type === "darkMode") toggleDark();
    else if (item.type === "notif") flipNotif(item.key);
  }

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <header className="topbar">
            <button type="button" className="ibtn" aria-label="뒤로" onClick={() => router.back()}>
              <BackIcon />
            </button>
            <h1 className="topbar__title">설정</h1>
            <span style={{ width: 36 }} />
          </header>
        </div>

        <div className="screen-body">
          {sections.map((sec) => (
            <div key={sec.heading} className="settings-section">
              <p className="settings-heading">{sec.heading}</p>
              <div className="settings-group">
                {sec.items.map((item, i) => (
                  <div
                    key={item.label}
                    className="settings-row"
                    style={i > 0 ? { borderTop: "1px solid var(--c-border)" } : undefined}
                  >
                    <div className="settings-row__left">
                      <p className="settings-row__label">{item.label}</p>
                      {item.sub && <p className="settings-row__sub">{item.sub}</p>}
                    </div>
                    {(item.type === "darkMode" || item.type === "notif") && (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isOn(item)}
                        className={`toggle${isOn(item) ? " toggle--on" : ""}`}
                        onClick={() => handleToggle(item)}
                      >
                        <span className="toggle__thumb" />
                      </button>
                    )}
                    {item.type === "nav" && (
                      <span className="settings-row__chevron">›</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 로그아웃 */}
          <div className="settings-section" style={{ paddingBottom: 24 }}>
            <div className="settings-group">
              <button type="button" className="settings-row settings-row--danger" style={{ width: "100%" }}>
                <p className="settings-row__label" style={{ color: "#e53535" }}>로그아웃</p>
              </button>
              <div className="settings-row" style={{ borderTop: "1px solid var(--c-border)" }}>
                <p className="settings-row__label" style={{ color: "#e53535" }}>계정 탈퇴</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
