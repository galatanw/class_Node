export default function AddTask(props) {
        return (
                <form onSubmit={props.addA_Task}>
                    <input name="task" type="text" />
                    <input type="submit" value="Ready" />
                </form>
        )
}
