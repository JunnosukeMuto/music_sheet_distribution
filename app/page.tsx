import Link from "next/link";
import MyImage from "./_components/image_wrapper";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-8">
        <MyImage
          src="/logo.png"
          alt=""
          width={128}
          height={128}
        />
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="max-sm:text-xl sm:text-2xl font-bold">武藤淳之助チャンネル　楽譜配布サイト</h1>
      </div>
      <div className="flex justify-center items-center flex-col mt-8 text-center px-8 max-sm:text-sm">
        <p>ご視聴ありがとうございます！</p>
        <p>このページでは動画で公開した譜面のPDFファイルを配布しています。</p>
        <p>全て無料でダウンロードできますので、印刷等してご活用ください。</p>
      </div>
      <div className="flex justify-center">
        <div className="md:w-3xl px-4">
          <div className="divider" />

          <div className="card bg-base-100 shadow">
            <figure>
              <MyImage
                src="/thumbnails/haiboku.png"
                alt=""
                width={1280}
                height={720}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">敗北の少年　キーボードパート</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <Link href="/sheets/haiboku.pdf" download="敗北の少年_キーボードパート譜面.pdf">
                    ダウンロード
                  </Link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
