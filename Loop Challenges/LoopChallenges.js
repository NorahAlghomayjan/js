// Print odds 1-20

console.log("1st task:")
for (i=0;i<20; i++) {if (i%2 != 0) {console.log(i);}}

// Decreasing Multiples of 3
console.log("2nd task:")
for (i=100;i>0; i--) {if (i%3 == 0) {console.log(i);}}


// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

console.log("3rd task:")
var i=4;
while(i>=-3.5) {console.log (i); i-=1.5;}


// Sigma
console.log("4th task:")
var sum=0;
for (i=1;i<=100;i++){sum+=i}
console.log(sum);

// Factorial
var product = 1;
var i = 1
for (i=1; i<=12;i++) {product*=i;}
console.log(product);