const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const videosRouter = require('./routes/videosRouter');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use('api/videos', videosRouter);
  server.use('/api/github', githubRouter);

  server.get('/api/slides', (req, res) => {
    res.send(slidesData);
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use((err, req, res, next) => {
    if (err) {
      res.status(err.status || 500).send({ status: err.status, message: err.message });
    } else {
      next();
    }
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
});
