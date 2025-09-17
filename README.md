# Task-Cli

  ## Table of Content
  - [Overview](#Overview)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Project Details](#ProjectDetails)

## Overview
- This project include TypeScript language and asynchronous working examples. The purpose is to practise and create a back-end example.
- The project creates a task list using command lines. You can add, update, delete, and reassign tasks to this list.

## Installation
1. Make sure you have Node.js installed. (To download Node.js: [Node.js Official Site](https://nodejs.org))
2. Please create name Task-Cli file
    ```
    mkdir Task-Cli
    cd Task-Cli
    ```
    Git (VCS) operations
    ```
    git clone https://github.com/faikmermer/Task-Cli.git

4. Install the dependencies - Devdependencies and ts.config:
   ```bash
   npm init -y
   npm install typescript ts-node @types-node --save--dev
   npx tsc --init
   ```
5. Compilier and Run
   * Debugger
   ```
   npx tsc
   node --inspect-brk dist/index.ts list
   ```
   * Run without Debug
   ```
   #Adding a new task
   npx ts-node add "Buy groceries"
   #Output: Task added successfully (ID: 1)
   
   #Updating and deleting tasks
   npx ts-node update 1 "Buy groceries and cook dinner"
   npx ts-node delete 1
   
   #Marking a task as in progress or done
   npx ts-node mark-in-progress 1
   npx ts-node mark-done 1
   
   #Listing all tasks
   npx ts-node list
   
   #Listing tasks by status
   npx ts-node list done
   npx ts-node list todo
   npx ts-node list in-progress
   ```


## Contributing
Contributions are welcome! To contribute to the project, follow these steps:

1.  Fork the Project
3.  Create your Feature Branch (`git checkout -b feature-name`)
4.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5.  Push to the Branch (`git push origin feature-name`)
6.  Open a Pull Request

## License
Distributed under the Unlicense License.

## Project Details
https://roadmap.sh/projects/task-tracker
