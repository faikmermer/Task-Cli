import {addTask, listTasks, updateTask, deleteTask} from './commands'
import { markInProgress, markDone } from './commands';


const args: string[] = process.argv.slice(2) as string[];
const command: string | undefined = args[0];



(async () => {
    switch(command){
        case "add":
            await addTask(args[1] as string);
            break;
        case "list":
            await listTasks(args[1] as "todo" | "in-progress" | "done" | undefined);
            break;
        case "update":
            await updateTask(Number(args[1]), args[2] as string);
            break;
        case "delete":
            await deleteTask(Number(args[1]));
            break;
        case "mark-in-progress":
            await markInProgress(Number(args[1]));
            break;
        case "mark-done":
            await markDone(Number(args[1]));
            break;
        default:
            console.error("Invalid command.");
            process.exit(1);
    }
})();