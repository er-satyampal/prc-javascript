
#For Loop:

For loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.

```
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

console.log(text);
```

---

#For In Loop:

For-in loop is a basic control statement that allows you to loop through the properties of an object.

Syntax:

```

const person = {fname:"John", lname:"Doe", age:25};

let text = "";

for (let x in person) {
  text += person[x];
}
```