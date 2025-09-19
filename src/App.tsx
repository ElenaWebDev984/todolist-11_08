import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export const App = () => {
    const title_1 = 'What to learn'
    const title_2 = 'What to buy'

    return (
        <div className="app">
            <TodolistItem title={title_1} />
            <TodolistItem title={title_2} />
        </div>
    )
}
