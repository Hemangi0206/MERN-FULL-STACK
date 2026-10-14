function greet(){
    console.log("hello guyss");
}
function message(callback){
    callback();
}
message(greet)//callabck function


function calculate(a,b,operation){
    operation(a,b)
}
const add=(a,b)=>{
    console.log(a+b);
}
calculate(10,30,add)



//returning a function from a hof
function multiplication(number, operation)
{
    operation(number);
}
multiplication(5, (value) => {
 console.log(value * 2);
});

function processNumber(number, operation) {
    operation(number);
}

processNumber(5, (value) => {
    console.log(value * 2);
});