let a_obj = {'t':[{'elm':1, 'elm2':1},{'elm':2, 'elm2':2 },{'elm':3, 'elm2':3},{'elm':4, 'elm2':4},{'elm':5, 'elm2':5}]};
console.log(a_obj);

for(let i of a_obj['t'] ){
    console.log(i);
}

for (let j = 0; j < a_obj['t'].length; j++) {
let obj = a_obj['t'];
    console.log(obj)
}

function recTest(givenNumber){

    let stack = [];
    for(let i = 1; i <= givenNumber; i++)
    {
    let e = i;
    stack.push(e);
    }
    console.log(stack);

    let sum = 1;
    for(let r = givenNumber; r >= 1; r--)
    {
    let s = r;
    sum*=s;
    }
console.log(`**** Answer = ${sum} \n`);
}

recTest(5);
recTest(3);


