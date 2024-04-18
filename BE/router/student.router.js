import express from 'express';
import { crStudent, deleteStudent, readStudentbyId } from '../controller/student.controllers.js';

const router = express.Router();

router.post('/', crStudent);
router.get('/:studentId/student', readStudentbyId);
router.delete('/:studentId', deleteStudent);
export default router;