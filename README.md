import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      console.log(`Received contact form submission from ${email}`);

      if (resend) {
        const { data, error } = await resend.emails.send({
          from: "IronCoach Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "sadmantate@gmail.com",
          subject: `IronCoach Contact: ${subject || "New Inquiry"}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
          console.error("Resend error:", error);
          return res.status(500).json({ error: "Failed to send email via service" });
        }

        return res.json({ success: true, data });
      } else {
        // Fallback for development if no API key is provided
        console.warn("RESEND_API_KEY not found. Logging message to console instead.");
        console.log("---- MESSAGE START ----");
        console.log(`Subject: ${subject}`);
        console.log(`From: ${name} (${email})`);
        console.log(`Body: ${message}`);
        console.log("---- MESSAGE END ----");
        
        return res.json({ 
          success: true, 
          message: "Contact received (logged to console as RESEND_API_KEY is missing)" 
        });
      }
    } catch (err) {
      console.error("Server error handling contact form:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
