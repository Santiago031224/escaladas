const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sanpez0512',
  database: 'recetas'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.use(express.json()); // Para procesar JSON en las solicitudes

// Ruta para guardar el pedido
app.post('/guardar-pedido', (req, res) => {
  const { nombre, total, detalles } = req.body;
  
  const query = 'INSERT INTO pedidos (nombre, total, detalles) VALUES (?, ?, ?)';
  db.query(query, [nombre, total, detalles], (err, result) => {
    if (err) {
      console.error('Error al guardar pedido:', err);
      res.status(500).send('Error al guardar pedido');
    } else {
      res.status(200).send('Pedido guardado correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
