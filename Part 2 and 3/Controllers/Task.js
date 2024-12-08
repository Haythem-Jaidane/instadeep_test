import {addTask,readTask,deleteTask,updateTask,sortByPriorityTask} from "../Services/Task.js"


export const addTaskRequest = async(req,res) =>{
    try {  

        const task =({Title:req.body.Title,
            Description: req.body.Description,
            Priority:req.body.Priority,
            Category:req.body.Category,
            DueDate: req.body.DueDate,
            CompletionStatus:req.body.CompletionStatus})
    
        await addTask(task);
        res.status(201).json("Task add it");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const readTaskRequest = async(req,res) =>{
    try {  
    
        const tasks = await readTask();
        console.log(tasks)
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const sortByPriorityTaskRequest = async(req,res) =>{
    try {  
        const tasks = await sortByPriorityTask();
        console.log(tasks)
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTaskRequest = async(req,res) =>{
    try {  
    
        await deleteTask(req.params.id);
        res.status(200).json("task deleted");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTaskRequest = async(req,res) =>{
    try {  

        const task =({Title:req.body.Title,
            Description: req.body.Description,
            Priority:req.body.Priority,
            Category:req.body.Category,
            DueDate: req.body.DueDate,
            CompletionStatus:req.body.CompletionStatus})
    
        await updateTask(req.params.id,task);
        res.status(200).json("task updated");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


