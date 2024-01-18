import { Request, Response } from 'express';
import Job from '../models/job.model';
import mongoose from 'mongoose';

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createJob = async (req: Request, res: Response) => {
    try {
        const newJob = new Job(req.body);
        console.log(newJob)
        const savedJob = await newJob.save();
        res.status(200).json(savedJob);
        
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getJobsByName = async (req: Request, res: Response) => {    
    try {
        const jobs = await Job.find({'title': { $regex: new RegExp('.*' + req.params.name + '.*', "i") } });
    
        console.log(jobs)
        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteJobById = async (req: Request, res: Response) => {    
    try {
        console.log(req.params.id)

        const idToDelete = new mongoose.Types.ObjectId(req.params.id);

        console.log(idToDelete)

        const deleted = await Job.findOneAndDelete(idToDelete);

        console.log(deleted)
        res.status(200).json(deleted);
        
    } catch (error) {

        console.error(error)
        res.status(500).json(error);
    }
}