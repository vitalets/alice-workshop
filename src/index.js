const micro = require('micro');

const server = micro(async (req, res) => {
  return {
    response: {
      text: 'Привет',
      tts: 'Привет, я ваш голосовой помощник',
      end_session: false
    },
    version: '1.0'
  };
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
