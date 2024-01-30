import AppController from '../controllers/AppController';

import StudentsController from '../controllers/StudentsController';

const { Router } = require('express');

const router = Router();

const path = process.argv[2];

router.get('/', (res, req) => AppController.getHomepage(res, req));
router.get('/students', (res, req) => StudentsController.getAllStudents(res, req, path));
router.get('/students/:major', (res, req) => StudentsController.getAllStudentsByMajor(res, req, path));

module.exports = router;
