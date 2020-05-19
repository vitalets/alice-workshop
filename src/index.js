const micro = require('micro');
const replies = require('./replies');

/**
 * @type {Map<{number1: number, number2: number}>}
 */
const questions = new Map();

const server = micro(async (req, res) => {
  const { request, session } = await micro.json(req);
  const response = session.new
    ? replies.welcome()
    : checkAnswer(session.session_id, request.command);
  return {
    response,
    version: '1.0'
  };
});

function checkAnswer(sessionId, command) {
  let question = questions.get(sessionId);
  if (!question) {
    question = generateQuestion(sessionId);
    return replies.firstQuestion(question);
  }

  if (isCorrectAnswer(question, command)) {
    question = generateQuestion(sessionId);
    return replies.correctAnswer(question);
  }

  if (/сдаюсь/i.test(command)) {
    const answer = question.number1 + question.number2;
    question = generateQuestion(sessionId);
    return replies.capitulate(answer, question);
  }

  return replies.incorrectAnswer(question);
}

function isCorrectAnswer(question, command) {
  const matches = command.match(/[0-9]+/);
  const correctAnswer = question.number1 + question.number2;
  return matches && Number(matches[0]) === correctAnswer;
}

function generateQuestion(sessionId) {
  const question = {
    number1: Math.ceil(Math.random() * 20),
    number2: Math.ceil(Math.random() * 20),
  };
  questions.set(sessionId, question);
  return question;
}

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
