const fs = require('fs')
function functions(data) {

    switch (process.argv[2]) {
        case 'create':
            add()
            fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
            break
        case 'delete':
            deleteUser()
            fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
            break
        case 'update':
            updateUser()
            fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
            break
        case 'read':
            readUsers()
            break
        default:
            console.error(`not valid options:create,read,update,delete`);
    }
    function add() {
        try {

            let counter = 0
            for (const iterator of data) {
                if (iterator.id == process.argv[3]) {
                    throw `user id exist see in row ${counter}`
                }
                counter++
            }
            const user = {
                id: process.argv[3],
                name: process.argv[4],
                isComplited: "",
                Date: new Date,
            }
            if (process.argv[5] == 'true') {
                user.isComplited = true
            }
            else if (process.argv[5] == 'false') { user.isComplited = false }
            else { throw 'not a valid statuse' }
            data.push(user)
        }
        catch (err) {
            console.error(`error accured at userFunctuality:${err}`);
        }
    }

    function deleteUser() {
        let counter = 0
        for (const iterator of data) {
            if (iterator.id == Number(process.argv[3]) & iterator.name == process.argv[4]) {
                data.splice(counter, 1)
                return console.log('hello');
            }
            counter++
        }
        console.log('failed to delete file make sure you enter the syntax:delete id  name');
    }

    function updateUser() {
        try {
            for (const iterator of data) {
                if (iterator.id == process[3]) {
                    iterator.name = process[4]

                    if (process.argv[6]) {
                        iterator.date = process.argv[6]
                    }
                    else {
                        iterator.date = new Date()

                    }
                    if (process.argv[5] == 'true') {
                        iterator.isComplited = true
                    }
                    else if (process.argv[5] == 'false') { iterator.isComplited = false }
                    else { throw 'not a valid statuse' }

                }
            }

        }
        catch (err) {
            console.error(`error accured at userFunctuality-updateUser:${err}
        syntax=update id name isComplited date(optional-not recomended)`);
        }
    }

    function readUsers() {
        for (const iterator of data) {
            console.log(iterator);
        }
    }
}
module.exports = {
    func: functions
}