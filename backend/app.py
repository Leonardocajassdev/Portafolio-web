from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)  # permite peticiones desde React

# 📧 Configuración
EMAIL_SENDER = "cajasleonardosilva@gmail.com"
EMAIL_PASSWORD = "pavh cwaj qhhf amha"  # generada en Google
EMAIL_RECEIVER = "cajasleonardosilva@gmail.com"

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    try:
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = EMAIL_RECEIVER
        msg["Subject"] = f"Nuevo mensaje de {name}"

        body = f"Nombre: {name}\nCorreo: {email}\n\nMensaje:\n{message}"
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.send_message(msg)

        return jsonify({"success": "Mensaje enviado correctamente"}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "No se pudo enviar el mensaje"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=4000)
