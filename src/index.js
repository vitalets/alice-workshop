const micro = require('micro');

const server = micro(async (req, res) => {
  if (req.method !== 'POST') {
    return 'Server is running';
  }

  const { request, session } = await micro.json(req);
  return {
    response: {
      text: session.new
        ? 'Привет'
        : `Вы сказали: ${request.command}`,
      tts: session.new
        ? '<speaker audio="alice-music-harp-1.opus">Привет, я ваш голосовой помощник'
        : `Вы сказали: ${request.command}`,
      buttons: [
        { title: 'Здравствуй', hide: true },
        { title: 'Как дела?', hide: true },
      ],
      end_session: false
    },
    version: '1.0'
  };
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
