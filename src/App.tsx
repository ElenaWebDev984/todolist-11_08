import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

type FilterValuesType = 'all' | 'active' | 'completed'

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {
    const todolistTitle = 'What to learn'

    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'React', isDone: false,},
    ])

    const deleteTask = (TaskId: Task['id']) => {
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = tasks.filter(t => t.id !== TaskId)
        // TODO 2. сетаем newState
        setTasks(newState)
    }

    // GUI

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const getTasksForRender = (tasks: Task[], filter: FilterValuesType) => {
        return filter === 'active'
            ? tasks.filter(t => !t.isDone)
            : filter === 'completed'
                ? tasks.filter(t => t.isDone)
                : tasks
    }

        const tasksForRender = getTasksForRender(tasks, filter)


        return (
            <div className="app">
                <TodolistItem title={todolistTitle}
                              tasks={tasksForRender}
                              deleteTask={deleteTask}/>
            </div>
        )
    }
