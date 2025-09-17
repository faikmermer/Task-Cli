import {addTask, listTasks, updateTask, deleteTask} from './commands'
import { markInProgress, markDone } from './commands';


const args: string[] = process.argv.slice(2) as string[];
const command: string | undefined = args[0];




    switch(command){
        case "add":
             addTask(args[1] as string);
            break;
        case "list":
             listTasks(args[1] as "todo" | "in-progress" | "done" | undefined);
            break;
        case "update":
             updateTask(Number(args[1]), args[2] as string);
            break;
        case "delete":
             deleteTask(Number(args[1]));
            break;
        case "mark-in-progress":
             markInProgress(Number(args[1]));
            break;
        case "mark-done":
             markDone(Number(args[1]));
            break;
        default:
            console.error("Invalid command.");
            process.exit(1);
    }
