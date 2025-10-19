from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Configuración CORS (solo para desarrollo local)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000"],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Ruta de prueba
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Servidor local activo ✅"}), 200


# Ruta para contacto (solo lógica local, sin envío de correo)
@app.route("/api/contact", methods=["POST", "OPTIONS"])
def contact():
    if request.method == "OPTIONS":
        return "", 204  # Manejo preflight CORS

    data = request.get_json()
    if not data:
        return jsonify({"error": "No se recibieron datos"}), 400

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    # Solo muestra los datos en consola
    print("📩 Nuevo mensaje recibido:")
    print(f"Nombre: {name}")
    print(f"Correo: {email}")
    print(f"Mensaje: {message}")

    # Respuesta simulada
    return jsonify({"success": "Mensaje recibido correctamente (modo local)"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=4000)
