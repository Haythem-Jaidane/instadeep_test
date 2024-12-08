import express from 'express';
import {
    addTaskRequest,
    readTaskRequest,
    deleteTaskRequest,
    updateTaskRequest,
    sortByPriorityTaskRequest
} from '../Controllers/Task.js';

const router = express.Router({ mergeParams: true });


router.post('/', addTaskRequest)
router.get('/',readTaskRequest)
router.get('/sorted',sortByPriorityTaskRequest)
router.delete('/:id',deleteTaskRequest)
router.put('/:id',updateTaskRequest)

export default router;