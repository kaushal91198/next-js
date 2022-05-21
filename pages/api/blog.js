// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  let allBlogs = [];
  let data = await fs.promises.readdir("blogData");
  for (let index = 0; index < data.length; index++) {
    let blog = await fs.promises.readFile("blogData/" + data[index], "utf-8");
    allBlogs.push(JSON.parse(blog));
  }
  res.status(200).json(allBlogs);
}
