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



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+' onClick={() => {}}/>
            </div>
            {tasksList}
            <div>
                <Button title='All' onClick={()=> changeTodolistFilter('all')}/>
                <Button title='Active' onClick={()=> changeTodolistFilter('active')}/>
                <Button title='Completed' onClick={()=> changeTodolistFilter('completed')}/>
            </div>
        </div>
    );
};

