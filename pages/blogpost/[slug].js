import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";

// Step 1 -> Find the files corresponding the slug.
// Step 2 -> Populate them inside the page.
const Slug = () => {
  const [blog, setBlogs] = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((data) => {
        return data.json();
      }) // return promise
      .then((parsedData) => {
        setBlogs(parsedData);
      }) //parsing data
      .catch();
  }, [router.isReady]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export default Slug;
