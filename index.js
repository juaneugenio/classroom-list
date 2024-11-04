/** @format */

// index.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.static("public"));

// Ruta para obtener todos los usuarios
app.get("/users", (req, res) => {
	fs.readFile("db.json", (err, data) => {
		if (err) return res.status(500).send("Error leyendo la base de datos");
		const users = JSON.parse(data);
		res.json(users);
	});
});

// Ruta para crear un nuevo usuario
app.post("/users", (req, res) => {
	const newUser = req.body;

	fs.readFile("db.json", (err, data) => {
		if (err) return res.status(500).send("Error leyendo la base de datos");
		const users = JSON.parse(data);
		users.push(newUser);

		fs.writeFile("db.json", JSON.stringify(users), (err) => {
			if (err) return res.status(500).send("Error guardando el usuario");
			res.status(201).json(newUser);
		});
	});
});

// Ruta para eliminar un usuario por ID
app.delete("/users/:id", (req, res) => {
	console.log("👉 Line-41 ▶︎▶︎", req.params);
	const userId = parseInt(req.params.id);

	fs.readFile("db.json", (err, data) => {
		if (err) return res.status(500).send("Error leyendo la base de datos");
		let users = JSON.parse(data);

		users = users.filter((user) => {
			console.log("👉 Line-48 ▶︎▶︎", typeof user.id, typeof userId);
			return parseInt(user.id) !== userId;
		});

		fs.writeFile("db.json", JSON.stringify(users), (err) => {
			if (err) return res.status(500).send("Error eliminando el usuario");
			res.sendStatus(204);
		});
	});
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
