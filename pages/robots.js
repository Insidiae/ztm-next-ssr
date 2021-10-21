import { useState, useEffect } from "react";
import Link from "next/link";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import styles from "../styles/Robots.module.css";

export default function Robots() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className={`${styles.container} tc`}>
      {!robots.length ? (
        <h1 className={styles.header}>Loading</h1>
      ) : (
        <>
          <h1 className={`${styles.header} f1`}>RoboFriends</h1>
          <Link href="/" passHref>
            <button>Home Page</button>
          </Link>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      )}
    </div>
  );
}
