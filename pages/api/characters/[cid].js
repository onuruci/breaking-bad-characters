import axios from 'axios'

export default async function handler(req, res) {
  const { cid } = req.query;
  console.log(cid);
  const result = await axios.get('https://www.breakingbadapi.com/api/characters/'+cid);
  console.log(result.data);
  res.status(200).json({ characters: result.data })
}
