const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Page</title>
</head>
<body>
    <h1>Hello, Caleffi!</h1>
    <p>This is a simple cached HTML page.</p>
</body>
</html>`;

export default {
  async fetch(request) {
    const responseHeaders = new Headers({
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=31536000, stale-while-revalidate=3600',
      'Oxygen-Cache-Control': 'public, max-age=43200, stale-while-revalidate=3600',
      Vary: 'Accept-Encoding',
    });

    console.log('🚀 ~ fetch ~ request.url:', request.url);
    return new Response(html, {
      headers: responseHeaders,
      status: 200,
    });
  },
};
