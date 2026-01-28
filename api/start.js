export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/changelog-modul/PHOENIXX-HUB/refs/heads/main/start",
      {
        headers: {
          "User-Agent": "Vercel-Proxy"
        }
      }
    );

    const text = await response.text();

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("-- Proxy error: " + err.message);
  }
}
