import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import javascript from "../../blogData/how-to-learn-javascript.json";
import flask from "../../blogData/how-to-learn-flask.json";
import nextjs from "../../blogData/how-to-learn-nextjs.json";

// Step 1 -> Find the files corresponding the slug.
// Step 2 -> Populate them inside the page.
const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  let title;
  let content;
  let author;
  if (slug == "learn-javascript") {
    (title = javascript.title), (content = javascript.content);
  } else if (slug == "learn-flask") {
    (title = flask.title), (content = flask.content);
  } else {
    (title = nextjs.title), (content = nextjs.content);
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1> Title of the page {slug}</h1> */}
        <h1> {title}</h1>
        <div>{content}</div>
      </main>
    </div>
  );
};

export default slug;
