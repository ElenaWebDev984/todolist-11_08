import './App.css'
import {useState} from "react";
import {v1} from 'uuid'
import {FilterValuesType, TasksStateType, TaskType, TodolistType} from "./types.ts";


export const App = () => {

    const todolistId_1 = v1()
    const todolistId_2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId_1, title: 'What to learn', filter: 'all'},
        {id: todolistId_2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todolistId_1]: [
            {id: v1(), title: 'HTML', isDone: true,},
            {id: v1(), title: 'JS', isDone: true,},
            {id: v1(), title: 'React', isDone: false,},
        ],
        [todolistId_2]: [
            {id: v1(), title: 'Milk', isDone: true,},
            {id: v1(), title: 'Bread', isDone: false,},
            {id: v1(), title: 'Orange', isDone: false,},
        ],
    })


    const deleteTask = (taskId: TaskType['id'], todolistId: TodolistType['id']) => {
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = {...tasks,
            [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)}
        // TODO 2. сетаем newState
        setTasks(newState)
    }

    const createTask = (title: TaskType['title'], todolistId: TodolistType['id']) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false,
        }
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = {...tasks,
            [todolistId]: [...tasks[todolistId], newTask]}
        // TODO 2. сетаем newState
        setTasks(newState)
    }

    const changeTaskStatus = (taskId: TaskType['id'], newTaskStatus: TaskType['isDone'], todolistId: TodolistType['id']) => {
        const newState = {...tasks,
            [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: newTaskStatus} : t)}
        setTasks(newState)
    }

    const deleteTodolist = (todolistId: TodolistType['id']) => {
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = todolists.filter(tl => tl.id !== todolistId)
        // TODO 2. сетаем newState
        setTodolists(newState)
        delete tasks[todolistId]
    }

    // GUI

    const changeTodolistFilter = (filter: FilterValuesType, todolistId: TodolistType['id']) => {
        // TODO 1. создаем новый стейт (иммутабельно)
        const newState = todolists.map(tl => tl.id === todolistId ? {...tl, filter: filter} : tl)
        // TODO 2. сетаем newState
        setTodolists(newState)
    }

    const tasksForRender = getTasksForRender(tasks, filter)


    return (
        <div className="app">
            <TodolistItem title={todolistTitle}
                          tasks={tasksForRender}
                          deleteTask={deleteTask}
                          changeTodolistFilter={changeTodolistFilter}
                          createTask={createTask}
                          changeTaskStatus={changeTaskStatus}
                          filter={filter}/>
        </div>
    )
}
