import mongoose, { Schema, Document } from "mongoose";

interface IJob extends Document {
  job_title: string;
  job_requirements: string;
  job_description: string;
  job_category: string;
  job_shift: string;
  job_type: string;
  job_pay: string;
  job_image: string;
  job_createdAt: number; // Alterado para number para armazenar timestamps
  job_updatedAt: number; // Alterado para number para armazenar timestamps
  job_clicks: number;
  job_company: string;
}

const jobSchema = new Schema({
  job_title: { type: String, required: true },
  job_description: { type: String, required: false },
  job_requirements: { type: String, required: false },
  job_category: { type: String, required: true },
  job_type: { type: String, required: true },
  job_shift: { type: String, required: false },
  job_pay: { type: String, required: false },
  job_mail: { type: String, required: true },
  job_image: { type: String, required: true },
  job_createdAt: { type: Date, required: true, default: Date.now },
  job_updatedAt: { type: Date, required: true, default: Date.now },
  job_clicks: { type: Number, required: true, default: 0 },
  job_company: { type: String, required: false },
},
{timestamps:{
  createdAt: 'job_createdAt',
  updatedAt: 'job_updatedAt'
}});



const Job = mongoose.model<IJob>("job", jobSchema);

export default Job;
