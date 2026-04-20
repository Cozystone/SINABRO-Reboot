"use client";

import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { BackIcon, CheckIcon } from "@/components/icons";

const defaultBody = `김승옥의 『무진기행』은 주인공 윤희중이 고향 무진을 다시 찾아가며 겪는 며칠간의 여정을 담은 작품이다.
무진이라는 공간은 단지 고향이라는 의미를 넘어, 윤희중에게는 현실과는 다른 감정과 기억, 그리고 스스로를 돌아볼 수 있는 기회의 공간으로 그려진다.
작품을 읽으며 가장 인상 깊었던 부분은 마지막에 주인공이 무진을 떠나는 장면이었다.

"쓰고 나서 나는 그 편지를 읽어봤다.
또 한 번 읽어봤다. 그리고 찢어 버렸다.

덜컹거리며 달리는 버스 속에서 나는, 어디쯤에선가,
길가에 세워진 하얀 팻말을 보았다."

나는 심한 부끄러움을 느꼈다.`;

export default function EditorPage() {
  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <div className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <button type="button" className="ibtn" aria-label="저장">
              <CheckIcon />
            </button>
          </div>
          <input
            className="editor-title"
            defaultValue="『무진기행』 감상문"
            placeholder="제목을 입력하세요"
          />
          <div className="editor-toolbar" aria-label="서식 도구">
            <button type="button"><strong>B</strong></button>
            <button type="button"><em>I</em></button>
            <button type="button">T̲</button>
            <button type="button">≣</button>
          </div>
        </div>

        <div className="screen-body">
          <textarea
            className="editor-body"
            defaultValue={defaultBody}
            placeholder="오늘의 생각을 기록하세요..."
          />
        </div>

        <BottomNav current="editor" />
      </div>
    </AppFrame>
  );
}
