// task 1

let userNameArr = ["Jonathan", "Jessica", "Michael"];

userNameArr[1] = "Classified";

console.log(userNameArr);

// task 2

let starWarsFilmArr = ["New Hope", "Empire strikes back", "Return of the Jedi"];

for(let index in starWarsFilmArr) {
    console.log(`Episode ${Number(index) + 4}: ${starWarsFilmArr[index]}`);
}

// task 3

let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];

function getAnnualSalary(arr) {
    let newArr = [];
    let annualSalary = 0;

    for(let employeeSalaryPool of arr) {
        for(let employeeMonthlyPay of employeeSalaryPool) {
            annualSalary += employeeMonthlyPay;
        }
        newArr.push(annualSalary);
        annualSalary = 0;
    }
    return newArr;
}

function getMonthlySalary(arr, monthIndex) {
    let newArr = [];

    for(let employeeSalaryPool of arr) {
        for(let index in employeeSalaryPool) {
            if(index == monthIndex - 1) {
                newArr.push(employeeSalaryPool[index]);
            }
        }
    }
    return newArr;
}

function getQuarterSalary(arr, quarterTime) {
    let newArr = [];
    let employeeQuarterSalary = 0;

    for(let employeeSalaryPool of arr) {
        for(let index in employeeSalaryPool) {
            switch(quarterTime) {
                case 1:
                    if(index < 3) {
                        employeeQuarterSalary += employeeSalaryPool[index];
                        continue;
                    }
                    break;
                case 2:
                    if(index >= 3 && index < 6) {
                        employeeQuarterSalary += employeeSalaryPool[index];
                        continue;
                    }
                    break; 
                case 3:
                    if(index >= 6 && index < 9) {
                        employeeQuarterSalary += employeeSalaryPool[index];
                        continue;
                    }
                    break;
                case 4: 
                    if(index >= 9 && index <= 11) {
                        employeeQuarterSalary += employeeSalaryPool[index];
                        continue;
                    }
                    break;
                default: return null;
            } 
        }
        newArr.push(employeeQuarterSalary);
        employeeQuarterSalary = 0;
    }
    return newArr;
}

console.log(getAnnualSalary(salary));

console.log(getMonthlySalary(salary, 2));

console.log(getQuarterSalary(salary, 1));

// task 4

let userNumberString = prompt("Give me 5 numbers with comma", "1,2,3,4,5");

let userNumberArr = userNumberString.split(",")

let minNumber = Number(userNumberArr[0]);

for(let userNumber of userNumberArr) {
    minNumber = Number(userNumber) < minNumber ? userNumber : minNumber;
}

console.log(minNumber);

// task 5

let userNumberStr = prompt("Write down all numbers that you want", "1,2,3,4");

console.log(userNumberStr.replaceAll(",", ";"))