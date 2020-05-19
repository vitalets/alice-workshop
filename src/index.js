const micro = require('micro');
const replies = require('./replies');

const server = micro(async (req, res) => {
  const { request, session, state } = await micro.json(req);
  const sessionState = state && state.session || {};
  const response = session.new
    ? replies.welcome()
    : checkAnswer(sessionState, request.command);
  return {
    response,
    session_state: sessionState,
    version: '1.0'
  };
});

function checkAnswer(sessionState, command) {
  let question = sessionState.question;
  if (!question) {
    question = generateQuestion(sessionState);
    return replies.firstQuestion(question);
  }

  if (isCorrectAnswer(question, command)) {
    question = generateQuestion(sessionState);
    return replies.correctAnswer(question);
  }

  if (/сдаюсь/i.test(command)) {
    const answer = question.number1 + question.number2;
    question = generateQuestion(sessionState);
    return replies.capitulate(answer, question);
  }

  return replies.incorrectAnswer(question);
}

function isCorrectAnswer(question, command) {
  const matches = command.match(/[0-9]+/);
  const correctAnswer = question.number1 + question.number2;
  return matches && Number(matches[0]) === correctAnswer;
}

function generateQuestion(sessionState) {
  const question = {
    number1: Math.ceil(Math.random() * 20),
    number2: Math.ceil(Math.random() * 20),
  };
  sessionState.question = question;
  return question;
}

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
