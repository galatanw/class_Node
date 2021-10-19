                    // שאלה 1
// כתוב "Node is great" לקובץ בעזרת writeFileSync בשימוש default encoding שהוא utf8.
// קרא את המידע בעזרת readFileSync וללא שימוש בencoding. הדפס את התוכן שקבלת לconsole.
// האם התקבלה מחרוזת ? כיצד ניתן לפענח את מה שהתקבל. מה צריך לעשות כדי לקבל מחרוזת תקינה ?.

// const {writeFileSync,readFileSync}=require('fs')

            // writeFileSync('./questionOne.txt','Node is great')
            // let file =readFileSync("questionOne.txt")
                // console.log(file);

            // So, Basically the computer can`t return characters by its on he will recive the value of the charecter as it registred
            // for example  the letter 'A' is registred as 41 (https://www.utf8-chartable.de/ here is a nice site that present every character value) 


            // there are developers who wrote a coding alghorithem that translate the value to readable text this procces is called ENCODING 
            // the correct coding for this kind is utf-8 that would fix the issue and would return us a readable file
            //      the syntax   readFileSync("questionOne.txt",'utf-8')
                

    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------        




    // שאלה 2


// חזור על encoding_2 בשימוש פונקציות א-סנכרוניות writeFile,readFile

// const fs=require('fs')
// fs.writeFile('questionTwo.txt','{"node":"the best"}',(err)=>{
//     if(err){ 
//         console.log('error');
//         return
//     }
// })
//     fs.readFile('questionTwo.txt','utf-8',(err,data)=>{
//         if(err){
//             console.log('error');
//             return
//         }
//         console.log(JSON.parse(data));
//     })
    