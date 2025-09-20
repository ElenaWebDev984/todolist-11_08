import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type TodolistItemTypes = {
    title: string
    tasks: Task[]
}


export const TodolistItem = ({title, tasks}: TodolistItemTypes) => {

    const tasksList = tasks.length === 0
        ? <p>Your tasksList is empty</p>
        : <ul>
            {
                tasks.map((task: Task) => {
                    return (
                        <li key={task.id}>
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
                <Button title='+'/>
            </div>
            {tasksList}
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
        </div>
    );
};

