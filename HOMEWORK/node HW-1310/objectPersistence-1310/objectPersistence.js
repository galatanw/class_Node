const BooksArray=[
    {name:"bookA",description:"A VERY INTERENSTING BOOK",pages:200},
    {name:"bookB",description:"A VERY INTERENSTING BOOK",pages:150},
    {name:"bookC",description:"A VERY INTERENSTING BOOK",pages:300},
    {name:"bookD",description:"A VERY INTERENSTING BOOK",pages:480},
    {name:"bookE",description:"A VERY INTERENSTING BOOK",pages:700},
    {name:"bookF",description:"A VERY INTERENSTING BOOK",pages:200}
]
function createBooksArr(filename,nameA,descriptiod,nameB,nameC,nameD,nameE,nameF){
    const {writeFile}=require('fs')
        writeFile(filename,booksArr)
}