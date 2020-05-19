const micro = require('micro');
const replies = require('./replies');

/**
 * @type {{number1: number, number2: number}}
 */
let question;

const server = micro(async (req, res) => {
  if (req.method !== 'POST') {
    return 'Server is running';
  }

  const { request, session } = await micro.json(req);
  const response = session.new
    ? replies.welcome()
    : checkAnswer(request.command);

  return {
    response,
    version: '1.0'
  };
});

function checkAnswer(command) {
  if (!question) {
    question = generateQuestion();
    return replies.firstQuestion(question);
  }

  if (isCorrectAnswer(command)) {
    question = generateQuestion();
    return replies.correctAnswer(question);
  }

  return replies.incorrectAnswer(question);
}

function isCorrectAnswer(command) {
  // временно
  return true;
}

function generateQuestion() {
  return {
    number1: Math.ceil(Math.random() * 20),
    number2: Math.ceil(Math.random() * 20),
  };
}

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
