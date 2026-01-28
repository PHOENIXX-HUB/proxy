export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/changelog-modul/PHOENIXX-HUB/refs/heads/main/start"
    );
    const t = await r.text();

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(t);
  } catch (e) {
    res.status(500).send("-- proxy error");
  }
}
