"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var job_model_1 = require("../models/job.model");
require("dotenv").config();
var seedJob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var JobData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, mongoose_1.default.connect(process.env.DB_URI, {
                        family: 4,
                    })];
            case 1:
                _a.sent();
                JobData = [
                    {
                        job_title: "Vaga de Estágio em TI",
                        job_type: "Estágio",
                        job_category: "TI",
                        job_shift: "Tarde",
                        job_requirements: "Cursando a partir do 3o período de Ciência da Computação, conhecimento em Java",
                        job_mail: "estagios@empresaX.com",
                        job_image: "https://grupopizzinatto.com.br/wp-content/uploads/2020/01/estagio_ti2b.jpg",
                    },
                    {
                        job_title: "Vaga de Estagiário em Engenharia",
                        job_type: "Estágio",
                        job_category: "Engenharia",
                        job_shift: "Manhã",
                        job_requirements: "Cursando Engenharia a partir do 4o período, conhecimento em AutoCAD",
                        job_mail: "rh@empresaY.com.br",
                        job_image: "https://www.eesc.usp.br/estagios-admin/wp-content/uploads/2022/03/image.png",
                    },
                ];
                return [4 /*yield*/, job_model_1.default.insertMany(JobData)];
            case 2:
                _a.sent();
                console.log("Job seeded successfully.");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error seeding Job:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
seedJob();
