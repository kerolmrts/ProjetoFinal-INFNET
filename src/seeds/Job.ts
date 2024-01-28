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
          "https://defatoonline.com.br/wp-content/webp-express/webp-images/uploads/2021/01/estagio-780x520.jpg.webp",
        job_company: "Empresa X",
        job_description:
          " Os estagiários terão a chance de colaborar em projetos de desenvolvimento e manutenção de sistemas, participar de reuniões e resolver problemas técnicos. A empresa oferece uma bolsa-auxílio competitiva, oportunidades de aprendizado e um ambiente de trabalho dinâmico.",
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
          "https://natal.rn.gov.br/storage/app/media/noticias/36440_Original.png",
        job_company: "Empresa Y",
        job_description:
          "Chance de trabalhar em projetos de engenharia desafiadores, aplicar seus conhecimentos teóricos em situações reais e colaborar com uma equipe experiente.",
      },
      {
        job_title: "Vaga de Estagiário em Direito",
        job_type: "Estágio",
        job_category: "Direito",
        job_shift: "Manhã",
        job_requirements: "Cursando a partir do 4o período",
        job_mail: "escritorio@empresaY.com.br",
        job_image: "https://unifagoc.edu.br/download/a/site-dir-estgio",
        job_company: "Empresa Y",
        job_description:
          "Oportunidade única para estudantes de Direito desenvolverem suas habilidades em um ambiente profissional.",
      },
    ];

    await Job.insertMany(JobData);
    console.log("Job seeded successfully.");
  } catch (error) {
    console.error("Error seeding Job:", error);
  }
};

seedJob();
