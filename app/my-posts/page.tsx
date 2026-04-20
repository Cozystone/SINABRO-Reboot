import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { BottomNav } from "@/components/bottom-nav";
import { BackIcon, PlusIcon, PencilIcon, XMarkIcon } from "@/components/icons";

const drafts = [
  { id: "1", title: "산문", date: "2025/07/10" },
  { id: "2", title: "소설", date: "2025/07/10" },
];

const scheduled = [
  { id: "3", title: "『무진기행』 감상문", date: "2025/07/10" },
  { id: "4", title: "백록담", date: "2025/07/10" },
  { id: "5", title: "날개", date: "2025/07/10" },
];

const published = [
  { id: "6", title: "산문", date: "2025/07/10" },
  { id: "7", title: "소설", date: "2025/07/10" },
];

function DraftRow({ title, date }: { title: string; date: string }) {
  return (
    <div className="draft-row">
      <div>
        <p className="draft-title">{title}</p>
        <p className="draft-date">마지막 수정 : {date}</p>
      </div>
      <div className="draft-actions">
        <Link href="/editor" className="draft-btn" aria-label="편집">
          <PencilIcon />
        </Link>
        <button type="button" className="draft-btn" aria-label="삭제">
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
}

export default function MyPostsPage() {
  return (
    <AppFrame>
      <div className="screen">
        <div className="screen-head">
          <StatusBar />
          <header className="topbar">
            <Link href="/profile" className="ibtn" aria-label="뒤로">
              <BackIcon />
            </Link>
            <h1 className="topbar__title">나의 글</h1>
            <Link href="/editor" className="ibtn" aria-label="새 글 쓰기">
              <PlusIcon />
            </Link>
          </header>
        </div>

        <div className="screen-body">
          <div className="myposts-list">
            <p className="myposts-section-label">임시저장한 글</p>
            {drafts.map((d) => <DraftRow key={d.id} {...d} />)}

            <p className="myposts-section-label">업로드 예정인 글</p>
            {scheduled.map((d) => <DraftRow key={d.id} {...d} />)}

            <p className="myposts-section-label">업로드한 글</p>
            {published.map((d) => <DraftRow key={d.id} {...d} />)}
          </div>
        </div>

        <BottomNav current="profile" />
      </div>
    </AppFrame>
  );
}
