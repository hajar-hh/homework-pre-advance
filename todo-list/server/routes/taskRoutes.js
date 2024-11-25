import express from 'express'; 
import taskController from '../controllers/taskController.js'; 

const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/directories/:dirId/tasks', taskController.getTasksByDirectory);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router; 
