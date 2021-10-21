import NextImage from "next/image";

export default function Image({ src, alt }) {
  return <NextImage src={src} alt={alt} width={390} height={217} />;
}
