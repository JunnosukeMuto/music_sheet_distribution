import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import MyImage from "./_components/image_wrapper";

export const metadata: Metadata = {
  title: "楽譜配布サイト | 武藤淳之助",
  description: "武藤淳之助チャンネルの楽譜配布サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {process.env.NODE_ENV === "production" && (
          <base href="/music_sheet_distribution/" />
        )}
      </head>
      <body className="h-screen">
        <div className="navbar border-b border-base-300 px-4">
          <div className="flex-1">
            <MyImage
              src="/header.png"
              alt="武藤淳之助"
              width={180}
              height={60}
            />
          </div>
          <div className="flex-none">
            <Link
              href={"https://www.youtube.com/@JunnosukeMuto"}
              className="btn btn-ghost btn-square"

            >
              <MyImage
                src="/yt_icon.png"
                alt="YouTubeチャンネル"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
