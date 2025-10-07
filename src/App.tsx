import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed'

export type Task = {
    id: string
    title: string
    isDone: boolean
}

export const App = () => {
    const todolistTitle = 'What to learn'

    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: 'HTML', isDone: true,},
        {id: v1(), title: 'JS', isDone: true,},
        {id: v1(), title: 'React', isDone: false,},
    ])

    const deleteTask = (TaskId: Task['id']) => {
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = tasks.filter(t => t.id !== TaskId)
        // TODO 2. сетаем newState
        setTasks(newState)
    }

    const createTask = (title: Task['title']) => {
        const newTask: Task = {
            id: v1(),
            title,
            isDone: false,
        }
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = [...tasks, newTask]
        // TODO 2. сетаем newState
        setTasks(newState)
    }

    const changeTaskStatus = (TaskId: Task['id'], newTaskStatus: Task['isDone']) => {
        const newState = tasks.map(t => t.id !== TaskId ? {...t, isDone: newTaskStatus } : t)
        setTasks(newState)
    }

    // GUI

    const [filter, setFilter] = useState<FilterValuesType>('all')
    const changeTodolistFilter = (filterValues: FilterValuesType) => setFilter(filterValues)

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
                          deleteTask={deleteTask}
                          changeTodolistFilter={changeTodolistFilter}
                          createTask={createTask}
                          changeTaskStatus={changeTaskStatus}/>
        </div>
    )
}
