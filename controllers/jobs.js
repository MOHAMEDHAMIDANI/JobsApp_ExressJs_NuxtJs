const { StatusCodes } = require('http-status-codes');
const JobsSchema = require('../models/Job')
const { BadRequestError , NotFoundError} = require('../errors/index')
const GetAllJobs = async (req , res) => {
    const userId = req.user.userId;
  const jobs = await JobsSchema.find().sort('createdAt')
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}
const GetSingleJob = async(req , res) => {
    const {user:{userId}, params:{id:jobId}} = req;
    const job = await JobsSchema.findById({ _id : jobId, createdBy :userId })
    if(!job){
        throw new NotFoundError('Job Not Found ')
    }
    res.status(StatusCodes.OK).json(job)

}
const UpdateJob = async(req , res) => {
    const {user:{userId}
    , params:{id:jobId}
    ,body : {company , position}} = req;
        if(!company || !position){
            throw new BadRequestError('company & position cannot be empty ')
        }
    const job = await JobsSchema.findByIdAndUpdate({ _id : jobId, createdBy :userId }, req.body,{
        new: true , runValidators: true 
    })
    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
}
const DeleteJob = async(req , res) => {
    const {user:{userId}, params:{id:jobId}} = req;
    const job = await JobsSchema.findByIdAndDelete({_id  : jobId , createdBy : userId})
    if(!job){
        throw new NotFoundError('Job Not Found ')
    }
    res.status(StatusCodes.OK).send('deleted successfully')
}
const CreateJob = async(req , res) => {
    req.body.createdBy = req.user.userId
    const {company ,position , status , createdBy} = req.body
    const job = await JobsSchema.create({company ,position , status , createdBy})
    res.status(StatusCodes.CREATED).json({job})
}
module.exports = {
    GetAllJobs,GetSingleJob,UpdateJob,DeleteJob,CreateJob
}
