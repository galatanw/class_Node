const act = document.getElementsByClassName('crudAct')
const form =document.getElementById('formDiv')
function crud(n) {
switch(act[n].innerText){
case 'create':
        form.innerHTML=`
        <form action="/create" method="get">
        <label for="id">ID</label><br>
        <input type="number" name="id" placeholder="ID.."><br>
        <label for="name">name</label><br>
        <input type="text" name="name" placeholder="name.."><br>
        <label for="completd Status">completd Status</label><br>
        <select name="status">
            <option value="true">true</option>
            <option value="false">false</option>
        </select><br>
        <input type="submit" value="ok">
        `
        break
case 'update':
        form.innerHTML=`
        <form action="/update" method="get">
        <label for="id">ID</label><br>
        <input type="number" name="id" placeholder="ID.."><br>
        <label for="name">name</label><br>
        <input type="text" name="name" placeholder="name.."><br>
        <label for="date">DATE *optional*</label><br>
        <input type="date" name="date" placeholder="date.." title:"not optional"><br>
        <label for="completd Status">completd Status</label><br>
        <select name="status">
            <option value="true">true</option>
            <option value="false">false</option>
        </select><br>
        <input type="submit" value="ok">
        `
        break
case 'delete' :
        form.innerHTML=`
        <form action="/delete" method="get">
        <label for="id">ID</label><br>
        <input type="number" name="id" placeholder="ID.."><br>
        <input type="submit" value="ok">

        </form>
        `
        break
default:break 
}
}