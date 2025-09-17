
import  Task  from "./types";
import * as fs from 'fs';

export async function loadTask(): Promise<Task[]> {

   try{
    const data : string = await fs.promises.readFile('tasks.json', 'utf-8');
    const tasks = JSON.parse(data) as Task[];
    if(tasks.length === 0){
        return [];
    }
    return tasks;
   }catch(error){
    console.error("Error reading tasks.json file:", error);
    return [];

   }
}

export async function saveTask(task: Task[]): Promise<void> {
   await fs.promises.writeFile('tasks.json', JSON.stringify(task, null, 2));
}