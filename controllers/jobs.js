const JobsSchema = require('../models/Job')

const GetAllJobs = async (req , res) => {
    res.send('GetAllJobs')
}
const GetSingleJob = async(req , res) => {
    res.send('GetSingleJob')
}
const UpdateJob = async(req , res) => {
    res.send('UpdateJob')
}
const DeleteJob = async(req , res) => {
    res.send('DeleteJob')
}
const CreateJob = async(req , res) => {
    res.send('CreateJob')
}
module.exports = {
    GetAllJobs,GetSingleJob,UpdateJob,DeleteJob,CreateJob
}