import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step-1 -> Collect all the files from blog Data directory.
//Step-2 -> Iterate thorugh the and Display them 
//Step-3 -> Collect all the files from blog Data directory.


const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        <Link href={"/blogpost/learn-javascript"}>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>
        </Link>
        <Link href={"/blogpost/learn-flask"}>
          <div className={styles.blogItem}>
            <h3>How to learn Flask in 2022</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>
        </Link>
        <Link href={"/blogpost/learn-nextjs"}>
          <div className={styles.blogItem}>
            <h3>How to learn NextJs in 2022</h3>
            <p>Javascript is the language used to design logic for  the web.</p>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Blog;
