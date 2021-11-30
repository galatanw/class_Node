export const deleteTasks = (state) => {
    let deletedTasks = this.state.deletedTasks.sort((a, b) => b - a)
    let tasks = this.state.tasks
    deletedTasks.map((item, i) => {
        return tasks.splice(item, 1)
    })
    this.setState({ tasks: tasks })
    this.setState({ deletedTasks: [] })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}