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
        job_title: "Vaga de Estágio em TI",
        job_type: "Estágio",
        job_category: "TI",
        job_shift: "Tarde",
        job_requirements:
          "Cursando a partir do 3o período de Ciência da Computação, conhecimento em Java",
        job_mail: "estagios@empresaX.com",
        job_image:
          "https://grupopizzinatto.com.br/wp-content/uploads/2020/01/estagio_ti2b.jpg",
      },
      {
        job_title: "Vaga de Estagiário em Engenharia",
        job_type: "Estágio",
        job_category: "Engenharia",
        job_shift: "Manhã",
        job_requirements:
          "Cursando Engenharia a partir do 4o período, conhecimento em AutoCAD",
        job_mail: "rh@empresaY.com.br",
        job_image:
          "https://www.eesc.usp.br/estagios-admin/wp-content/uploads/2022/03/image.png",
      },
    ];

    await Job.insertMany(JobData);
    console.log("Job seeded successfully.");
  } catch (error) {
    console.error("Error seeding Job:", error);
  }
};

seedJob();
