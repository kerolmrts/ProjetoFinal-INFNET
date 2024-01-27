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
    job_image: { type: String, required: false },
    job_createdAt: { type: Number, required: true, default: Date.now },
    job_updatedAt: { type: Number, required: true, default: Date.now },
    job_clicks: { type: Number, required: true, default: 0 },
});
jobSchema.pre('save', function (next) {
    var currentDate = Date.now();
    this.job_updatedAt = currentDate;
    if (!this.job_createdAt) {
        this.job_createdAt = currentDate;
    }
    next();
});
var Job = mongoose_1.default.model('job', jobSchema);
exports.default = Job;
