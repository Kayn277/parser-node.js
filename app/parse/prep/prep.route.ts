  
import { Router } from 'express';
// Controllers
import { prepController } from '.';


const router = Router();

router.post('/all', prepController.parseAll)
router.post('/allzip', prepController.parseAllZip)
router.post('/:query', prepController.parseQuery)
export default router;