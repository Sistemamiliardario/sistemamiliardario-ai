
import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req, res) {
  const { message } = req.body

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7
    })

    const reply = chat.choices[0].message.content
    res.status(200).json({ reply })
  } catch (err) {
    res.status(500).json({ error: 'Errore AI', details: err.message })
  }
}
