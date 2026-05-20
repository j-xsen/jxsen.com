import type { VercelRequest, VercelResponse } from "@vercel/node"
import links from "../../links.json"

export default function handler(req: VercelRequest, res: VercelResponse) {
  const slug = req.query.slug as string
  const url = (links as Record<string, string>)[slug]

  if (url) {
    res.redirect(301, url)
  } else {
    res.status(404).send("Link not found")
  }
}
