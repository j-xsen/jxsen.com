import links from "../../links.json" with { type: "json" }

export const onRequest: PagesFunction = async (context) => {
  const slug = context.params.slug as string
  const url = (links as Record<string, string>)[slug]

  if (url) {
    return Response.redirect(url, 301)
  }
  return new Response("Link not found", { status: 404 })
}
