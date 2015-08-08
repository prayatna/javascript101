// solution 2 Fibo sum

var a,b,c,sum;
a=1;b=0;
c=0;sum=0;

for(var i =2; c <4000000; i++)
{ 
   c=a+b;
   if(c%2===0)
   {
       sum+=c;
   }
   
   a=b;
   b=c;
}
console.log("sum ="+sum );

