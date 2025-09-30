import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {
    const todolistTitle = 'What to learn'

    let tasks: Task[] = [
        {id: 1, title: 'HTML', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'React', isDone: false,},
    ]

    const deleteTask = () => {
        tasks.pop()
        console.log(tasks)
    }


    return (
        <div className="app">
            <TodolistItem title={todolistTitle}
                          tasks={tasks}
                          deleteTask={deleteTask}/>
        </div>
    )
}
