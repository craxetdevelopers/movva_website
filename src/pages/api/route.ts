

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { origin, destination, key } = req.query;


  if (!origin || !destination) {
    return res.status(400).json({ error: "Missing origin or destination" });
  }

  try {
    const response = await axios.get("https://maps.googleapis.com/maps/api/directions/json", {
      params: {
        origin,
        destination,
        key,
      },
    });

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json(response.data);
    console.log(response)
  } catch (error) {
    console.error("Google Directions API error:", error);
    res.status(500).json({ error: "Failed to fetch directions" });
  }
}
