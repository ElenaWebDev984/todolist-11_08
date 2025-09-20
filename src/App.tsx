import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {
    const todolistTitle_1 = 'What to learn'
    const todolistTitle_2 = 'What to buy'

    const tasks_1: Task[] = [
        {id: 1, title: 'HTML', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'React', isDone: false,},
    ]

    const tasks_2: Task[] = [
        {id: 1, title: 'milk', isDone: true,},
        {id: 2, title: 'orange', isDone: true,},
        {id: 3, title: 'apple', isDone: false,},
    ]

    return (
        <div className="app">
            <TodolistItem title={todolistTitle_1} tasks={tasks_1} />
            <TodolistItem title={todolistTitle_2} tasks={tasks_2} />
        </div>
    )
}
