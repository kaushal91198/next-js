import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as fs from "fs";
//Step-1 -> Collect all the files from blog Data directory.
//Step-2 -> Iterate thorugh the and Display them
//Step-3 -> Collect all the files from blog Data directory.

const Blog = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blog")
  //     .then((data) => {
  //       return data.json();
  //     }) // return promise
  //     .then((parsedData) => {
  //       // console.log(parsedData);
  //       setBlogs(parsedData);
  //     }) //parsing data
  //     .catch();
  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((x) => {
          return (
            <div key={x.slug}>
              <Link href={`/blogpost/${x.slug}`} >
                <h3 className={styles.blogItemh3}>{x.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{x.description.substr(0, 400)}</p>
              <Link href={`/blogpost/${x.slug}`} >
              <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};
// // by server side rendering
// export async function getServerSideProps(context) {
//   return {
//     props: { kaushal: "Good Boy" }, // will be passed to the page component as props
//   }
// }

//by server side rendering
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blog");
//   let allBlogs = await data.json();

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }

// // by static side generation - get static paths

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: 'how-to-learn-flask.json' } },
//       { params: { slug: 'how-to-learn-javascript.json' } },
//       { params: { slug: 'how-to-learn-nextjs.json' } },
//     ],
//     fallback: true // false or 'blocking'
//   };
// }

// by static side generation- get static props
export async function getStaticProps(context) {
  let allBlogs = [];
  let data = await fs.promises.readdir("blogData");
  for (let index = 0; index < data.length; index++) {
    let blog = await fs.promises.readFile("blogData/" + data[index], "utf-8"); //my file is string.
    allBlogs.push(JSON.parse(blog));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
