"use client";

import Link from "next/link";

type PostCardProps = {
  title: string;
  author: string;
  handle: string;
  body: string;
  likes: number;
  href?: string;
};

export function PostCard({ title, author, handle, body, likes, href = "/viewer" }: PostCardProps) {
  return (
    <Link href={href} style={{ display: "block" }}>
      <article className="card">
        <header className="card__head">
          <div className="card__avatar" />
          <div>
            <p className="card__name">{author}</p>
            <p className="card__handle">{handle}</p>
          </div>
          <button className="card__dots" type="button" aria-label="더보기" onClick={(e) => e.preventDefault()}>
            <span /><span /><span />
          </button>
        </header>
        <h2 className="card__title">{title}</h2>
        <div className="card__fade">
          <p className="card__body">{body}</p>
        </div>
        <footer className="card__foot">
          <span className="card__read">자세히 보기</span>
          <span className="card__likes">
            <span className="card__heart">♥</span>
            <span className="card__cnt">{likes}</span>
          </span>
        </footer>
      </article>
    </Link>
  );
}
