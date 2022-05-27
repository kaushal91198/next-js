import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";

// Step 1 -> Find the files corresponding the slug.
// Step 2 -> Populate them inside the page.
// const Slug = (props) => {
//   const [blog, setBlog] = useState(props.myBlog);
//   const router = useRouter();
//   const { slug } = router.query;
//   useEffect(() => {
//     if (router.isReady) {
//       console.log(slug);
//       fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
//         .then((data) => {
//           return data.json();
//         }) // return promise
//         .then((parsedData) => {
//           console.log(parsedData)
//           setBlog(JSON.parse(parsedData));
//         }) //parsing data
//         .catch();
//     }
//   }, [router.isReady, blog, slug]);
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1>{blog && blog.title}</h1>
//         <hr />
//         <div>{blog && blog.content}</div>
//       </main>
//     </div>
//   );
// };

const Slug = (props) => {
  const [blog, setBlog] = useState(JSON.parse(props.myBlog));
  // console.log(JSON.parse(blog).title)
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog.title}</h1>
      <hr />
      <div>
        {blog.content}
      </div>
    </main>
  </div>;
}

// // by server side rendering
// export async function getServerSideProps(context) {
//   console.log(context.query.slug)
//   let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`)
//   let myBlog = await data.json()

//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   }
// }


// by static side generation - get static paths

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-flask.json' } },
      { params: { slug: 'how-to-learn-javascript.json' } },
      { params: { slug: 'how-to-learn-nextjs.json' } },
    ],
    fallback: true // false or 'blocking'
  };
}

// by static side generation- get static props
export async function getStaticProps(context) {
  console.log(context.params)
  const { slug } = context.params
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}


// console.log(Slug())
export default Slug;
