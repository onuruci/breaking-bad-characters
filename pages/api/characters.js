import axios from 'axios'

export default async function handler(req, res) {7
	const result = await axios.get('https://www.breakingbadapi.com/api/characters');
  res.status(200).json({ characters: result.data })
}
