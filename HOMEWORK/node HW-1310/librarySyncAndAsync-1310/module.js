
function adding_a_book(array,Bname,Bautor,Bpages){
    for (const iterator of array) {
       if(  iterator.name==Bname){
           console.log(`you are trying to add "${Bname}" and he is already exists in the array `);
           return
       }
    }
    if(Number(Bpages)){
        array.push(
            {name:`${Bname}`,
            autor:`${Bautor}`,
            pages:Bpages}
            )
            console.log(Bname+`has succesfuly added`);
            return
        }
return console.log("invalid Page value you must insert numeric value only");
    
}

function updateBook (arr){
for (const iterator of arr) {
    if(iterator.name==process.argv[2]){
        let exmpObj=[]
        if(process.argv[2]){
            iterator.name=process.argv[2]
            exmpObj.push(`name:${process.argv[2]},`)
        }
        if(process.argv[3]){
            iterator.autor=process.argv[3]
            exmpObj.push(`autor:${process.argv[3]},`)
        }
        if(process.argv[4]){
            iterator.pages=process.argv[4]
            exmpObj.push(`pages:${process.argv[4]},`)
        }
        return console.log(`${process.argv[2]} have been updated{${exmpObj}}`);
    }
}
}

function deleteBook(arr,Bname) {
    let index=0
       for (const iterator of arr) {
           if (iterator.name==Bname){
                arr.splice(index,0)  
                console.log(`${Bname},  removed`);  
                return
            }
            index++
        }
        console.error('error book not exist')
}

function searchBook(arr,bookName){
    let index=0
    for (const iterator of arr) {

        if (iterator.name==bookName){
            console.log('book found')
            return index
        }
        index++
    }
    console.error("Book not found");
    return -1
}

module.exports.add=adding_a_book
module.exports.update=updateBook
module.exports.delete=deleteBook
module.exports.searchBook=searchBook
