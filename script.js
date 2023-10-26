
const questionData = [
    {
        id: 1,
        question: "Für Arbeitgeber und Arbeitnehmer ist die Tarifautonomie gesetzlich festgeschrieben. Welche der folgenden Aussagen treffen auf die Tarifautonomie zu? Die Tarifautonomie ...",
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
        question: "Mit welchem der folgenden Ereignisse wird eine GmbH rechtsfähig?",
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
    question: "In der GreenByte GmbH wird die Zusammenarbeit von Unternehmen in ihrem wirtschaftlichen Umfeld beobachtet. Bei welchem der folgenden Sachverhalte handelt es sich um eine Fusion?",
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
    question: "Welcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität?",
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
    question: "Welche der folgenden Aussagen zur GmbH ist zutreffend?",
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
    question: "Welche der folgenden Aussagen treffen auf ein erwerbswirtschaftliches Unternehmen zu?",
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
    question: "In der GreenByte GmbH wurde ein Betriebsrat gewählt. Welche der folgenden Aussagen über den Betriebsrat ist zutreffend?",
    choices: [
        "Ein Betriebsrat kann in der GreenByte GmbH nicht gewählt werden, weil sie weniger als 200 Mitarbeitende hat.",
        "Ein Betriebsrat muss je zur Hälfte aus Arbeitnehmern und Arbeitnehmerinnen gebildet werden.",
        "Ein Betriebsrat kann von allen Arbeitnehmern eines Betriebs gewählt werden, die das 18. Lebensjahr vollendet haben.",
        "In einen Betriebsrat können nur Arbeitnehmer gewählt werden, die mindestens eine zweijährige Betriebszugehörigkeit nachweisen können.",
        "Ein Betriebsrat kann nur in tarifvertraglich gebundenen Kapitalgesellschaften gewählt werden."
    ],
    correctAnswers: [2, 3], // Correct answers are options 2 and 3 (starting from 1)
    explanation: "Betriebsräte können in Unternehmen gewählt werden, unabhängig von der Anzahl der Mitarbeitenden, solange es mindestens fünf wahlberechtigte Arbeitnehmer gibt. Betriebsräte müssen geschlechterparitätisch besetzt sein, d.h., sie müssen zur Hälfte aus Männern und zur Hälfte aus Frauen bestehen. Die Wahlberechtigung gilt für alle Arbeitnehmer ab dem vollendeten 18. Lebensjahr, unabhängig von der Betriebszugehörigkeit. Tarifverträge sind für die Bildung eines Betriebsrats nicht notwendig."
},{
    id: 9,
    question: "Die Geschäftsleitung der GreenByte GmbH arbeitet eng mit dem Betriebsrat zusammen. In welchen der folgenden Angelegenheiten hat der Betriebsrat laut Betriebsverfassungsgesetz ein Mitbestimmungsrecht?",
    choices: [
        "Errichtung eines neuen Hochregallagers",
        "Planung des Personalbedarfs für 2022",
        "Wechsel des Logistikanbieters",
        "Einführung eines neuen elektronischen Zeiterfassungssystems",
        "Festlegung von Richtlinien zur gleitenden Arbeitszeit",
        "Umwandlung der Rechtsform"
    ],
    correctAnswers: [4, 5], // Correct answers are options 4 and 5 (starting from 1)
    explanation: "In diesen beiden Angelegenheiten hat der Betriebsrat das Recht, mitzubestimmen."
},{
    id: 10,
    question: "Zur GreenByte HmbH liegen folgende Daten vor: Gesellschaft mit beschränkter Haftung. IT-Dienstleister. 25% Marktanteil in der Region. 110 Mitarbeiterende. 1.520.000 EUR Gewinn im Jahr 2020. Welche der folgenden Angaben treffen auf die GreenByte GmbH zu? Tragen Sie (zwei) Angaben ein und erklären Sie warum:",
    choices: [
        "Kapitalgesellschaft",
        "Monopolist in der Region",
        "Unternehmen des primären Sektors",
        "Großunternehmen",
        "Erwerbswirtschaftliches Unternehmen",
        "Personengesellschaft"
    ],
    correctAnswers: [1, 5], // Correct answers are options 1 and 5 (starting from 1)
    explanation: "Die Bezeichnung 'Gesellschaft mit beschränkter Haftung (GmbH)' deutet darauf hin, dass es sich um eine Kapitalgesellschaft handelt. Bei einer GmbH ist das Haftungskapital auf die Einlagen der Gesellschafter beschränkt. Die GreenByte GmbH ist ein IT-Dienstleister und erzielt Gewinne. Da sie in wirtschaftlichen Aktivitäten engagiert ist und einen Gewinn erwirtschaftet, ist sie ein erwerbswirtschaftliches Unternehmen."
},{
    id: 11,
    question: "Die GreenByte GmbH plant, zwei Fachinformatiker Anwendungsentwicklung (m/w/d) einzustellen. Welche der folgenden Formulierungen in einer Stellenanzeige verstößt gegen das Allgemeine Gleichbehandlungsgesetz (AGG)?",
    choices: [
        "Sie verfügen über hervorragende Kenntnisse in Webprogrammierung.",
        "Sie passen in unser junges dynamisches Team, wenn Sie jünger als 30 Jahre sind.",
        "Sie sind mobil und bereit, auch mehrtägige Geschäftsreisen zu unternehmen.",
        "Sie sind an flexible Arbeitszeiten gewohnt und können gelegentlich abends länger arbeiten.",
        "Sie beherrschen die englische Sprache verhandlungssicher in Wort und Schrift."
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "Diese Formulierung stellt eine Diskriminierung aufgrund des Alters dar, was gegen das Allgemeine Gleichbehandlungsgesetz (AGG) verstößt. Diskriminierende Einstellungspraktiken aufgrund des Alters sind in Deutschland nach dem AGG verboten."
},{
    id: 12,
    question: "In der Geschäftsführung der GreenByte GmbH werden Maßnahmen zur Arbeitssicherheit im Unternehmen diskutiert.<br><br>Welche der folgenden Aussagen trifft auf die Arbeitssicherheit im Unternehmen zu?",
    choices: [
        "Betriebliche Arbeitsschutzbestimmungen sind eine freiwillige Leistung des Arbeitgebers.",
        "Betriebliche Arbeitsschutzbestimmungen gelten nur, wenn sie tarifvertraglich vereinbart wurden.",
        "Der Arbeitgeber muss alle notwendigen Maßnahmen des Arbeitsschutzes treffen und die Einhaltung im Betrieb überwachen.",
        "Die regelmäßige Unterweisung in Arbeitsschutzbestimmungen erfolgt in Unternehmen durch externe Berater der Industrie- und Handelskammer.",
        "Die Ergonomie von Arbeitsplätzen ist nicht notwendig, weil die Ergonomie nicht der Arbeitssicherheit dient."
    ],
    correctAnswers: [3], // Correct answer is option number 3 (starting from 1)
    explanation: "Gemäß dem Arbeitsschutzgesetz ist der Arbeitgeber verpflichtet, alle erforderlichen Maßnahmen des Arbeitsschutzes zu treffen, um die Sicherheit und Gesundheit der Mitarbeiter zu gewährleisten. Dies beinhaltet die Überwachung der Einhaltung dieser Maßnahmen im Betrieb."
},{
    id: 13,
    question: "Die GreenByte GmbH möchte zukünftig in den Arbeitsverträgen eine Probezeit von sechs Monaten vereinbaren.<br><br>Welche der folgenden Aussagen trifft auf die Probezeit zu?",
    choices: [
        "Eine Probezeit darf nur bei unbefristeten Arbeitsverträgen vereinbart werden.",
        "Eine Probezeit von sechs Monaten ist gesetzlich zulässig.",
        "Die Probezeit muss mindestens zwölf Monate betragen.",
        "Der Arbeitgeber kann die Probezeit beliebig oft verlängern.",
        "Während der Probezeit kann nur der Arbeitnehmer das Arbeitsverhältnis kündigen."
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "Eine Probezeit von sechs Monaten ist gesetzlich zulässig. Während der Probezeit haben Arbeitgeber und Arbeitnehmer die Möglichkeit, die Eignung und Passung des Arbeitsverhältnisses zu prüfen. In dieser Zeit gelten besondere Kündigungsfristen und Bedingungen, die im Arbeitsvertrag festgelegt werden können."
},{
    id: 14,
    question: "Die GreenByte GmbH ist Mitglied des Arbeitgeberverbandes.<br><br>Bei welcher der folgenden Vereinbarungen des Arbeitsvertrags ist die GreenByte GmbH an kollektives Arbeitsrecht gebunden?",
    choices: [
        "Die Wochenarbeitszeit beträgt regelmäßig 38 Stunden.",
        "Das Arbeitsverhältnis beginnt am 1. Juli 2021 und ist unbefristet.",
        "Der Mitarbeiter erhält einen außertariflichen Fahrgeldzuschuss von 100,00 EUR.",
        "Der Mitarbeiter arbeitet im T-Service in der Kundenbetreuung im Außendienst.",
        "Die GreenByte GmbH bietet dem Mitarbeitenden die Möglichkeit, ein Jobticket für den OPNV zu erwerben."
    ],
    correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
    explanation: "Im Arbeitgeberverband können Tarifverträge bestehen, die die wöchentliche Arbeitszeit für die Mitgliedsunternehmen regeln. Daher ist die Festlegung der regelmäßigen Wochenarbeitszeit eine Vereinbarung, die an das kollektive Arbeitsrecht gebunden sein kann."
},{
    id: 15,
    question: "In der Unternehmenszentrale der GreenByte GmbH in Hamburg arbeiten insgesamt 110 Mitarbeitende. Durch Unterbrechungen in der Lieferkette und Auftragsstörungen von Kunden können für voraussichtlich zwei Monate die Mitarbeitenden nur zum geringen Teil beschäftigt werden. Das Unternehmen möchte aber den Mitarbeitenden möglichst nicht kündigen, weil sich zum Jahresende die Auftragslage voraussichtlich wieder normalisiert.<br><br>Welche der folgenden Aussagen trifft zu?",
    choices: [
        "Die GreenByte GmbH muss allen Mitarbeitenden außerordentlich kündigen.",
        "Die GreenByte GmbH darf jederzeit die Gehälter der Mitarbeitenden kürzen.",
        "Die Mitarbeitenden müssen für die Dauer der geringen Beschäftigung unbezahlten Urlaub nehmen.",
        "Die betroffenen Mitarbeitenden haben Anspruch auf Arbeitslosengeld.",
        "Die GreenByte GmbH kann bei der Bundesagentur für Arbeit für die Mitarbeitenden Kurzarbeitergeld beantragen."
    ],
    correctAnswers: [5], // Correct answer is option number 5 (starting from 1)
    explanation: "In Situationen, in denen Mitarbeiter aufgrund vorübergehender Unterbrechungen in der Arbeitsbeschäftigung nicht vollständig beschäftigt werden können, können Unternehmen in Deutschland Kurzarbeitergeld bei der Bundesagentur für Arbeit beantragen. Dieses Programm unterstützt Unternehmen dabei, die Lohnkosten zu reduzieren, während die Mitarbeiter weiterhin beschäftigt bleiben. Die Mitarbeiter erhalten dann einen Teil ihres Lohns durch das Kurzarbeitergeld ausgeglichen."
},{
    id: 16,
    question: "Die berufliche Weiterbildung wird in der GreenByte GmbH gefördert, um die Wettbewerbsfähigkeit des Unternehmens auch in Zukunft zu gewährleisten.<br><br>Welche der folgenden Aussagen zur beruflichen Weiterbildung ist zutreffend?<br><br>Die berufliche Weiterbildung...",
    choices: [
        "ist in der IT-Branche zur Vertiefung und Erweiterung von Kenntnissen und Fertigkeiten notwendig.",
        "ist für Arbeitnehmer grundsätzlich kostenpflichtig, weil die Weiterbildung überwiegend im persönlichen Interesse des Arbeitnehmers liegt.",
        "darf nur außerbetrieblich in Einrichtungen zertifizierter Bildungsträger erfolgen.",
        "muss immer als Aufstiegsfortbildung mit einer Abschlussprüfung vor der Industrie- und Handelskammer angelegt sein.",
        "ist nur in einem anerkannten Ausbildungsberuf zulässig."
    ],
    correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
    explanation: "In der IT-Branche, die sich durch rasche technologische Entwicklungen auszeichnet, ist berufliche Weiterbildung entscheidend, um mit den aktuellen Trends und Technologien Schritt zu halten und wettbewerbsfähig zu bleiben. Unternehmen investieren oft in die Weiterbildung ihrer Mitarbeiter, um deren Fähigkeiten und Kenntnisse auf dem neuesten Stand zu halten."
},{
    id: 17,
    question: "Eine Mitarbeiterin der GreenByte GmbH ist arbeitsunfähig, weil sie am Vortag auf dem direkten Weg zur Arbeit bei einem Sturz vom Fahrrad schwer verletzt wurde.<br><br>Welche der folgenden Aussagen ist in diesem Zusammenhang zutreffend?<br><br>Die GreenByte GmbH...",
    choices: [
        "muss den Unfall der Krankenversicherung der Mitarbeiterin melden.",
        "darf die Gehaltszahlung ab dem ersten Krankheitstag einstellen.",
        "darf den Urlaubsanspruch der Mitarbeiterin kürzen.",
        "muss den Unfall der Gewerbeaufsichtsbehörde melden.",
        "muss den Unfall der Berufsgenossenschaft melden."
    ],
    correctAnswers: [5], // Correct answer is option number 5 (starting from 1)
    explanation: "In Deutschland müssen Arbeitgeber Arbeitsunfälle, die sich auf dem Weg zur Arbeit oder während der Arbeit ereignen, der zuständigen Berufsgenossenschaft melden. Die Berufsgenossenschaft ist für die Versicherung und Entschädigung von Arbeitsunfällen zuständig."
},{
    id: 18,
    question: "Nach der letzten Gehaltserhöhung übersteigt das Bruttogehalt von Melanie Fuchs die Beitragsbemessungsgrenze für die gesetzliche Rentenversicherung.<br><br>Welche der folgenden Konsequenzen ergibt sich aus der Gehaltserhöhung für Frau Fuchs?<br><br>Frau Fuchs...",
    choices: [
        "muss sich nun privat versichern.",
        "muss nun für einen Teil ihres Gehalts keinen Rentenversicherungsbeitrag mehr leisten.",
        "erhält für die Sozialversicherung keinen Arbeitgeberanteil mehr.",
        "ist in der gesetzlichen Rentenversicherung nicht mehr versicherungspflichtig.",
        "kann die Beiträge an die Rentenversicherung gegen Selbstbehalt reduzieren."
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "Wenn das Bruttogehalt eines Arbeitnehmers die Beitragsbemessungsgrenze für die gesetzliche Rentenversicherung übersteigt, müssen sie nur für den Teil ihres Gehalts Rentenversicherungsbeiträge leisten, der innerhalb dieser Grenze liegt. Gehälter über dieser Grenze sind von der Rentenversicherung befreit."
},{
    id: 19,
    question: "Die Solidarität ist ein gesellschaftspolitisches Prinzip, das in der Bundesrepublik Deutschland angewendet wird.<br><br>Welcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität?",
    choices: [
        "Der Staat hebt die Beitragsbemessungsgrenze für die gesetzliche Krankenkasse an.",
        "Der Staat fordert verstärkt Selbstverantwortung bei der Altersvorsorge.",
        "Der Spitzensteuersatz bei der Einkommenssteuer wird gesenkt.",
        "Kindergartenbeiträge sind für alle Eltern, unabhängig vom Einkommen, gleich hoch.",
        "Der Beitrag zur Krankenversicherung steigt mit individuellem Krankheitsrisiko des Versicherten."
    ],
    correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
    explanation: "Das Prinzip der Solidarität in der gesetzlichen Krankenversicherung bedeutet, dass Menschen mit höherem Einkommen mehr in die Krankenversicherung einzahlen, um diejenigen zu unterstützen, die weniger verdienen. Wenn die Beitragsbemessungsgrenze angehoben wird, tragen Menschen mit höherem Einkommen einen größeren Teil der Kosten, was dem Prinzip der Solidarität entspricht."
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
