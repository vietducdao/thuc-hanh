// destructuring
var array = ["a", "b", "c", "d", "e"];
var [first, , third] = array;
console.log(first, third);

// Exercise 2
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "28",
};

const { firstName: name, age } = person;
console.log(name, age);

// Ex3:
var array = [...[1, 2, 3], ...[4, 5, 6]];
console.log(array);

// Ex4

var numbers = [1, 2, 3, 4, 5];
var [...rest] = numbers;
console.log(numbers);
console.log(rest);

// ex5

var person1 = { name: "Alice", age: 25 };

var person2 = { ...person1, gender: "female" };

console.log(person2);

// ======================PROMISE==============================//
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const name = "vietduc";
    if (name === "vietduc1") {
      resolve("Hello, Promise!");
    } else {
      reject("not found");
    }
  }, 2000);
});

promise
  .then((message) => {
    console.log("success===>", message);
  })
  .catch((error) => {
    console.log("error===>", error);
  });

// =========================================MAP===================================//

var numbers = [1, 2, 3, 4, 5];
function squareArr(numbers) {
  return numbers.map((num) => num * num);
}
var squareNumbers = squareArr(numbers);
console.log(squareNumbers);

// =================================REDUCE=========================================//

var numbers = [1, 2, 3, 4, 5];
function sumArr(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

var sumNumbers = sumArr(numbers, 0);
console.log(sumNumbers);

// ==============================FILTER=========================================//

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (numbers) {
  return numbers % 2 == 0;
});
console.log(evenNumbers);

// ================================FIND=======================================//
// ================================BAI TAP====================================//
const hs = ["a", "b", "c", "d"];

hs.push("e");
hs.unshift("f");
hs.pop();
hs.shift();
console.log("Do dai cua mang hien tai", hs.length, hs);

// =======================================BAI TAP NGAY 3==================================//
// =======================================Dao Nguoc Chuoi=================================//
function reverse(s) {
  return s.split("").reverse().join("");
}
var myString = "heeloo";
var reversedmyString = reverse(myString);
console.log(reversedmyString);

// =============================LUYEN TAP PALIDROME(CHUA TIM HIEU HET)=======================================//
function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Ramar";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

// ================================XUAT THONG TIN SINH VIEN==================================//

const hs = {
  name: "Dao Viet Duc",
  age: "20",
  address: "Cau Giay, HN",
};
const hsInfo = `
Thông tin sinh viên:
=======================
-Họ tên:${hs.name},

-Tuổi:${hs.age},

-Địa chỉ:${hs.address}

`;
console.log(hsInfo);

// ===================================PHUONG TRINH BAC 2===============================//

let ptb2 = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`Phuơng trình có 2 nghiệm phân biệt: x1=${x1}, x2=${x2}`);
  } else if (delta === 0) {
    let x1 = (-b / 2) * a;
    console.log(`Phương trình có nghiệm kép: x1=x2=${x1}`);
  } else {
    console.log(`Phương trình vô nghiệm`);
  }
};

ptb2(1, 2, -3);
ptb2(1, 2, 1);
ptb2(1, 1, 1);
// ======================================SCOPE=================================================//
// - Khi gọi hàm mới được gọi ra phạm vi mới
function logger(first, last) {
  console.log(first, last);
}
logger("a", "b");
logger("c", "d");
logger("e", "f");

// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

function logger(first, last) {
  console.log(first, last);
  const age = 20;
  console.log(age);
}
logger("a", "b");
logger("c", "d");
logger("e", "f");

// ===================================BAI TAP CLOSURE========================================//
// Ex1
function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// Ex2

function create(initalValue) {
  let toVar = initalValue;

  return {
    setValue: (param) => {
      toVar = param;
    },
    getValue: () => {
      return toVar;
    },
  };
}

const closure = create("");

console.log(closure.getValue());
closure.setValue("");
console.log(closure.getValue());

function sleep() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
}

sleep(1000).then(function (result) {
  console.log(result);
});
const name = "url";
var promise = new Promise((resolve, reject) => {
  const fetchData = "url";
  if (name === fetchData) {
    resolve("https://jsonplaceholder.typicode.com/todos/1");
  } else {
    reject("error");
  }
});
promise
  .then((data) => {
    console.log("Fetch thành công:", data);
  })
  .catch((error) => {
    console.error("Fetch thất bại:", error);
  });

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetchData("https://jsonplaceholder.typicode.com/todos/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//===============================================async/await=====================================//
const getValue = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  let data = await response.json();
  return data;
};
getValue().then((data) => {
  console.log("get data: ", data);
});

function logger() {
  let log = "abc";
  return log;
}
const response = async () => {
  try {
    let log = logger();
    console.log(log);
  } catch (error) {
    console.error(error);
  }
};
response();

const firstName = async () => {
  console.log("start");
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response === false) {
      console.error("resquest failed", response.status);
    }
    const users = await response.json();
    if (users.length > 0) {
      const firstUser = users[0];
      console.log(`ID: ${firstUser.id}`);
      console.log(`Name: ${firstUser.name}`);
      console.log(`Email: ${firstUser.email}`);
      console.log("result");
    } else {
      console.error("user not found", error);
    }
  } catch (error) {
    console.error("no user  here", error);
  } finally {
    console.log("finally");
  }
};
firstName();
