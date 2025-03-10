import fetch from "node-fetch";
import FormData from "form-data";
import { Buffer } from "buffer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método no permitido" };
  }

  const { name, email, celular, message } = JSON.parse(event.body);

  const formData = new FormData();
  formData.append("from", "Rodrigo <mailgun@sandbox4e5f3d6748c049d6829a4098fbb62109.mailgun.org>");
  formData.append("to", "indexwebs.soluciones@gmail.com"); // Cambia esto a tu correo
  formData.append("subject", "Nuevo mensaje del formulario");
  formData.append("text", `Nombre: ${name}\nEmail: ${email}\nCelular: ${celular}\nMensaje: ${message}`);

  const mailgunApiKey = process.env.MAILGUN_API_KEY; // Toma la clave desde Netlify
  if (!mailgunApiKey) {
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Falta la API Key de Mailgun" }) };
  }

  const response = await fetch(`https://api.mailgun.net/v3/sandbox4e5f3d6748c049d6829a4098fbb62109.mailgun.org/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString("base64")}`,
    },
    body: formData,
  });

  const responseBody = await response.text();
  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({ success: response.ok, message: response.ok ? "Email enviado" : responseBody }),
  };
}
