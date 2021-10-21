import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>SSR Magician</h1>

      <Link href="/about" passHref>
        <button>About</button>
      </Link>
      <Link href="/robots" passHref>
        <button>Robots</button>
      </Link>
    </div>
  );
}
