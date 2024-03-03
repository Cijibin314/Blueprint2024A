document.addEventListener('DOMContentLoaded', function() {
    const quizQuestions = [
        {
            question: "When is the best time to water your lawn to minimize evaporation?",
            options: ["Noon", "Late evening or early morning", "Mid-afternoon", "Just before sunset"],
            correctAnswer: 1,
            explanation: "Late evening or early morning is best, as it minimizes evaporation, making watering more effective."
        },
        {
            question: "What is the benefit of using mulch around plants and trees?",
            options: ["It attracts more insects.", "It retains moisture and reduces evaporation.", "It requires frequent replacement.", "It increases the need for watering."],
            correctAnswer: 1,
            explanation: "Mulch significantly helps retain soil moisture and reduces the need for frequent watering."
        },
        {
            question: "Why are native grasses recommended for lawns?",
            options: ["They require more water and maintenance.", "They are not suitable for most environments.", "They minimize water usage and require less effort.", "They need to be mowed more frequently."],
            correctAnswer: 2,
            explanation: "Native grasses are adapted to the local environment, needing less water and maintenance, making them an eco-friendly choice."
        },
        {
            question: "Approximately what percentage of water used for lawn maintenance is wasted due to inefficient irrigation systems?",
            options: ["10%", "25%", "50%", "75%"],
            correctAnswer: 2,
            explanation: "Surprisingly, up to 50% of water can be wasted due to inefficiencies, emphasizing the need for regular system checks and maintenance."
        },
        {
            question: "What is an effective alternative to chemical herbicides and synthetic fertilizers?",
            options: ["Regular watering", "Organic and natural alternatives", "Increased mowing frequency", "Ignoring pest control"],
            correctAnswer: 1,
            explanation: "Organic and natural alternatives are safer for both the environment and the health of your lawn, promoting a more sustainable approach."
        },
        {
            question: "How can you use rainwater for your lawn?",
            options: ["By installing a rain barrel to collect and use rainwater", "By using more tap water", "By watering more frequently", "By installing more sprinklers"],
            correctAnswer: 0,
            explanation: "Installing a rain barrel is a simple and effective way to conserve water and make use of natural rainfall."
        },
        {
            question: "What does allowing your lawn to 'go wild' mean?",
            options: ["Installing artificial turf", "Regular mowing and trimming", "Allowing natural vegetation to grow freely", "Using more chemical fertilizers"],
            correctAnswer: 2,
            explanation: "Letting your lawn 'go wild' means allowing natural vegetation to thrive, which can support local ecosystems and reduce maintenance."
        },
        {
            question: "What is a key action to take for spreading awareness about sustainable lawn care?",
            options: ["Encouraging the use of more water", "Promoting the purchase of synthetic fertilizers", "Sharing experiences and tips on water conservation", "Advising against the use of mulch"],
            correctAnswer: 2,
            explanation: "Sharing personal experiences and tips can greatly contribute to spreading awareness and encouraging sustainable practices."
        },
        {
            question: "Why should shaded areas be watered less than areas exposed to sunlight?",
            options: ["To increase water usage", "To promote the growth of non-native plants", "To minimize water waste and runoff", "To enhance the need for chemical treatments"],
            correctAnswer: 2,
            explanation: "Shaded areas retain moisture longer and require less watering, helping to minimize unnecessary water use and runoff."
        },
        {
            question: "What makes drought-tolerant grass species or native plants preferable for lawns?",
            options: ["They require more frequent mowing and maintenance.", "They enhance the use of chemical treatments.", "They require less water and are low-maintenance.", "They are more expensive in the long term."],
            correctAnswer: 2,
            explanation: "Drought-tolerant and native plants are ideal for sustainable lawns due to their low water and maintenance needs."
        }
    ];
 
 
    const submitButton = document.getElementById('submit-quiz');
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('quiz-results');
 
 
    function generateQuiz() {
        quizQuestions.forEach((question, questionIndex) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
 
 
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = question.question;
            questionDiv.appendChild(questionTitle);
 
 
            question.options.forEach((option, optionIndex) => {
                const optionLabel = document.createElement('label');
                optionLabel.className = 'option';
 
 
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = `question${questionIndex}`;
                optionInput.value = optionIndex;
 
 
                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(document.createTextNode(option));
                questionDiv.appendChild(optionLabel);
                questionDiv.appendChild(document.createElement('br'));
            });
 
 
            quizForm.appendChild(questionDiv);
        });
    }
 
 
    function showResults() {
        let score = 0;
        quizQuestions.forEach((question, questionIndex) => {
            const selector = `input[name="question${questionIndex}"]:checked`;
            const userAnswer = (document.querySelector(selector) || {}).value;
            const questionDivs = document.querySelectorAll('.question')[questionIndex];
            const explanationDiv = document.createElement('div');
 
 
            if (parseInt(userAnswer) === question.correctAnswer) {
                score++;
                if (questionDivs.querySelector('.incorrect-answer')) {
                    questionDivs.querySelector('.incorrect-answer').remove();
                }
            } else {
                explanationDiv.innerHTML = `<p class="incorrect-answer">Nice try! ${question.explanation}</p>`;
                questionDivs.appendChild(explanationDiv);
                questionDivs.querySelectorAll('label')[userAnswer].classList.add('incorrect-answer');
            }
            questionDivs.querySelectorAll('label')[question.correctAnswer].classList.add('correct-answer');
        });
 
 
        const percentageScore = (score / quizQuestions.length) * 100;
        resultsContainer.innerHTML = `<h2>Your Score: ${percentageScore.toFixed(2)}%</h2>`;
        if (percentageScore === 100) {
            resultsContainer.innerHTML += `<p class="celebrate">Amazing! You've aced the quiz!</p>`;
        }
    }
 
 
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.correct-answer').forEach(e => e.classList.remove('correct-answer'));
        document.querySelectorAll('.incorrect-answer').forEach(e => {
            e.classList.remove('incorrect-answer');
            if (e.tagName.toLowerCase() === 'p') e.remove(); // Remove explanation paragraphs
        });
        showResults();
    });
 
 
    generateQuiz();
 });
 
