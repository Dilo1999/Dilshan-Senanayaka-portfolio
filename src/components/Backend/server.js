const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // To parse JSON data

// Connect to MySQL Database
const db = mysql.createConnection({
  host: "localhost", // Hostname (use 'localhost' for XAMPP)
  user: "root",      // Default username for XAMPP
  password: "",      // Default password is empty for XAMPP
  database: "contactDB" // The database you create in MySQL
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Create a table if it doesn't already exist
db.query(
  `CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table 'contacts' is ready.");
    }
  }
);

// Define the POST route to save form data
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Insert data into MySQL
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Server error" });
    }
    res.status(201).json({ message: "Message saved successfully!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
