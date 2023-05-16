export default async function handler(req, res) {
  req = await fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7090309435msh446df70264d5c77p17063djsn1504491575a6",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    }
  );
  const data = req.json();
  console.log(data);
  res.status(200).json(req);
}
