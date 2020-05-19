const micro = require('micro');
const replies = require('./replies');

const server = micro(async (req, res) => {
  const { request, session } = await micro.json(req);
  const response = session.new
    ? replies.welcome()
    : replies.firstQuestion({ number1: 2, number2: 2 });
  return {
    response,
    version: '1.0'
  };
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
