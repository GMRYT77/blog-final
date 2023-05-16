import fs from "fs";
export default function handler(req, res) {
  const body = req.body;
  console.log(JSON.stringify(body));
  if (!body.name || !body.email) {
    return res.status(400).json({ data: "Name And Email Not Found" });
  }

  res.status(200).json(body);
}
