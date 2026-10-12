//let a = 10;
//b = 20;
//let b; //cannot access b before initialisation
//console.log(a + b);

//let works on scope
//var works on hoisting

/*let p = 10;
p= 20;
console.log( p + q);
var q = 20; */

//temporal dead zone:value is assigned 
var p = 20;
q = 10;
var q;
console.log(p + q);
console.log(p + r);
var r = 20;


let i=20;
{
    let i= 18;
    {
        let i=16;
        {
            let i=14;
            console.log(i);
        }
        console.log(i);
    }
    console.log(i);

}
console.log(i);


let prince = "rahul";
function empire(){
    console.log("The prince of this empire is",prince);
    let princess="unknown";
    console.log("But the princess is",princess);

}
empire();
console.log("Princess of prince",prince);
console.log("is", princess);


//arrow function