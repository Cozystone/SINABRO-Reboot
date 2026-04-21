"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { BackIcon, CheckIcon } from "@/components/icons";

type Format = "bold" | "italic" | "underline" | "list";

export default function EditorPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [active, setActive] = useState<Set<Format>>(new Set());
  const [saving, setSaving] = useState(false);

  function toggle(fmt: Format) {
    setActive((prev) => {
      const next = new Set(prev);
      next.has(fmt) ? next.delete(fmt) : next.add(fmt);
      return next;
    });
  }

  function handleSave() {
    if (!title.trim() && !body.trim()) return;
    setSaving(true);
    // 실제 서비스에서는 API 호출 후 피드로 이동
    setTimeout(() => {
      router.push("/feed");
    }, 300);
  }

  const charCount = body.length;
  const canSave = title.trim().length > 0 || body.trim().length > 0;

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <div className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <div className="editor-topbar-right">
              <span className="editor-char-count">{charCount > 0 ? `${charCount}자` : ""}</span>
              <button
                type="button"
                className={`ibtn editor-save-btn${canSave ? " editor-save-btn--active" : ""}`}
                aria-label="발행"
                onClick={handleSave}
                disabled={!canSave || saving}
              >
                <CheckIcon />
              </button>
            </div>
          </div>
          <input
            className="editor-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            maxLength={100}
          />
          <div className="editor-toolbar" aria-label="서식 도구">
            <button type="button" className={active.has("bold") ? "active" : ""} onClick={() => toggle("bold")}>
              <strong>B</strong>
            </button>
            <button type="button" className={active.has("italic") ? "active" : ""} onClick={() => toggle("italic")}>
              <em>I</em>
            </button>
            <button type="button" className={active.has("underline") ? "active" : ""} onClick={() => toggle("underline")}>
              T̲
            </button>
            <button type="button" className={active.has("list") ? "active" : ""} onClick={() => toggle("list")}>
              ≣
            </button>
          </div>
        </div>

        <div className="screen-body">
          <textarea
            className="editor-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="오늘의 이야기를 써내려가세요..."
            autoFocus
          />
        </div>

        <BottomNav current="editor" />
      </div>
    </AppFrame>
  );
}
