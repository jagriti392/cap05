let number=5;
let fact=0;
for(let i=1;i<=number;i++)
{
if(number%i==0)
{
fact++
}
}
if(fact==2)
{
console.log("prime")
}
else{
console.log("Not prime")
}