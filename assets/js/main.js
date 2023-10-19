// =========================== Functions-Level-1_2 =========================

// Deklariere die Funktion intro2() mit dem Parameter (paramName). Im Funktionskörper {} passiert dann Folgendes:
// Deklariere die Variable name mit dem Wert “SuperCoder:in”.
// Gib dazu folgendes in der Konsole aus: Hi SuperCoder:in. Mein Name ist xyz.
// Rufe die Funktion mit verschiedenen Argument auf und schaue was passiert.

function intro2(paramName) {
  const name = "SuperCoder";
  console.log("Hi " + name + " mein Name ist " + paramName);
}

intro2("Konstantin");

// =========================== Functions-Level-1_3 =========================

// Deklariere die Funktion intro3() mit den drei Parametern (name, stadt, alter).
// Gib unter Verwendung der entsprechenden Argumente folgenden Satz in der Konsole aus: "Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf."

function intro3(firstName, city, age) {
  console.log(
    "Hallo mein Name ist " +
      firstName +
      ". " +
      "Ich bin " +
      age +
      " Jahre alt. Ich komme aus " +
      city +
      "."
  );
}

intro3("Konstantin", "Leverkusen", "28");

// =========================== Functions-Level-1_4 =========================

// Deklariere die Funktion hero() mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen
// Deklariere drei Variablen name, power und enemy.
// Weise den Variablen dann diese Werte zu
// a. Mein:e Lieblingsheld:in ist: xyz
// b. Er/sie hat die Fähigkeit: xyz
// Sein/ihr größte/r Gegner:in ist: xyz.
// Füge die passenden Parameter in die Variablen ein.
// Gib name + power + enemy in der Konsole aus.
// Ruf deine Funktion auf.
// Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.

function hero(heroName, heroPower, heroEnemy) {
  const name = "Mein:e Lieblingsheld:in ist: " + heroName;
  const power = "Er/sie hat die Fähigkeit: " + heroPower;
  const enemy = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy;

  console.log(name, power, enemy);
}

hero("Ich selbst", "lernen", "Ich selbst");

// =========================== Functions-Level-1_5 =========================

// Deklariere die Funktion math() mit zwei Parametern. Im Funktionskörper{} passiert Folgendes:
// Gib in der Konsole die Multiplikation von den beiden Parametern aus.
// Gib in der Konsole die Division von den beiden Parametern aus.
// Ruf die Funktion mit den Argumenten (10, 2) auf.
// Teste auch andere Werte: 30, 20 // 100, 100 // 5, 0 // 45, 173 // 1, 1000.

function math(firstParam, secondParam) {
  console.log(firstParam * secondParam);
  console.log(firstParam / secondParam);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

// =========================== lev1_1: forms+js_function-double =========================

// Erstelle ein Formular, in dem du eine Zahl eingeben kannst.
// Erstelle einen Button, der eine Funktion aufruft.
// Deklariere eine Funktion, die den Wert aus deinem Input mit 2 multipliziert.
// Das Ergebnis soll in deinem HTML ausgegeben werden.

function double() {
  const number = document.body.querySelector("form input");
  const result = document.body.querySelector("form p");

  result.textContent = number.value * 2;
}

// ===========================  lev1_2: forms+js_function-your-age =========================

// Erstelle ein Formular, in dem du dein Geburtsjahr eingeben kannst.
// Nutze einen Button, der eine Funktion aufruft.
// Definiere eine Funktion, die dein Alter in Jahren ausgibt.
// Gib dein Alter in deinem HTML aus.

function calculate() {
  const birthyear = document.body.querySelector(".form2 input");
  const result2 = document.body.querySelector(".form2 p");

  result2.textContent = 2023 - birthyear.value;
}

// ===========================  lev1_3: forms+js_compare-age =========================

// Erstelle ein Formular, um das Alter von zwei Leuten zu vergleichen.
// Nutze zwei Input Felder.
// Nutze einen Button, der eine Funktion aufruft.
// Definiere eine Funktion, die die Differenz in Jahren ausgibt.
// Gib die Differenz in deinem HTML aus.

function compare() {
  const numberOne = document.body.querySelector(".form3 input:nth-of-type(1)");
  const numberTwo = document.body.querySelector(".form3 input:nth-of-type(2)");
  const result3 = document.body.querySelector(".form3 p");

  result3.textContent = numberOne.value - numberTwo.value;
}

// ===========================  Classlist-Level-1_1 =========================

// Erstelle eine HTML-Datei mit der Headline “Meine Bucket-List” und einer Liste mit Dingen, die du gerne machen oder erleben möchtest.
// Gib der Headline und der Liste jeweils eine eindeutige ID.
// Erstelle im CSS zwei neue Klassen und vergebe dort eine font-family, sowie Textfarbe und Schriftgröße deiner Wahl. Natürlich darfst du auch gerne mehr Stylings verwenden.
// Du wirst eine Klasse für die Headline und eine Klasse für die Liste nutzen. Überleg dir also passende Namen und Stylings für die Klassen. Weise nun mit JavaScript der Headline und der Liste die jeweiligen Klassen zu.

const headline = document.body.querySelector("#headline");
const list = document.body.querySelector("#list");

headline.classList.add("class2");
list.classList.add("class1");

// ===========================  Classlist-Level-2_1 =========================

// In dieser Aufgabe, soll ein Button erstellt werden, der beim Klicken eine Funktion ausführt. Füge dazu im HTML einen Button “Headline stylen” hinzu.
// Gib dem Button die Funktion changeHeadline() mit. Im JavaScript nutzt du jetzt den Button, um der Headline das neue CSS Styling zuzuweisen.
// Erstelle auch einen Button “Headline zurücksetzen” und weise ihm die Funktion resetHeadline() zu. Wie der Name schon sagt, soll das Styling der Headline beim Klicken auf den Button zurückgesetzt werden, also musst du die Funktion im JavaScript dementsprechend definieren.

function changeHeadline() {
  headline.classList.add("class3");
}

function resetHeadline() {
  headline.classList.remove("class3");
}

// ===========================  Functions-Level-3_1 =========================

// Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der <h1>.
// Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// In deinem JS definierst du dann die Funktionalität, d.h. du schreibst jeweils eine eigene Funktion für die SuperBalls.

const headline2 = document.body.querySelector(".superballs__wrapper h1");
const background = document.body.querySelector(".superballs__wrapper");

function change1() {
  headline2.classList.toggle("color1");
  background.classList.toggle("color1");
}

function change2() {
  headline2.classList.toggle("color2");
  background.classList.toggle("color2");
}

function change3() {
  headline2.classList.toggle("color3");
  background.classList.toggle("color3");
}

function change4() {
  headline2.classList.toggle("color4");
  background.classList.toggle("color4");
}
