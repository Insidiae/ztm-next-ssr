import Link from "next/link";

import Image from "../components/Image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <h1>About</h1>
      <Link href="/" passHref>
        <button>Back</button>
      </Link>
      <Image
        src="http://www.airmadagascar.com/sites/all/themes/Porto_sub/img/illus-cameleon.png"
        alt="A chameleon sitting on a branch"
      />
      <p>I was a magician once.</p>
    </div>
  );
}
