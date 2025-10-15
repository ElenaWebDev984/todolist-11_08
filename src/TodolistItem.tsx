
import {Button} from "./Button.tsx";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import {FilterValuesType, TaskType} from "./types.ts";


type TodolistItemTypes = {
    title: string
    tasks: TaskType[]
    deleteTask: (TaskId: TaskType['id']) => void
    changeTodolistFilter: (filterValues: FilterValuesType) => void
    createTask: (title: TaskType['title']) => void
    changeTaskStatus: (TaskId: TaskType['id'], newTaskStatus: TaskType['isDone']) => void
    filter: FilterValuesType
}


export const TodolistItem = ({
                                 title,
                                 tasks,
                                 deleteTask,
                                 changeTodolistFilter,
                                 createTask,
                                 changeTaskStatus,
                                 filter
                             }: TodolistItemTypes) => {

    const [itemTitle, setItemTitle] = useState<string>("")
    const [error, setError] = useState(false)

    const tasksList = tasks.length === 0
        ? <p>Your tasksList is empty</p>
        : <ul>
            {
                tasks.map((task: TaskType) => {
                    const deleteTaskHandler = () => deleteTask(task.id)
                    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, event.currentTarget.checked)
                    return (
                        <li key={task.id}>
                            <input type="checkbox"
                                   checked={task.isDone}
                                   onChange={changeTaskStatusHandler}
                            />
                            <span className={task.isDone ? 'task-done' : 'task'}>{task.title}</span>
                            <Button title={'X'} onClick={deleteTaskHandler}/>
                        </li>
                    )
                })
            }
        </ul>

    const changeFilterAllHandler = () => changeTodolistFilter('all')
    const changeFilterActiveHandler = () => changeTodolistFilter('active')
    const changeFilterCompletedHandler = () => changeTodolistFilter('completed')
    const maxTitleLength = 15
    const createTaskHandler = () => {
        const trimmedTitle = itemTitle.trim()
        if(trimmedTitle !== '') {
            createTask(itemTitle)
        } else {
            setError(true)
        }
        setItemTitle('')
    }
    const onKeyDownCreateTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && itemTitle.length <= maxTitleLength) {
            createTaskHandler()
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setItemTitle(e.currentTarget.value)
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={itemTitle}
                       onChange={onChangeTitleHandler}
                       placeholder={`Max ${maxTitleLength} characters`}
                       onKeyDown={onKeyDownCreateTaskHandler}
                       className={error ? 'inputError' : ''}
                />
                <Button isDisabled={itemTitle.length > maxTitleLength || error}
                        title='+'
                        onClick={createTaskHandler}
                />
                {itemTitle && itemTitle.length < maxTitleLength &&
                    <div>Rest {maxTitleLength - itemTitle.length} characters</div>}
                {itemTitle && itemTitle.length > maxTitleLength && <div style={{color: 'red'}}>Title is too long</div>}
                {error && <div style={{color: 'red'}}>Title is required</div>}
            </div>
            {tasksList}
            <div>
                <Button title='All'
                        onClick={changeFilterAllHandler}
                        classes={filter === 'all' ? 'filter-btn-active' : ''}
                />
                <Button title='Active'
                        onClick={changeFilterActiveHandler}
                        classes={filter === 'active' ? 'filter-btn-active' : ''}
                />
                <Button title='Completed'
                        onClick={changeFilterCompletedHandler}
                        classes={filter === 'completed' ? 'filter-btn-active' : ''}
                />
            </div>
        </div>
    );
};

