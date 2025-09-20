import {Task} from "./App.tsx";

type TodolistItemTypes = {
    title: string
    tasks: Task[]
}


export const TodolistItem = ({title, tasks}: TodolistItemTypes) => {

    const tasksItems = tasks.map(task => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
            </li>
            )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

