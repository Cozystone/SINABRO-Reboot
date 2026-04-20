import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { PostCard } from "@/components/post-card";
import { BackIcon, SettingsIcon } from "@/components/icons";

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

export default function ProfilePage() {
  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <header className="topbar">
            <Link href="/feed" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <Link href="/feed" className="ibtn" aria-label="설정">
              <SettingsIcon />
            </Link>
          </header>
        </div>

        <div className="screen-body">
        <section className="profile-hero">
          <div className="profile-row">
            <div className="profile-av" />
            <div>
              <h1 className="profile-name">홍길동</h1>
              <p className="profile-handle">@user-123</p>
              <ul className="profile-stats">
                {[
                  { label: "팔로잉", value: "6명" },
                  { label: "팔로워", value: "6명" },
                  { label: "게시글", value: "158개" },
                ].map(({ label, value }) => (
                  <li key={label}>
                    <p className="stat__label">{label}</p>
                    <p className="stat__value">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="profile-bio">
            읽는 것과 쓰는 것 사이 어딘가에서 삽니다.<br />
            좋아하는 작가: 김승옥, 이상, 박완서.
          </p>
          <Link href="/my-posts" className="btn-profile-edit">
            나의 글 보기
          </Link>
        </section>

        <div className="profile-posts">
          {posts.map((p) => <PostCard key={p.id} {...p} />)}
        </div>
        </div>{/* end screen-body */}

        <BottomNav current="profile" />
      </div>
    </AppFrame>
  );
}
