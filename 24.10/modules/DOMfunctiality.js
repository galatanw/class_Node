const fs = require('fs')
function add(data, req) {
    try {
        let counter = 0
        for (const iterator of data) {
            if (iterator.id == Number(req.query.id)) {
                console.log('here');
                throw `user id exist see in row ${counter}`
            }
            counter++

        }
        const user = {
            id: Number(req.query.id),
            name: req.query.name,
            isCompleted: "",
            date: new Date().toDateString(),
        }
        if (req.query.status == 'true') {
            user.isCompleted = true
        }
        else if (req.query.status == 'false') { user.isCompleted = false }
        else { throw 'not a valid statuse' }
        data.push(user)
    }
    catch (err) {
        console.log('caught');
        console.error(`error accured at domFunctuality-create:${err}`);
        return false
    }
    fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
    console.log('true');
    return true
}

function deleteUser(data, req) {
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
            iterator.name=req.query.name
                if (req.query.date) {
                    iterator.date = req.query.date
                }
                else {
                    iterator.date = new Date().toDateString()
                }
                if (req.query.status == 'true') {
                    iterator.isCompleted = true
                }
                else if (req.query.status == 'false') { iterator.isCompleted = false }
                else { throw 'not a valid statuse' }
                fs.writeFileSync('./files/users.json', `${JSON.stringify(data)}`)
                return true
            }
        }
    }
    catch (err) {
        console.error(`error accured at domFunctuality-updateUser:${err}`);
        return false
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