"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var jobSchema = new mongoose_1.Schema({
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
}, { timestamps: {
        createdAt: 'job_createdAt',
        updatedAt: 'job_updatedAt'
    } });
var Job = mongoose_1.default.model("job", jobSchema);
exports.default = Job;
