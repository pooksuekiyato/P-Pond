const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Calculator!!');



rl.question('~Choose function~ \npress 1 : + \npress 2 : - \npress 3 : * \npress 4 : /  ', (choose) => {
  rl.question('input 1st number ', (num1) => {
    rl.question('input 2nd number ', (num2) => {
     
  if(choose==1){
  console.log(`\nResult is: ${num1+num2}`);
  }else if(choose==2){
    console.log(`\nResult is: ${num1-num2}`);
  }else if(choose==3){
    console.log(`\nResult is: ${num1*num2}`);
  }else if(choose==4){
    console.log(`\nResult is: ${num1 / num2} `);
  }else{
    console.log(`\nerror! - cannot calcualate`);
  }
  rl.close();
});
});
});