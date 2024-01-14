import mongoose, { Schema, Document } from "mongoose";

interface Ijob extends Document {
    job_title: string; 
    job_description: string;
    job_category: string;
    job_image: string;
    job_rate: number;
  
}

const jobSchema = new Schema({
    job_title: { type: String, required: true },
    job_description: { type: String, required: true },
    job_category: { type: String, required: true },
    job_image: { type: String, required: true },
    job_rate: { type: Number, required: true } 
});

const Job = mongoose.model<Ijob>('job', jobSchema);

export default Job;