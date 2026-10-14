const ar1= [1,2,3,4,5];
let ar2= [1,2,3,4,5];
console.log(ar1);
console.log(ar2);
ar1[0]=20;
ar2=[1,2,3,4,6,7];
console.log(ar1);
console.log(ar2);

ar1[3]=30;
ar2=10;
console.log(ar1);
console.log(ar2);



const ch1= ["abc","def","ghi"];
console.log(ch1);
const arr =["apple","2kg","himachal",20,99.1,true];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log(arr[3]);
console.log(arr.at(-4));



arr.push("delhi");
console.log(arr);

arr.pop();
console.log(arr);


let abc=(arr.filter((item) => item!= "himachal"));
console.log(abc);

const arr2= ["apple","2kg","himachal",20,99.1,true];
console.log("arr2=",arr2);
arr2.splice(3,2);
console.log(arr2);

const name=" hemangi suryawanshi ";
console.log(name);
let x= name.split(" ");
console.log(name);

arr.forEach((Element) => {
    console.log(Element);
})


