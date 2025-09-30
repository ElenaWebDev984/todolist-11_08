import {FilterValuesType, Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type TodolistItemTypes = {
    title: string
    tasks: Task[]
    deleteTask: (TaskId: Task['id']) => void
    changeTodolistFilter: (filterValues: FilterValuesType) => void
}


export const TodolistItem = ({title, tasks, deleteTask, changeTodolistFilter}: TodolistItemTypes) => {

    const tasksList = tasks.length === 0
        ? <p>Your tasksList is empty</p>
        : <ul>
            {
                tasks.map((task: Task) => {
                    const deleteTaskHandler = () => deleteTask(task.id)
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <Button title={'X'} onClick={deleteTaskHandler}/>
                        </li>
                    )
                })
            }
        </ul>

    const changeFilterAllHandler = ()=> changeTodolistFilter('all')
    const changeFilterActiveHandler = ()=> changeTodolistFilter('active')
    const changeFilterCompletedHandler = ()=> changeTodolistFilter('completed')



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+' onClick={() => {}}/>
            </div>
            {tasksList}
            <div>
                <Button title='All' onClick={changeFilterAllHandler}/>
                <Button title='Active' onClick={changeFilterActiveHandler}/>
                <Button title='Completed' onClick={changeFilterCompletedHandler}/>
            </div>
        </div>
    );
};

