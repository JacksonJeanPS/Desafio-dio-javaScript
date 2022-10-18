

const lines = gets();
const salary = Number(lines);
let percent;

if (salary <= 400 ) {
  percent = 15;
} else if (salary > 400.0 && salary <= 800.0) {
  percent = 12;
} else if (salary > 800.0 && salary <= 1200.0) {
  percent = 10;
} else if (salary > 1200.0 && salary <= 2000.0) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (lines * percent) / 100;
const newSalary = parseFloat(lines) + parseFloat(reajust);

print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");
