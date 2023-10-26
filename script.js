
const questionData = [
    {
        id: 1,
        question: "Für Arbeitgeber und Arbeitnehmer ist die Tarifautonomie gesetzlich festgeschrieben. Welche der folgenden Aussagen treffen auf die Tarifautonomie zu? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein. Die Tarifautonomie ...",
        choices: [
            "gibt den Vertragsparteien das Recht, die Arbeits- und Wirtschaftsbedingungen unabhängig von staatlicher Einflussnahme zu regeln.",
            "gibt den Vertragsparteien das Recht zu Vereinbarungen, die von den Vertragspartnern nicht einseitig zu Ungunsten der Arbeitnehmer abgeändert werden dürfen.",
            "gewährt der Bundesagentur für Arbeit die direkte Eingriffsmöglichkeit in Tarifverhandlungen.",
            "gibt den Vertragsparteien das Recht, unter Beteiligung des Bundeministeriums für Arbeit und Soziales Vereinbarungen zu treffen.",
            "ist individuelles Arbeitsrecht zur Regelung der Beziehungen zwischen einem Arbeitgeber und einem Arbeitnehmer.",
            "gibt den Vertragsparteien das Recht zu Regelungen, die schlechter sind als die in Gesetzen genannten."
        ],
        correctAnswers: [1, 2], // Indexes of correct answers (starting from 1),
        explanation: "Die Tarifautonomie bedeutet, dass Arbeitgeber und Gewerkschaften das Recht haben, Tarifverträge abzuschließen und Arbeitsbedingungen unabhängig von staatlicher Einflussnahme zu regeln. Diese Vereinbarungen dürfen nicht einseitig zu Ungunsten der Arbeitnehmer abgeändert werden und haben Vorrang vor individuellen Arbeitsverträgen (individuellem Arbeitsrecht). Die Bundesagentur für Arbeit hat keine direkte Eingriffsmöglichkeit in Tarifverhandlungen, und es ist nicht erforderlich, dass das Bundeministerium für Arbeit und Soziales an diesen Vereinbarungen beteiligt ist. Regelungen, die schlechter sind als die in Gesetzen genannten, sind in der Regel nicht zulässig."
    },
    {
        id: 2,
        question: "Welche der folgenden Aussagen zur GmbH ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kistchen ein.",
        choices: [
            "Das Stammkapital muss mindestens 50.000 EUR betragen.",
            "Ein Gesellschafter kann gleichzeitig Geschäftsführer sein.",
            "Die GmbH hat keine Firma.",
            "Die Geschäftsführung der GmbH obliegt dem Vorstand.",
            "Die neu gegründete GmbH ist eine juristische Person des öffentlichen Rechts."
        ],
        correctAnswers: [2], // Indexes of correct answers (starting from 1),
        explanation: "In einer GmbH ist es möglich, dass ein Gesellschafter gleichzeitig als Geschäftsführer tätig ist."
    },
    {
        id: 3,
        question: "Mit welchem der folgenden Ereignisse wird eine GmbH rechtsfähig? Tragen Sie die Ziffer vor dem zutreffenden Ereignis in das Kästchen ein.",
        choices: [
            "der Einzahlung des Stammkapitals",
            "der notariellen Beurkundung des Gesellschaftsvertrages",
            "dem Abschluss des ersten Rechtsgeschäfts",
            "der Eintragung in das Handelsregister",
            "der Einberufung der ersten Gesellschafterversammlung"
        ],
        correctAnswers: [4], // Correct answer is option number 4 (starting from 1),
        explanation: "Nach der Eintragung im Handelsregister erhält die GmbH ihre Rechtsfähigkeit und kann rechtsgültige Geschäfte tätigen."
    },
    {
    id: 4,
    question: "In der GreenByte GmbH wird die Zusammenarbeit von Unternehmen in ihrem wirtschaftlichen Umfeld beobachtet. Bei welchem der folgenden Sachverhalte handelt es sich um eine Fusion? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.",
    choices: [
        "Die Lüders KG und die Felder KG führen gemeinsam einen Großauftrag aus.",
        "Die HIES AG, ein Lieferer der GreenByte GmbH, hat die Aktienmehrheit an der Veit AG übernommen.",
        "Die Knebel AG, A-Stadt, vereinbart mit Wettbewerbern einheitliche Verkaufskonditionen.",
        "Zwei Kunden der GreenByte GmbH, die Schmidt GmbH und die Weber KG, schließen sich zur Schmidt GmbH & Co. KG zusammen.",
        "Die HIES KG nimmt einen neuen Gesellschafter auf."
    ],
    correctAnswers: [4], // Correct answer is option number 4 (starting from 1)
    explanation: "In diesem Fall kommt es zur Zusammenlegung von zwei eigenständigen Unternehmen (Schmidt GmbH und Weber KG) zu einem neuen Unternehmen (Schmidt GmbH & Co. KG), was eine Fusion darstellt.\n\nNein, die Bezeichnung 'Co' in einem Firmennamen bedeutet nicht zwangsläufig, dass es sich um eine Fusion handelt. 'Co' steht für 'Compagnie' und wird oft in Firmennamen verwendet, um auf eine Partnerschaft, eine Gesellschaft oder eine Kooperation hinzuweisen. Es kann sich um eine Personengesellschaft (z.B., GmbH & Co. KG) oder eine Kapitalgesellschaft (z.B., AG & Co. KGaA) handeln.\n\nist co nur für fusion firma?\n\nDie Verwendung von 'Co' im Firmennamen kann verschiedene Bedeutungen haben, einschließlich der Aufnahme neuer Partner, einer Fusion, einer Beteiligung oder einer sonstigen Form der Zusammenarbeit. Es ist wichtig, den spezifischen Kontext und die rechtlichen Strukturen des Unternehmens zu prüfen, um zu verstehen, was die Verwendung von 'Co' in einem bestimmten Firmennamen bedeutet."
},
  {
    id: 5,
    question: "Welcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.",
    choices: [
        "Der Staat hebt die Beitragsbemessungsgrenze für die gesetzliche Krankenkasse an.",
        "Der Staat fordert verstärkt Selbstverantwortung bei der Altersversorge.",
        "Der Spitzensteuersatz bei der Einkommenssteuer wird gesenkt.",
        "Kindergartenbeiträge sind für alle Eltern, unabhängig vom Einkommen, gleich hoch.",
        "Der Beitrag zur Krankenversicherung steigt mit individuellem Krankheitsrisiko des Versicherten."
    ],
    correctAnswers: [4], // Correct answer is option number 4 (starting from 1)
    explanation: "Das Prinzip der Solidarität in diesem Fall bedeutet, dass alle Eltern unabhängig von ihrem Einkommen gleich hohe Kindergartenbeiträge zahlen. Dies fördert die Gleichbehandlung und die finanzielle Solidarität innerhalb der Gesellschaft, indem es gleiche Zugangsmöglichkeiten zu Bildungseinrichtungen sicherstellt."
},{
    id: 6,
    question: "Welche der folgenden Aussagen zur GmbH ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.",
    choices: [
        "Das Stammkapital muss mindestens 50.000 EUR betragen.",
        "Ein Gesellschafter kann gleichzeitig Geschäftsführer sein.",
        "Die GmbH hat keine Firma.",
        "Die Geschäftsführung der GmbH obliegt dem Vorstand.",
        "Die neu gegründete GmbH ist eine juristische Person des öffentlichen Rechts."
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "In einer GmbH ist es möglich, dass ein Gesellschafter gleichzeitig als Geschäftsführer tätig ist."
},{
    id: 7,
    question: "Welche der folgenden Aussagen treffen auf ein erwerbswirtschaftliches Unternehmen zu? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.",
    choices: [
        "kann nur Konsumgüter herstellen.",
        "darf keine Gewinne erzielen.",
        "arbeitet gewinnorientiert.",
        "muss jeden Kunden zu staatlich festgelegten Bedingungen und Preisen beliefern.",
        "wirtschaftet nach einem öffentlichen Wirtschaftsplan mit dem Ziel der Bedarfsdeckung.",
        "richtet ihr Portfolio am Marktumfeld aus."
    ],
    correctAnswers: [3, 6], // Correct answers are options 3 and 6 (starting from 1)
    explanation: "Erwerbswirtschaftliche Unternehmen streben in der Regel nach Gewinnmaximierung und orientieren sich an den Markterfordernissen, um wettbewerbsfähig zu bleiben."
},{
    id: 8,
    question: "Welche der folgenden Aussagen über den Betriebsrat ist zutreffend? Tragen Sie die Ziffern vor den zutreffenden Aussagen in die Kästchen ein.",
    choices: [
        "Ein Betriebsrat kann in der GreenByte GmbH nicht gewählt werden, weil sie weniger als 200 Mitarbeitende hat.",
        "Ein Betriebsrat muss je zur Hälfte aus Arbeitnehmern und Arbeitnehmerinnen gebildet werden.",
        "Ein Betriebsrat kann von allen Arbeitnehmern eines Betriebs gewählt werden, die das 18. Lebensjahr vollendet haben.",
        "In einen Betriebsrat können nur Arbeitnehmer gewählt werden, die mindestens eine zweijährige Betriebszugehörigkeit nachweisen können.",
        "Ein Betriebsrat kann nur in tarifvertraglich gebundenen Kapitalgesellschaften gewählt werden."
    ],
    correctAnswers: [2, 3], // Correct answers are options 2 and 3 (starting from 1)
    explanation: "Betriebsräte können in Unternehmen gewählt werden, unabhängig von der Anzahl der Mitarbeitenden, solange es mindestens fünf wahlberechtigte Arbeitnehmer gibt. Betriebsräte müssen geschlechterparitätisch besetzt sein, d.h., sie müssen zur Hälfte aus Männern und zur Hälfte aus Frauen bestehen. Die Wahlberechtigung gilt für alle Arbeitnehmer ab dem vollendeten 18. Lebensjahr, unabhängig von der Betriebszugehörigkeit. Tarifverträge sind für die Bildung eines Betriebsrats nicht notwendig."
}
];

const showExplanationBtn = document.getElementById("showExplanationBtn");
const explanationDiv = document.getElementById("explanation");
const questionDiv = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
let selectedChoices = [];

showExplanationBtn.addEventListener("click", function () {
    const currentQuestion = questionData[currentQuestionIndex];
    explanationDiv.textContent = currentQuestion.explanation;
    explanationDiv.classList.remove("d-none");
});

function displayQuestion(question) {
    questionDiv.textContent = question.question;
    choicesDiv.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", "alert-secondary", "mt-3");
        alertBox.textContent = choice;
        alertBox.setAttribute("data-index", index + 1);
        alertBox.addEventListener("click", handleChoiceClick);
        choicesDiv.appendChild(alertBox);
    });
}

