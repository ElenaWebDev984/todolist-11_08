import {Task} from "./App.tsx";

type TodolistItemTypes = {
    title: string
    tasks: Task[]
}


export const TodolistItem = ({title, tasks}: TodolistItemTypes) => {

    const tasksList = tasks.length === 0
        ? <span>Your tasksList is empty</span>
        : <ul>
            {
                tasks.map((task: Task) => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                        </li>
                    )
                })
            }
        </ul>



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

