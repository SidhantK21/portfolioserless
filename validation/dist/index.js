"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectContent = void 0;
const zod_1 = require("zod");
exports.projectContent = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    details: zod_1.z.string()
});