function handleChoiceClick(event) {
    const clickedIndex = parseInt(event.target.getAttribute("data-index"));
    const index = selectedChoices.indexOf(clickedIndex);
    if (index === -1) {
        selectedChoices.push(clickedIndex);
        event.target.classList.remove("alert-secondary");
        event.target.classList.add("alert-primary");
    } else {
        selectedChoices.splice(index, 1);
        event.target.classList.remove("alert-primary");
        event.target.classList.add("alert-secondary");
    }
}

function checkAnswers(userAnswers, correctAnswers) {
    return userAnswers.length === correctAnswers.length && userAnswers.every(answer => correctAnswers.includes(answer));
}

function displayResult(correct) {
    choicesDiv.childNodes.forEach((choice, index) => {
        if (selectedChoices.includes(index + 1)) {
            const isCorrect = questionData[currentQuestionIndex].correctAnswers.includes(index + 1);
            choice.classList.remove("alert-primary");
            choice.classList.remove("alert-danger");
            choice.classList.add(isCorrect ? "alert-success" : "alert-danger");
        }
    });

    if (correct) {
        resultDiv.textContent = "Correct! Well done!";
        resultDiv.classList.add("text-success");
    } else {
        resultDiv.textContent = "Incorrect. Please try again.";
        resultDiv.classList.add("text-danger");
    }
}

let currentQuestionIndex;

function displayRandomQuestion() {
    // Reset explanationDiv content to an empty string
    explanationDiv.textContent = "";

    if (questionData.length === 0) {
        questionDiv.textContent = "No more questions available.";
        choicesDiv.innerHTML = "";
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    currentQuestionIndex = Math.floor(Math.random() * questionData.length);
    const currentQuestion = questionData[currentQuestionIndex];
    selectedChoices = [];

    displayQuestion(currentQuestion);
    submitBtn.disabled = false;
    nextBtn.disabled = true;
    resultDiv.textContent = "";
    resultDiv.classList.remove("text-success", "text-danger");
}

submitBtn.addEventListener("click", function () {
    const currentQuestion = questionData[currentQuestionIndex];
    const correct = checkAnswers(selectedChoices, currentQuestion.correctAnswers);
    displayResult(correct);
    submitBtn.disabled = true;
    nextBtn.disabled = false;
});

nextBtn.addEventListener("click", displayRandomQuestion);

// Initial display of a random question
displayRandomQuestion();
