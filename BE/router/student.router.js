import express from 'express';
import { crStudent, deleteStudent, readStudentbyId, updateStudent } from '../controller/student.controllers.js';

const router = express.Router();

router.post('/', crStudent);
router.get('/:studentId/student', readStudentbyId);
router.delete('/:studentId', deleteStudent);
router.patch('/:studentId', updateStudent);
export default router;