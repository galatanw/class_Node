export default function AddTask(props) {
        const display={display:props.display}
        return (
                <form style={display} onSubmit={props.addA_Task}>
                    <input name="task" type="text" />
                    <input type="submit" value="Ready" />
                </form>
        )
}
