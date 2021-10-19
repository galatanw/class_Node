    // שאלה 1
// //true נתון קטע הקוד בצד שמאל ,מה יודפס למסך כאשר e הוא   
// false ומה יודפס כאשר הוא 
// .רצוי לחשוב על התשובה לפני שמריצים
// let e=true
// try {
//     console.log(2);
//     if(e)
//     {
//         throw ""some error""
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);

// When the try would start and e is true so the if statment would accure 
// a throw would create an exeption this would evoke the catch to accure and would log error to the console
// on the other hand if e is false the throw action wouldn`t accure
//  and the catch would not accure because a the catch handles only exeptions cases
// so if e==true the console would show 1,2,4,5
// and if e!=true the console would show 1,2,3,5

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// שאלה 2

// //true נתון קטע הקוד בצד שמאל ,מה יודפס למסך כאשר e הוא   
// false ומה יודפס כאשר הוא 
// .רצוי לחשוב על התשובה לפני שמריצים
// finally רצוי לחשוב על התשובה לפני שמריצים. לימוד עצמי  


// let e=true
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw ""some error""
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// finally{
//     console.log(‘clean up’)
// }
// console.log(5);

// true case would log 1,2,4,clean up,5
// false case would log 1,2,3,clean up,5
// finally  accure whether the exeption happened or not

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// שאלה 3
// כתוב פונקציה safeDiv(num1,num2)
//  אשר מחזירה את החלוקה של הארגומנט הראשון בארגומנט השני
//  במידה והארגומנט השני הוא אפס היא זורקת exception של
//  "Denominator is zero"

// function  safeDiv(num1,num2){
//     try {
//         let result=num1/num2;
//         if (num2===0){
//             throw "Denominator is zero"
//         }
//         return result
//     }
//     catch(err){
//         console.error('error acurred' , err);
//     }
// }
// safeDiv(1,0)

