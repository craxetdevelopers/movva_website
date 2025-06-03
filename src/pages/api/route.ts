

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { origin, destination} = req.query;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;


  if (!origin || !destination) {
    return res.status(400).json({ error: "Missing origin or destination" });
  }

  try {
    const response = await axios.get("https://maps.googleapis.com/maps/api/directions/json", {
      params: {
        origin,
        destination,
        key: apiKey
      },
    });
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json(response.data);
    console.log('lol', response.data)
  } catch (error) {
    console.error("Google Directions API error:", error);
    res.status(500).json({ error: "Failed to fetch directions" });
  }
}
