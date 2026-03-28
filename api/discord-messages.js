// Bu dosya Vercel Serverless Function olarak çalışır.
// Endpoint: https://sitename.vercel.app/api/discord-messages

import axios from "axios";

export default async function handler(req, res) {
  // CORS ayarları: Başka bir domainden gelirse engelleme (istemiyorsan silebilirsin veya sınırlandırabilirsin ama Vercel genelde kendi içindedir)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Eğer OPTIONS (CORS preflight) isteği ise anında yanıt dön.
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const DISCORD_BOT_TOKEN = process.env.VITE_DISCORD_BOT_TOKEN;
    const CHANNELS = {
      changelog: process.env.VITE_DISCORD_CHANNEL_ID_CHANGELOG,
      update: process.env.VITE_DISCORD_CHANNEL_ID_UPDATE,
    };

    const type = req.query.type || "changelog";
    const channelId = CHANNELS[type];

    if (!DISCORD_BOT_TOKEN || !channelId) {
      return res.status(500).json({ 
        error: "Server Error: Environment variables are missing on Vercel.",
        type_requested: type
      });
    }

    const response = await axios.get(
      `https://discord.com/api/v10/channels/${channelId}/messages?limit=15`,
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Discord API Hatası:", error.response?.data || error.message);
    res.status(500).json({ error: "Discord mesajları çekilemedi." });
  }
}
