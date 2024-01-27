import mongoose from "mongoose";
import Job from "../models/job.model";
require("dotenv").config();

const seedJob = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string, {
      family: 4,
    });

    const JobData = [
      {
        job_title: "Vaga de Estágio",
        job_type: "Estágio",
        job_category: "Direito",
        job_shift: "Manhã",
        job_requirements:
          "Cursando do 5o ao 8o período, proativo e com boa escrita",
        job_mail: "estagiosrn@yahoo.com",
      },
    ];

    await Job.insertMany(JobData);
    console.log("Job seeded successfully.");
  } catch (error) {
    console.error("Error seeding Job:", error);
  }
};

seedJob();
