import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SINABRO",
  description: "Literary social platform for readers and writers."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <style>{`
          @font-face {
            font-family: 'RIDIBatang';
            src: url('https://cdn.jsdelivr.net/gh/ridi/fonts@1.0.0/RIDIBatang.woff2') format('woff2'),
                 url('https://cdn.jsdelivr.net/gh/ridi/fonts@1.0.0/RIDIBatang.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
