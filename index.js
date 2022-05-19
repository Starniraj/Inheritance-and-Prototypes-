console.log("working..");

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let employee = {
    name : "Rahul",
    designation: "Analyst",
    id : 11809129,
    showDetails : function(){
        console.log(this.name,this.designation,this.id);
    }
}

let employee1 = {
    name : "Niraj",
    designation : "Developer",
    id : 11882385,
}

employee.showDetails.call(employee1);

// 2. Write code to explain prototype chaining

let detail = Object.create(employee);
console.log(detail.__proto__);
console.log(detail.__proto__.__proto__);
console.log(detail.__proto__.__proto__.__proto__);


//3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

array = [1,2,3,4,5,6];
let sum = array.reduce((a,b) => a+b, 0);
console.log(sum);

// 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function prop(){
    console.log(Object.keys(employee1));
}

prop();