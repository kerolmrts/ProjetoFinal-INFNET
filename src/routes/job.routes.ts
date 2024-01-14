import express from "express";
import * as jobController from '../controllers/job.controller';

const router = express.Router();

router.get('/', jobController.getAllJobs)
router.get('/search/:name', jobController.getJobsByName)
router.delete('/:id', jobController.deleteJobById)

export default router;