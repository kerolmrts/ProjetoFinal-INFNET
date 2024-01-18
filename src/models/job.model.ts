import mongoose, { Schema, Document } from "mongoose";

interface IJob extends Document {
  job_title: string;
  job_requirements: string;
  job_category: string;
  job_shift: string;
  job_type: string;
  job_pay: string;
  job_image: string;
  job_createdAt: number; // Alterado para number para armazenar timestamps
  job_updatedAt: number; // Alterado para number para armazenar timestamps
  job_clicks: number;
}

const jobSchema = new Schema({
  job_title: { type: String, required: true },
  job_requirements: { type: String, required: false },
  job_category: { type: String, required: true },
  job_type: { type: String, required: true },
  job_shift: { type: String, required: false },
  job_pay: { type: String, required: false },
  job_image: { type: String, required: true },
  job_createdAt: { type: Number, required: true, default: Date.now },
  job_updatedAt: { type: Number, required: true, default: Date.now },
  job_clicks: { type: Number, required: true, default: 0 },
});

jobSchema.pre<IJob>('save', function (next) {
  const currentDate = Date.now();
  this.job_updatedAt = currentDate;
  if (!this.job_createdAt) {
    this.job_createdAt = currentDate;
  }
  next();
});

const Job = mongoose.model<IJob>('job', jobSchema);

export default Job;
