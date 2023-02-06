const readFile = require('fs');

console.log('First line started');

readFile.readFile('./content/sub-folder/test.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('complete the task');
})

console.log('Line Ended ');


/*
Output:
First line started
Line Ended
Hello This is the simple test
complete the task 
 */
