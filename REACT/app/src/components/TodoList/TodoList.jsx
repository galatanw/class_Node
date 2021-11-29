
export default function TodoList(props) {
    
        const disbaleDelete = props.disbaleDelete
        const task = props.tasks.task
        const status = props.tasks.status.toString()
        return (
            <>
                <td>{task} </td>
                <td>{status}</td>
                <td><input onClick={props.update}   type="button" id={props.loc} value="UPDATE" /></td>
                {
                        props.selectAll?
                        <td><input onClick={props.deleter}  disabled={disbaleDelete} type="checkbox" id={props.loc}  checked={true} /></td>:
                <td><input onClick={props.deleter}  disabled={disbaleDelete} type="checkbox" id={props.loc} /></td>
                }
                </>
        )
}
