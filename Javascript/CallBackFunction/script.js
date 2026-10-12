function add(a,b) {
    let x = a + 5;
    let y = b + 5;
    console.log(x+y);
}

function sum(m , n , jor){
    let p = m*2;
    let q= n*2;
    jor(p ,q);
}
sum(5,6, add);
//p= 5*2=10
// q= 6*2=12
//then came to jor(p,q) go back to summ call add 
//10+5=15
//12+5=17
//15+17=32
sum(8, 10,(a,b) => {
    let x = a + 5;
    let y = b + 5;
    console.log(x+y);
});