const express = require('express');
const router = express.Router();
const {
    GetAllJobs,GetSingleJob,UpdateJob,DeleteJob,CreateJob
} = require('../controllers/jobs')
router.route('/').post(CreateJob).get(GetAllJobs)
router.route('/:id').get(GetSingleJob).patch(UpdateJob).delete(DeleteJob)

module.exports = router
