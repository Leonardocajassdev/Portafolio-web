from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

# ✅ Configuración CORS mejorada
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://portafolio-web-nu-topaz.vercel.app",
            "http://localhost:3000"  # Para desarrollo local
        ],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# 📧 Configuración del correo
EMAIL_SENDER = "cajasleonardosilva@gmail.com"
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "pavh cwaj qhhf amha")
EMAIL_RECEIVER = "cajasleonardosilva@gmail.com"

# Ruta de prueba
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend funcionando ✅"}), 200

@app.route("/api/contact", methods=["POST", "OPTIONS"])
def contact():
    # Manejo de preflight request
    if request.method == "OPTIONS":
        return "", 204
    
    data = request.get_json()
    
    if not data:
        return jsonify({"error": "No se recibieron datos"}), 400
    
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    try:
        # Crear mensaje
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = EMAIL_RECEIVER
        msg["Subject"] = f"Nuevo mensaje de {name}"

        body = f"Nombre: {name}\nCorreo: {email}\n\nMensaje:\n{message}"
        msg.attach(MIMEText(body, "plain"))

        # Enviar correo
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.send_message(msg)

        return jsonify({"success": "Mensaje enviado correctamente"}), 200

    except Exception as e:
        print(f"❌ Error al enviar correo: {e}")
        return jsonify({"error": "No se pudo enviar el mensaje"}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)