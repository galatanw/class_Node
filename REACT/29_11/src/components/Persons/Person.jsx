export default function Person (props){
const person=props.person
const loc=props.loc
const deleteFun=props.deleteFun
const update=props.update
return (
    <>
    <th>{person.firstName}</th>
    <th>{person.lastName}</th>
    <th><input id={loc} type="button" value="Delete" onClick={deleteFun}/></th>
    <th><input id={person.id} type="button" value="UPDATE" onClick={update}/></th>
    </>
)


}