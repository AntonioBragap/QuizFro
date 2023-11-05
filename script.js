let currentQuestion = 1;
let currentTeam = 'blue';

document.getElementById('blueButton').addEventListener('click', function () {
  if (currentTeam === 'blue') {
    document.getElementById('teamBlue').style.display = 'none';
    document.getElementById('teamOrange').style.display = 'block';
    currentTeam = 'orange';
  }
});

document.getElementById('orangeButton').addEventListener('click', function () {
  if (currentTeam === 'orange') {
    document.getElementById('teamOrange').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
  }
});

function checkAnswer(team, answer) {
  if (answer === 1) {
    alert(`Resposta correta! A equipe ${team} ganha um ponto.`);
  } else {
    alert(`Resposta incorreta! A equipe ${team} não ganha pontos.`);
  }

  currentQuestion++;
  document.getElementById('questionText').innerHTML = `Pergunta ${currentQuestion}: Próxima pergunta?`;

  currentTeam = 'blue';
  document.getElementById('teamBlue').style.display = 'block';
  document.getElementById('teamOrange').style.display = 'none';
}
