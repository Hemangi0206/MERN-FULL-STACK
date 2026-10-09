let a= 10;
let b = 20;
let c= "10";
let d= "20";
console.log(a==b);//false
console.log(a==c);//true
console.log(a===c);//false
console.log(a!=b);//true
console.log(a!==c);//true

let x= 5;
let y= 2;
console.log(x % y);//1

let p= 10;
let q= 3;
console.log(p/q);  //3.333 in js int float treat as number

//AND &&
//OR ||
//NOT !


let m= true;
let n= false;
let o= true;

console.log(m && n);
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(m || o);
console.log(n || o);
console.log(!m && o);
console.log(!n && o);
console.log(!m || n);
console.log(!m || o);


console.log(a++);
console.log(a);
console.log(a--);
console.log(b--);
console.log(b);
console.log(--b);

console.log(a>b?"hello":"bye");


//if else
    /*if(a>b)
{

}
else{

}*/

if(a>b){
    console.log("hello");

}else{
    console.log("bye");
}



//loop
for(var i=0; i<5; i++){
    console.log("we are learning javascript",i+1);
   
}

var i=0;
while(i<=5){
console.log("we are learning javascript",i+1);
i++;
}

;do{
    console.log("we are ");
    i++;
}
while(i<=5)





console.log(1.);

console.log("3.mini statement");
console.log("4.pin change");

console.log("5.deposit cash");
console.log("6.exit");


let choice=1;
switch(choice)
{
    case 1:{
        console.log("checking your balance");
    }
    case 2:{
        console.log("please find your transaction");
    }
    case 3:{
        console.log("enter your name");
    }
    case 4:{
        console.log("put your cash into machine");
    }
    case 5:{
        console.log("enter your pin");
    }
    case 5:{
        console.log("thankyou for");
    }
    default:{
        console.log("wrong balance");
    }
}