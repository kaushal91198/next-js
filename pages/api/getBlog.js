// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}`, "utf-8", (err, data) => {
      if(err){
          return res.status(500).json({error:"No Such Blog Found."})
      }
    return res.status(200).json(data);
  });
}
