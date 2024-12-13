import express from 'express';
const router = express.Router();
import directoryController from '../controllers/directoryController.js'; 

router.post('/', directoryController.createDirectory);
router.get('/', directoryController.getDirectories);
router.put('/:id', directoryController.updateDirectory);
router.delete('/:id', directoryController.deleteDirectory);

export default router;  
