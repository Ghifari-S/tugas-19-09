
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function askQuestion(query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// (async () => {
//   const correctPassword = "123456"; // Password yang benar

//   const password = await askQuestion('Masukkan password Anda: ');

//   if (password === correctPassword) {
//     console.log("Password benar. Akses diterima.");
//   } else {
//     console.log("Password salah. Akses ditolak.");
//   }

//   rl.close();
// })();







// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function askQuestion(query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// (async () => {
// const arabicMapping = {
//   "a": "اَ", // Alif dengan fatha
//   "b": "ب", // Ba
//   "c": "ج", // Jim
//   "d": "د", // Dal
//   "e": "هَ", // Ha dengan fatha
//   "f": "ف", // Fa
//   "g": "غ", // Ghayn
//   "h": "ح", // Ha
//   "i": "يِ", // Ya dengan kasra
//   "j": "يَ", // Ya dengan fatha
//   "k": "ك", // Kaf
//   "l": "ل", // Lam
//   "m": "م", // Mim
//   "n": "ن", // Nun
//   "o": "و", // Waw
//   "p": "ب", // Tidak ada padanan langsung, gunakan Ba
//   "q": "ق", // Qaf
//   "r": "ر", // Ra
//   "s": "س", // Seen
//   "t": "ت", // Ta
//   "u": "وُ", // Waw dengan damma
//   "v": "ف", // Tidak ada padanan langsung, gunakan Fa
//   "w": "و", // Waw
//   "x": "س", // Tidak ada padanan langsung, gunakan Seen
//   "y": "ي", // Ya
//   "z": "ز", // Zay
//   " ": " ", // Spasi
// };

// // Fungsi untuk mengonversi teks Latin ke Arab dengan harokat
// function textToArabicWithHarokat(text) {
//   return text.split("").map(char => arabicMapping[char.toLowerCase()] || char).join("");
// }

// // Contoh penggunaan
// const latinText = await askQuestion('Nama Anda: '); 
// const arabicText = textToArabicWithHarokat(latinText);
// console.log(`Teks dalam Arab: ${arabicText}`);
//   rl.close();
// })();







// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function askQuestion(query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// (async () => {
//   const num1 = parseFloat(await askQuestion('Masukkan angka pertama: '));
//   const operator = await askQuestion('Masukkan operator (+, -, *, /): ');
//   const num2 = parseFloat(await askQuestion('Masukkan angka kedua: '));

//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       console.log('Operator tidak valid');
//       rl.close();
//       return;
//   }

//   console.log(`Hasil: ${result}`);
//   rl.close();
// })();









const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  const responseMap = {
    "halo": "Hai! Apa kabar?",
    "siapa kamu?": "Aku adalah bot sederhana.",
    "selamat tinggal": "Sampai jumpa lagi!"
  };

  while (true) {
    const question = await askQuestion('Anda: ');

    if (question === 'exit') {
      console.log("Bot: Sampai jumpa!");
      rl.close();
      break;
    }

    const response = responseMap[question] || "Maaf, saya tidak mengerti.";
    console.log(`Bot: ${response}`);
  }
})();