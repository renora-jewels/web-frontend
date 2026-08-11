export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const TARGET = "https://frontend-2r9v.onrender.com/";

    const ping = async () => {
      try {
        const res = await fetch(TARGET);
        console.log(`[keep-alive] ${TARGET} → ${res.status} ${res.statusText}`);
      } catch (err) {
        console.error(`[keep-alive] failed to reach ${TARGET}:`, err);
      }
    };

    ping(); // fire immediately on startup
    setInterval(ping, 60_000); // then every 1 minute
  }
}
