export default {
  async fetch(request) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "POST"
        }
      });
    }

    if (request.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    const data = await request.json();

    const webhookUrl = "https://discordapp.com/api/webhooks/1513144223468097637/nlst_hjF2DK9ug76mKsyFU1HP6CTnYD5I-ICQnZf46tzdpExeKKLS5hL-DBdHupxRABf";

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        embeds: [{
          title: "Nieuwe Sollicitatie",
          color: 3447003,
          fields: [
            {
              name: "Discord Naam",
              value: data.naam
            },
            {
              name: "Functie",
              value: data.functie
            },
            {
              name: "Motivatie",
              value: data.motivatie
            }
          ],
          timestamp: new Date().toISOString()
        }]
      })
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
}
