export async function calculate(args){
    
    let total = 0;
    let blnOperation = true;
    let numbers = args._.slice(1);
    
    if(args.sum){
        numbers.map((n)=> total += n);
        
    }else if(args.diff){
        total = numbers[0];
        numbers.splice(numbers.indexOf(total), 1);
        numbers.map((n)=> total -= n);

    }else if(args.multiply){
        total = 1;
        numbers.map((n)=> total *= n);

    }else if(args.divide){
        total = numbers[0];
        numbers.splice(numbers.indexOf(total), 1);
        numbers.map((n)=> total /= n);

    }else {
        blnOperation = false;
        console.log('Please select an operation\n--sum or --diff or --multiply or --divide')

    }
    if(blnOperation)  console.log(total);
}