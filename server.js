import express from "express";
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/discord-messages", async (req, res) => {
  // Her istekte güncel process.env okunsun diye içeri aldık
  const DISCORD_BOT_TOKEN = process.env.VITE_DISCORD_BOT_TOKEN;
  const CHANNELS = {
    changelog: process.env.VITE_DISCORD_CHANNEL_ID_CHANGELOG,
    update: process.env.VITE_DISCORD_CHANNEL_ID_UPDATE,
  };

  const type = req.query.type || "changelog";
  const channelId = CHANNELS[type];

  if (!DISCORD_BOT_TOKEN || !channelId) {
    console.error("HATA: Eksik .env Verisi. Token:", !!DISCORD_BOT_TOKEN, "Kanal:", channelId);
    return res.status(500).json({ error: "Eksik çevresel değişkenler (Token veya Kanal ID bulunamadı)." });
  }

  try {
    const response = await axios.get(
      `https://discord.com/api/v10/channels/${channelId}/messages?limit=15`,    
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );
    // Yalnızca düzgün bir şekilde parse etmek için JSON olarak dönecek
    res.json(response.data);
  } catch (error) {
    console.error("Discord API Hatası:", error.response?.data || error.message);
    res.status(500).json({ error: "Discord mesajları çekilemedi." });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy sunucu http://localhost:${PORT} üzerinde çalışıyor.`);
});
