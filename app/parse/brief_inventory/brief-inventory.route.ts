  
import { Router } from 'express';
// Controllers
import { briefController } from '.';


const router = Router();

router.post('/all', briefController.parseAll)
router.post('/allzip', briefController.parseAllZip)
router.post('/', briefController.parseQuery)
export default router;