// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let {name,food} = req.query;

  res.send(`${name} likes to eat ${food}`);
}