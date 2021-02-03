const randomBtn = document.querySelector('.random');
const loader = document.querySelector('.loader');
const showAnswer = document.querySelector('.show-answer');
const container = document.querySelector('.container');

randomBtn.addEventListener('click', () => {
    fetchData();
    document.querySelector('.answer').classList.add('hidden');
});

const fetchData = async () => {
    loader.classList.remove('hidden');
    randomBtn.disabled = true;

    try {
    const res = await fetch("https://jservice.io/api/random");
    const data = await res.json();

    let question = data[0].question;
    let answer = data[0].answer.replace('<i>', '').replace('</i>', '');
    // console.log(`Question: ${question} | Answer: ${answer}`);

    displayData(question, answer);
    }
    catch (err) {
        alert(err)
    }
    finally {   
        showAnswer.classList.remove('hidden');
        loader.classList.add('hidden');
        randomBtn.disabled = false;
    }
}

const displayData = (ques, ans) => {
    const questionOutput = document.querySelector('.question');
    const answerOutput = document.querySelector('.answer');

    showAnswer.addEventListener('click', () => {
        showAnswer.classList.add('hidden');
        document.querySelector('.answer').classList.remove('hidden');
        answerOutput.textContent = `What is "${ans}"`;
    });
    
    questionOutput.textContent = `Question: ${ques}`;
};
