import { useState } from "react";
export default function User() {
    const [user, setUser] = useState({name:"gal",email:"atanw",password:"123"})
    const changeUser=(e)=>{
        e.preventDefault()
        const form=e.currentTarget
        const error=[]
            for (let index = 0; index < form.length; index++) {
                const element = form[index].value;
                if(element.length<2){
                    form[index].style.border="1px solid red"
                   error.push(form[index].name+" can't be less than 2 characters")
            }
            else form[index].style.border="1px solid black"
        }
        if (error.length>0)return alert(error.join(`,   
         `))
        const newUser={
            name:form.name.value,
            email:form.email.value,
            password:form.password.value
        }
        setUser(newUser)
    }
    return (
        <div>
            <form onSubmit={changeUser}>
                <input type="text" name="name"/>
                <input type="email" name="email"/>
                <input type="password" name="password"/>
                <input type="submit" name="submit" value="submit" />
            </form>
        </div>
    )
}
