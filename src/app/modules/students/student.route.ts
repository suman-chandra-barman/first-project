import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller func
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getOneStudent);

export const StudentRouters = router;
