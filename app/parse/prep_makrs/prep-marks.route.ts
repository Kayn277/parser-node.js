  
import { Router } from 'express';
// Controllers
import { prepMarksController } from '.';


const router = Router();

router.post('/all', prepMarksController.parseAll)
router.post('/allzip', prepMarksController.parseAllZip)
router.post('/:query', prepMarksController.parseQuery)
export default router;