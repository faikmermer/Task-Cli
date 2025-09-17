import { saveTask, loadTask } from "./storage";
import Task from "./types";

async function addTask(description: string): Promise<void> {
    const task : Task[] = await loadTask();

    const newTask: Task = {
        id : task.length + 1,
        description : description,
        status : "todo",
        createdAt : new Date().toISOString(),
        updatedAt : new Date().toDateString()
    };
    task.push(newTask);
    await saveTask(task);
    console.log(`Task added succesfully. (id: ${newTask.id})`);
    return;
    
}


async function listTasks(status?: "todo" | "in-progress" | "done" | undefined) : Promise<void> {
    const tasks : Task[] = await loadTask();
    if(tasks.length === 0){
        console.log("No tasks found.");
        return;
    }

    for(const task of tasks){
        if(task.status === status || !status){
            console.log(`${task.id}. [${task.status}] - ${task.description}
                 (created at: ${task.createdAt}, updated at: ${task.updatedAt})`);
        }
    }
    return;
}


async function updateTask(id : number, description : string) : Promise<void> {
    const tasks : Task [] = await loadTask();
    
    for(const task of tasks){
        if(task.id === id){
            task.description = description;
            task.updatedAt = new Date().toISOString();
            await saveTask(tasks);
            console.log(`Task with id ${id} updated successfully.`);
            return;
        }
    }
    console.log(`Task with id ${id} not found.`);
    return;

}

async function deleteTask(id: number) : Promise<void> {
    const tasks : Array<Task> = await loadTask();
    const index = tasks.findIndex(task => task.id === id);

    if(index === -1){
        console.log(`Task with id ${id} not found.`);
        return;
    }
    tasks.splice(index, 1);
    await saveTask(tasks);
    console.log(`Task with id ${id} deleted successfully.`);
    return;
   
}

async function markInProgress(id : number) : Promise<void> {

    const tasks : Array<Task> = await loadTask();

    for(const task of tasks){
        if(task.id === id){
            task.status = "in-progress";
            task.updatedAt = new Date().toISOString();
            await saveTask(tasks);
            console.log(`Task with id ${id} marked as in-progress.`);
            return;
        }
    }
}

async function markDone(id : number) : Promise<void> {
    const tasks : Array<Task> = await loadTask();

    for(const task of tasks){
        if(task.id === id){
            task.status = "done";
            task.updatedAt = new Date().toISOString();
            await saveTask(tasks);
            console.log(`Task with id ${id} marked as done.`);
            return;
        }
    }
}

export { addTask, listTasks, updateTask, deleteTask, markInProgress, markDone };