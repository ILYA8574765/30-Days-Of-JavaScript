//lvl 1 
let challenge = "30 days JavaScript";
let trim20 = " 30 Days with JavaScript ";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(4,8));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let sent = "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"));
console.log(sent.lastIndexOf("because"));
console.log(sent.search("because"));
console.log(trim20.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match('a'));
let p1 = "30 days";
let p2 = "JavaScript";
console.log(p1.concat(" ", p2));
console.log(challenge.repeat(2));
//lvl 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
let str1 = '10';
console.log(typeof str1 === typeof 10); 
str1 = Number(str1);
console.log(typeof str1 === typeof 10); 

let num = parseFloat('9.8');
console.log(num === 10); 
num = Math.ceil(num);
console.log(num === 10); 
let python = 'Python';
let jargon = 'jargon';
console.log(python.includes('on')); 
console.log(jargon.includes('on')); 

let sentencere = "Надеюсь, этот курс не полон жаргона.";
console.log(sentencere.includes('жаргон')); 

let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

let str = "JavaScript";
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

let sentencer = "Вы не можете закончить предложение с помощью because because because — это союз.";
let result = sentencer.substr(sentencer.indexOf("because"), "because because because".length);
console.log(result); 


//lvl 3
const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const count = (sentence.match(/love/gi) || []).length;
console.log(count); 
const sentence1 = "You cannot end a sentence with because because because is a conjunction";
const count1 = (sentence1.match(/because/gi) || []).length;
console.log(count1); 

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';


const cleanedSentence = sentence2.replace(/[^a-zA-Z\s]/g, '');

const words = cleanedSentence.split(/\s+/);


const wordFrequency = {};
words.forEach(word => {
  if (wordFrequency[word]) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
});

let mostFrequentWord = '';
let maxFrequency = 0;
for (const word in wordFrequency) {
  if (wordFrequency[word] > maxFrequency) {
    maxFrequency = wordFrequency[word];
    mostFrequentWord = word;
  }
}

console.log('Most frequent word:', mostFrequentWord);

const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = incomeText.match(/\d+/g).map(Number);

const monthlySalary = numbers[0];
const annualBonus = numbers[1];
const monthlyCourses = numbers[2];

const totalAnnualIncome = (monthlySalary + monthlyCourses) * 12 + annualBonus;

console.log('Total annual income:', totalAnnualIncome, 'euro');
