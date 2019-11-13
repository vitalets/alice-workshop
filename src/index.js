const micro = require('micro');

const server = micro(async (req, res) => {
  return 'Running';
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
