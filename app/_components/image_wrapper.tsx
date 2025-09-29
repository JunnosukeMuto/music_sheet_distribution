import Image from "next/image";
import nextConfig from "@/next.config";

export default function MyImage(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={`${nextConfig.basePath || ''}${props.src}`}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
