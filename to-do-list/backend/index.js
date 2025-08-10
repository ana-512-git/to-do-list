require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// conexiune front-back
app.use(cors());
app.use(cors({ origin: 'http://localhost:5173/' }));
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

// un task de todo se face dupa un model anume
const Todo = require('./models/Todo.js');

// basic post/create
app.post('/api/todos', async (req, res) => {
    try{
        const newTodo = new Todo({
          text: req.body.text,
          completed: req.body.completed || false,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// basic get
app.get('/api/todos', async (req, res) => {
  try{
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

// basic delete
app.delete('/api/todos/:id', async (req, res) => {
  try{
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send(); // 204 = No Content (successful deletion)
  } catch (err) {
    res.status(404).json({ error: "Todo not found" });
  }
});


// se deschide backend-ul in port-ul 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});