"use client";

import { useState } from "react";
import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BackIcon, MoreIcon, HeartIcon, ChatIcon, SunIcon } from "@/components/icons";

const paragraphs = [
  "김승옥의 『무진기행』은 주인공 윤희중이 고향 무진을 다시 찾아가며 겪는 며칠간의 여정을 담은 작품이다. 무진이라는 공간은 단지 고향이라는 의미를 넘어, 윤희중에게는 현실과는 다른 감정과 기억, 그리고 스스로를 돌아볼 수 있는 기회의 공간으로 그려진다.",
  "작품을 읽으며 가장 인상 깊었던 부분은 마지막에 주인공이 무진을 떠나는 장면이었다.",
  "\"쓰고 나서 나는 그 편지를 읽어봤다. 또 한 번 읽어봤다. 그리고 찢어 버렸다. 덜컹거리며 달리는 버스 속에서 나는, 어디쯤에선가, 길가에 세워진 하얀 팻말을 보았다. 거기에는 선명한 검은 글씨로 당신은 무진읍을 떠나고 있습니다. 안녕히 가십시오'라고 씌어 있었다. 나는 심한 부끄러움을 느꼈다.\"",
  "이 장면은 짧지만, 윤희중의 내면이 가장 솔직하게 드러나는 순간이었다. 그는 무진에서 만난 하인숙에게 자신의 감정을 담은 편지를 썼지만, 끝내 그것을 찢어버리고 떠난다.",
  "나는 이 장면에서 자기 현실과 이상의 경계에 존재하는 사람의 흔들림과 후회, 그리고 삶에 대한 회피를 느꼈다. 그가 왜 편지를 찢었는지, 왜 떠났는지, 왜 부끄러웠는지는 명확히 설명되어 있지 않지만, 오히려 그 모호함이 더 큰 여운을 주었다.",
  "『무진기행』은 사건이 크지 않지만, 내면의 파동이 섬세하게 그려진 작품이다. 풍경 묘사, 대사의 흐름, 인물의 심리까지 모두 절제된 문장 속에 담겨 있어 조용하지만 강한 인상을 남긴다.",
  "이 작품을 통해 나는 스스로의 삶과 감정을 돌아보는 일이 얼마나 중요한지, 그리고 때로는 진심을 마주하는 것이 얼마나 어려운 일인지 다시 한 번 느꼈다.",
];

const fontSizes = ["0.88rem", "1rem", "1.12rem"];
const moreItems = ["공유하기", "저장하기", "신고하기"];

export default function ViewerPage() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(158);
  const [fsIdx, setFsIdx] = useState(1);
  const [bright, setBright] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  function toggleLike() {
    setLiked((v) => !v);
    setLikes((v) => (liked ? v - 1 : v + 1));
  }

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <div className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <button type="button" className="ibtn" aria-label="더보기" onClick={() => setSheetOpen(true)}>
              <MoreIcon />
            </button>
          </div>
        </div>

        <div className="screen-body" style={bright ? { filter: "brightness(1.15)" } : undefined}>
          <div className="viewer-head">
            <div style={{ flex: 1 }}>
              <h1 className="viewer-h1">『무진기행』 감상문</h1>
              <div className="viewer-meta">
                <div className="viewer-av" />
                <span className="viewer-author">홍길동</span>
                <span className="viewer-dot">·</span>
                <span className="viewer-likes-inline">
                  <HeartIcon filled={liked} />
                  <span>{likes}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="viewer-body">
            {paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: fontSizes[fsIdx] }}>{p}</p>
            ))}
            <p className="viewer-quote">
              사람은 누구나 무진을 한 번쯤은 지나간다. 중요한 건 그곳을 떠날 때, 무엇을 외면했고, 무엇을 마음에 남겼는지를 아는 것이다. — 김승옥 『무진기행』을 돌아보며
            </p>
          </div>
        </div>

        {/* 하단 고정 바 */}
        <div className="viewer-bottom">
          <div className="viewer-btns">
            <button
              type="button"
              className={`vbtn${liked ? " vbtn--liked" : ""}`}
              aria-label={liked ? "좋아요 취소" : "좋아요"}
              onClick={toggleLike}
            >
              <HeartIcon filled={liked} />
            </button>
            <button type="button" className="vbtn" aria-label="댓글">
              <ChatIcon />
            </button>
          </div>

          <div className="viewer-right">
            {/* 글자 크기 조절 */}
            <div className="font-ctrl">
              <button
                className="font-ctrl__btn font-ctrl__btn--sm"
                onClick={() => setFsIdx((i) => Math.max(0, i - 1))}
                aria-label="글자 작게"
              >
                가
              </button>
              <span className="font-ctrl__sep" />
              <button
                className="font-ctrl__btn font-ctrl__btn--lg"
                onClick={() => setFsIdx((i) => Math.min(fontSizes.length - 1, i + 1))}
                aria-label="글자 크게"
              >
                가
              </button>
            </div>
            {/* 밝기 */}
            <button
              type="button"
              className={`vbtn${bright ? " vbtn--liked" : ""}`}
              aria-label="밝기 조절"
              onClick={() => setBright((v) => !v)}
            >
              <SunIcon />
            </button>
          </div>
        </div>

        {/* 더보기 시트 */}
        {sheetOpen && (
          <div className="sheet-overlay" onClick={() => setSheetOpen(false)}>
            <div className="sheet" onClick={(e) => e.stopPropagation()}>
              <div className="sheet-handle" />
              <ul className="sheet-list">
                {moreItems.map((item, i) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="sheet-item"
                      style={i > 0 ? { borderTop: "1px solid var(--c-border)" } : undefined}
                      onClick={() => setSheetOpen(false)}
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
