import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let directory = await fs.promises.readdir("contactData");
    // console.log(directory);
    let fileName;
    if (directory.length === 0) {
      fileName = 1;
    } else {
      fileName = parseInt(directory[directory.length - 1].split(".")[0]) + 1;
    }
    await fs.promises.writeFile(
      `contactData/${fileName}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json({ message: "Data added successfully" });
  } else {
    res.status(200).json({ munno: "bjbj FFFFFFF" });
  }
}
