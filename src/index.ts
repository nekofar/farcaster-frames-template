import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  const imageText = 'Hello World'
  const frameImage = `https://placehold.co/600x400?text=${imageText}`
  const framePostUrl = c.req.url

  return c.html(html`
    <html lang="en">
      <head>
        <meta property="og:image" content="${frameImage}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frameImage}" />
        <meta property="fc:frame:post_url" content="${framePostUrl}" />
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
        <meta property="fc:frame:button:3" content="Red" />
        <meta property="fc:frame:button:4" content="Blue" />
        <title>Farcaster Frames</title>
      </head>
      <body>
        <h1>Hello Farcaster!</h1>
      </body>
    </html>
  `)
})

app.post('/', async (c) => {
  const body = await c.req.json()
  const {
    untrustedData: { buttonIndex },
  } = body
  const backgroundColors = [undefined, 'green', 'purple', 'red', 'blue']

  const imageText = 'Hello World'
  const imageColor = backgroundColors[buttonIndex]

  const frameImage = `https://placehold.co/600x400/${imageColor}/white?text=${imageText}`
  const framePostUrl = c.req.url

  return c.html(html`
    <html lang="en">
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frameImage}" />
        <meta property="fc:frame:post_url" content="${framePostUrl}" />
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
        <meta property="fc:frame:button:3" content="Red" />
        <meta property="fc:frame:button:4" content="Blue" />
        <title>Farcaster Frames</title>
      </head>
    </html>
  `)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
