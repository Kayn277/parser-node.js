  
import { Router } from 'express';
// Controllers
import { completeBriefController } from '.';


const router = Router();

router.post('/all', completeBriefController.parseAll)
router.post('/allzip', completeBriefController.parseAllZip)
router.post('/:query', completeBriefController.parseQuery)
export default router;