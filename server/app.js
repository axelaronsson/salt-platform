import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from 'express';
import bodyParser from 'body-parser';
import { reqBodyValidator, idValidator, nextId } from './errorHandling.js';
import cors from 'cors';
const itemsData =  require('./db/items.json');
const githubData =  require('./db/github.json');
const slidesData =  require('./db/slides.json');
const app = express();
let items = itemsData;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/videos', (req, res) => {
  res.send(items);
});

app.get('/api/github', (req, res) => {
  res.send(githubData);
});

app.get('/api/slides', (req, res) => {
    res.send(slidesData);
});

app.post('/api/videos', (req,res) => {
  res.setHeader('content-type', 'application/json');
  reqBodyValidator(req);
  const newItem = {
    id: nextId(items).toString(),
    link: req.body.link,
  };
  items = [...items, newItem];
  res.status(201);
  res.send(newItem);
});

app.put('/api/videos/:id', (req, res) => {
  res.setHeader('content-type', 'application/json');
  const { id } = req.params;
  idValidator(id, items);
  const editedItem = {
      id: id,
      link: req.body.link,
  }
  items = items.map(item => item.id === id? editedItem : item );
  res.status(204);
  res.end();
});

app.delete('/api/videos/:id', (req, res) => {
  const { id } = req.params;
  idValidator(id, items);
  items = items.filter(item => item.id !== id);
  res.status(204);
  res.end()
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status || 500).send({ status: err.status, message: err.message });
  } else {
    next();
  }
});

export default app;

// app.get('/api/items/:category', (req, res) => {
//   const { category } = req.params;
//   const item = items.filter(item => item.category === category);
//   res.send(item);
// });