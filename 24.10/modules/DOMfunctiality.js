const fs = require('fs')
    function add(data,req) {
        try {

            let counter = 0
            for (const iterator of data) {
                if (iterator.id == Number(req.query.id)) {
                    throw `user id exist see in row ${counter}`
                }
                counter++
            }
            const user = {
                id:Number(req.query.id),
                name: req.query.name,
                isComplited: "",
                date: new Date().toDateString(),
            }
            if (req.query.status == 'true') {
                user.isComplited = true
            }
            else if (req.query.status == 'false') { user.isComplited = false }
            else { throw 'not a valid statuse' }
            data.push(user)
        }
        catch (err) {
            console.error(`error accured at userFunctuality:${err}`);
        }
        fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
    }

    function deleteUser(data,req) {
        let counter = 0
        for (const iterator of data) {
            if (iterator.id == Number(req.query.id)) {
                data.splice(counter, 1)
                fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
                return
            }
            counter++
        }
        console.log('failed to delete file make sure you enter the syntax:delete id  name');
        return

    }

    function updateUser(data,req) {
        try {
            for (const iterator of data) {
                if (iterator.id == Number(req.query.id)) {
                    iterator.name = req.query.name

                    if (req.query.date) {
                        iterator.date = req.query.date
                    }
                    else {
                        iterator.date = new Date().toDateString()

                    }
                    if (req.query.status == 'true') {
                        iterator.isComplited = true
                    }
                    else if (req.query.data == 'false') { iterator.isComplited = false }
                    else { throw 'not a valid statuse' }
                   fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
                
                }
            }

        }
        catch (err) {
            console.error(`error accured at userFunctuality-updateUser:${err}
        syntax=update id name isComplited date(optional-not recomended)`);
        }
    }

    function readUsers(data) {
        for (const iterator of data) {
            console.log(iterator);
        }
    }

module.exports = {
    add,
    deleteUser,
    updateUser,
    readUsers
}