"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { PostCard } from "@/components/post-card";
import { BackIcon, SettingsIcon, SearchIcon } from "@/components/icons";

const initialProfile = {
  name: "홍길동",
  handle: "@user-123",
  bio: "읽는 것과 쓰는 것 사이 어딘가에서 삽니다.\n좋아하는 작가: 김승옥, 이상, 박완서.",
};

const posts = [
  {
    id: "1",
    title: "『무진기행』 감상문",
    author: "홍길동",
    handle: "@user-123",
    body: "김승옥의 『무진기행』은 주인공 윤희중이 고향 무진을 다시 찾아가며 겪는 며칠간의 여정을 담은 작품이다. 무진이라는 공간은 단지 고향이라는 의미를 넘어, 윤희중에게는 현실과는 다른 감정과 기억, 그리고 스스로를 돌아볼 수 있는 기회의 공간으로 그려진다.",
    likes: 158,
  },
];

const followingList = [
  { id: "f1", name: "김서연", handle: "@seo.reads", following: true },
  { id: "f2", name: "이준혁", handle: "@joon.thinks", following: true },
  { id: "f3", name: "박지은", handle: "@jieun_writes", following: false },
  { id: "f4", name: "최민준", handle: "@minjun_book", following: true },
  { id: "f5", name: "정수아", handle: "@sua_pages", following: true },
  { id: "f6", name: "한예슬", handle: "@yeseul_reads", following: false },
];

const followerList = [
  { id: "r1", name: "김서연", handle: "@seo.reads", following: true },
  { id: "r2", name: "박지은", handle: "@jieun_writes", following: false },
  { id: "r3", name: "오태양", handle: "@taeyang_o", following: false },
  { id: "r4", name: "이준혁", handle: "@joon.thinks", following: true },
  { id: "r5", name: "강민서", handle: "@minseo_k", following: false },
  { id: "r6", name: "윤채원", handle: "@chaewon_y", following: false },
];

type UserItem = typeof followingList[0];
type ModalType = "following" | "followers" | "edit" | null;

function UserRow({ name, handle, following: initFollowing }: UserItem) {
  const [following, setFollowing] = useState(initFollowing);
  return (
    <div className="user-row">
      <div className="user-av" />
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-handle">{handle}</p>
      </div>
      <button
        type="button"
        className={`follow-btn${following ? " follow-btn--on" : ""}`}
        onClick={() => setFollowing((v) => !v)}
      >
        {following ? "팔로잉" : "팔로우"}
      </button>
    </div>
  );
}

function UserModal({ title, list, onClose }: { title: string; list: UserItem[]; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const filtered = list.filter(
    (u) => u.name.includes(query) || u.handle.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="umodal-overlay" onClick={onClose}>
      <div className="umodal" onClick={(e) => e.stopPropagation()}>
        <div className="umodal-head">
          <div className="sheet-handle" />
          <div className="umodal-title-row">
            <span className="umodal-title">{title}</span>
            <button type="button" className="umodal-close" onClick={onClose} aria-label="닫기">✕</button>
          </div>
          <div className="search-bar" style={{ margin: "0 16px 12px" }}>
            <SearchIcon />
            <input
              className="search-input"
              placeholder="검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="umodal-list">
          {filtered.length === 0 ? (
            <p className="search-empty" style={{ paddingTop: 32 }}>검색 결과가 없습니다.</p>
          ) : (
            filtered.map((u) => <UserRow key={u.id} {...u} />)
          )}
        </div>
      </div>
    </div>
  );
}

type Profile = typeof initialProfile;

function EditModal({ profile, onSave, onClose }: {
  profile: Profile;
  onSave: (p: Profile) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState(profile);
  function set(k: keyof Profile, v: string) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }
  return (
    <div className="umodal-overlay" onClick={onClose}>
      <div className="umodal" onClick={(e) => e.stopPropagation()}>
        <div className="umodal-head">
          <div className="sheet-handle" />
          <div className="umodal-title-row">
            <button type="button" className="umodal-close" style={{ left: 12, right: "auto" }} onClick={onClose}>취소</button>
            <span className="umodal-title">프로필 편집</span>
            <button
              type="button"
              className="umodal-close"
              style={{ fontWeight: 700, color: "var(--c-accent)" }}
              onClick={() => { onSave(form); onClose(); }}
            >완료</button>
          </div>
        </div>
        <div className="umodal-list" style={{ padding: "12px 16px 32px" }}>
          <div className="edit-av-row">
            <div className="profile-av profile-av--lg" />
            <button type="button" className="edit-av-btn">사진 변경</button>
          </div>
          <div className="edit-field">
            <label className="edit-label">이름</label>
            <input className="edit-input" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="이름" maxLength={30} />
          </div>
          <div className="edit-field">
            <label className="edit-label">핸들</label>
            <input className="edit-input" value={form.handle} onChange={(e) => set("handle", e.target.value)} placeholder="@handle" maxLength={30} />
          </div>
          <div className="edit-field">
            <label className="edit-label">소개</label>
            <textarea className="edit-input edit-textarea" value={form.bio} onChange={(e) => set("bio", e.target.value)} placeholder="나를 한 줄로 소개해보세요" maxLength={150} rows={3} />
            <p className="edit-counter">{form.bio.length}/150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const [modal, setModal] = useState<ModalType>(null);
  const [profile, setProfile] = useState(initialProfile);

  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <header className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로"><BackIcon /></Link>
            <button type="button" className="ibtn" aria-label="설정" onClick={() => router.push("/settings")}>
              <SettingsIcon />
            </button>
          </header>
        </div>

        <div className="screen-body">
          <section className="profile-hero">
            {/* Instagram-style: avatar left, 3 stats right */}
            <div className="profile-top">
              <div className="profile-av profile-av--lg" />
              <ul className="profile-stats">
                {[
                  { label: "게시글", value: 158, key: null as ModalType },
                  { label: "팔로워", value: 6,   key: "followers" as ModalType },
                  { label: "팔로잉", value: 6,   key: "following" as ModalType },
                ].map(({ label, value, key }) => (
                  <li key={label}>
                    <button
                      type="button"
                      className="stat-btn"
                      onClick={() => key && setModal(key)}
                      disabled={!key}
                    >
                      <span className="stat__value">{value}</span>
                      <span className="stat__label">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Name, handle, bio */}
            <div className="profile-info">
              <h1 className="profile-name">{profile.name}</h1>
              <p className="profile-handle">{profile.handle}</p>
              <p className="profile-bio" style={{ whiteSpace: "pre-line" }}>{profile.bio}</p>
            </div>

            {/* Action buttons — side by side */}
            <div className="profile-btns">
              <Link href="/my-posts" className="btn-profile-edit btn-profile-edit--outline">
                나의 글 보기
              </Link>
              <button
                type="button"
                className="btn-profile-edit btn-profile-edit--outline"
                onClick={() => setModal("edit")}
              >
                프로필 편집
              </button>
            </div>
          </section>

          <div className="profile-posts">
            {posts.map((p) => <PostCard key={p.id} {...p} />)}
          </div>
        </div>

        <BottomNav current="profile" />

        {modal === "following" && (
          <UserModal title="팔로잉" list={followingList} onClose={() => setModal(null)} />
        )}
        {modal === "followers" && (
          <UserModal title="팔로워" list={followerList} onClose={() => setModal(null)} />
        )}
        {modal === "edit" && (
          <EditModal profile={profile} onSave={(p) => setProfile(p)} onClose={() => setModal(null)} />
        )}
      </div>
    </AppFrame>
  );
}
