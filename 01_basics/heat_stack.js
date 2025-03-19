//stack memory  for premitive (always a copy will form)
//Heap memory  for non -premitive (refrence is given no copy)


//1 //heap memory example

//in this example we can celarly seen that the value inside the myObj gets cahnged by the obj2 , since both were sharing the same memory and the obj2 was also point the same memory
let myObj = {
    name: "hitesh",
    age: 22,
}

obj2 = myObj;

obj2.name = "nilesh";

console.log(myObj); //nilesh , 22
console.log(obj2);  //nilesh , 22


//2//stack memory example
//here the value of a is copied to b so when b gets changed then a remains same. so, premitive data type uses stack memory and are use by value(copy)

var a = 10 ;
var b = a;

b = 40;

console.log(a);
console.log(b);


