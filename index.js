// optional chaining(?)
const user = {
  addres: "solo",
};
const city = user?.addres?.city;
if (!city) {
  console.log("kota tidak ditemukan");
}
console.log(city);

const newCity = city ?? "online";
console.log(newCity);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i.length]; j++){
        console.log(matrix[i][j])
    }
}

for (let i in matrix){
    for(let j in matrix){
        console.log()
    }
}
