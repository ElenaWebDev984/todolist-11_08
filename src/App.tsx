import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {
    const todolistTitle = 'What to learn'

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'React', isDone: false,},
    ])

    const deleteTask = (TaskId: Task['id']) => {
        // tasks.pop()
        const newState = tasks.filter(t => t.id !== TaskId)
        setTasks(newState)
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
