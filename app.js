const colors = require('colors');
const readline = require('readline');

console.log("La formula x =75*xi mod(2^16 +1 )".green);
console.log("================================");
var data =[];

async function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}





const main = async () => {
    // console.log("Hola mundo");
    const frecuencia  = await askQuestion("Ingrese hasta donde quiere que se ejecute ");
    const semilla= await askQuestion("Ingrese la semilla ");
    
      
      for (let index = 0; index < frecuencia*1; index++) {
        // console.log(index);
       
        var exp =  Math.pow(2,16);
        var formula = `X ${index} = 75* ${index}  mod(2^16 +1 )`;
        var x = 0;
        var x1 = 0;
    
        if (index == 0) {
            x = semilla;
        }else{
            x =  data[index-1].x1;
        }
         x1 = 75 * x % (exp + 1);
    
        // console.log(exp);
        data.push(
            {
                'x':x*1,
                'x1':x1,
                formula
                // result:result
            }
        )
    }
    
    console.table(data)
    
}

main();