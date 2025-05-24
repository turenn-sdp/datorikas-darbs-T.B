function submitSurvey() {
  const totalQuestions = 5;
  let answers = [];

  for (let i = 1; i <= totalQuestions; i++) {
    const options = document.getElementsByName('q' + i);
    let answered = false;

    for (let j = 0; j < options.length; j++) {
      if (options[j].checked) {
        answers.push(options[j].value);
        answered = true;
        break;
      }
    }

    if (!answered) {
      document.getElementById('result').innerText = 'Lūdzu, aizpildi visas atbildes pirms iesniegšanas!';
      return;
    }
  }

  let positiveCount = 0;
  answers.forEach(function(answer) {
    if (answer.includes('Jā') || answer.includes('Ļoti') || answer.includes('Pilnīgi')) {
      positiveCount++;
    }
  });

  if (positiveCount >= 3) {
    document.getElementById('result').innerText = 'Paldies! Tu esi informēts par garīgo veselību.';
  } else {
    document.getElementById('result').innerText = 'Paldies par atbildēm! Iesakām uzzināt vairāk par pieejamo atbalstu.';
  }
}