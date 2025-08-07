require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// conexiune front-back
app.use(cors());
// parseaza request-uri
app.use(express.json());

// face o baza de date si/sau se conecteaza la ea
// baza de date se numeste "todoapp"
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// se face un get endpoint la inceputul url-ului si verifica daca se cere(request) si se primeste (response)
app.get('/', (req, res) => {
  res.send('Backend is working! 🚀');
});

// se deschide backend-ul in port-ul 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});