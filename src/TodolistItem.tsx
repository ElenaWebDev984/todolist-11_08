import {FilterValuesType, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import {useRef} from "react";

type TodolistItemTypes = {
    title: string
    tasks: Task[]
    deleteTask: (TaskId: Task['id']) => void
    changeTodolistFilter: (filterValues: FilterValuesType) => void
    createTask: (title: Task['title']) => void
}


export const TodolistItem = ({title, tasks, deleteTask, changeTodolistFilter, createTask}: TodolistItemTypes) => {

    const inputRef = useRef<HTMLInputElement>(null);

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
                <input ref={inputRef}/>
                <Button title='+' onClick={() => {
                    if (inputRef.current) {
                        createTask(inputRef.current.value)
                        inputRef.current.value = ''
                    }
                }}/>
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

