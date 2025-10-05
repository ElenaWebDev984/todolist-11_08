import {FilterValuesType, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import {useState, KeyboardEvent, ChangeEvent} from "react";


type TodolistItemTypes = {
    title: string
    tasks: Task[]
    deleteTask: (TaskId: Task['id']) => void
    changeTodolistFilter: (filterValues: FilterValuesType) => void
    createTask: (title: Task['title']) => void
}


export const TodolistItem = ({title, tasks, deleteTask, changeTodolistFilter, createTask}: TodolistItemTypes) => {

    const [itemTitle, setItemTitle] = useState<string>("")

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
    const maxTitleLength = 15
    const createTaskHandler = () => {
        createTask(itemTitle)
        setItemTitle('')
    }
    const onKeyDownCreateTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && itemTitle.length <= maxTitleLength) {
            createTaskHandler()
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setItemTitle(e.currentTarget.value)




    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={itemTitle}
                       onChange={onChangeTitleHandler}
                       placeholder={`Max ${maxTitleLength} characters`}
                       onKeyDown={onKeyDownCreateTaskHandler}
                />
                <Button isDisabled={itemTitle.length > maxTitleLength}
                        title='+'
                        onClick={createTaskHandler}
                />
                {itemTitle && itemTitle.length < maxTitleLength && <div>Rest {maxTitleLength - itemTitle.length} characters</div>}
                {itemTitle && itemTitle.length > maxTitleLength && <div style={{color: 'red'}}>Title is too long</div>}
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

