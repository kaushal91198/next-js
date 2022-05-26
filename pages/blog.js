import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
//Step-1 -> Collect all the files from blog Data directory.
//Step-2 -> Iterate thorugh the and Display them
//Step-3 -> Collect all the files from blog Data directory.

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((data) => {
        return data.json();
      }) // return promise
      .then((parsedData) => {
        // console.log(parsedData);
        setBlogs(parsedData);
      }) //parsing data
      .catch();
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((x) => {
          return (
            <>
              <Link href={`/blogpost/${x.slug}`} key={x.slug}>
                <h3 className={styles.blogItemh3}>{x.title}</h3>

              </Link>
              <p className={styles.blogItemp}>{x.content.substr(0, 400)}</p>
            </>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
