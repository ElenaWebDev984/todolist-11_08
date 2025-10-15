import {FilterValuesType, TaskType} from "./types.ts";

export const getTasksForRender = (tasks: TaskType[], filter: FilterValuesType) => {

    return filter === 'active'
        ? tasks.filter(t => !t.isDone)
        : filter === 'completed'
            ? tasks.filter(t => t.isDone)
            : tasks
}