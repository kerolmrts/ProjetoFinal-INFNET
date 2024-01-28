import mongoose, { Schema, Document } from "mongoose";

interface Iuser extends Document {
    user_name: string; 
    user_username: string; 
    user_password: string;
    user_role: string;
    user_image: string;
    user_email: string;
    user_phone: string;
    user_city: string;
    user_street: string;
    user_number: number; 
    user_cep: string;
}

const userSchema = new Schema({
    user_name: { type: String, required: true },
    user_password: { type: String, required: true },
    user_image: {type: String, required: false},
    user_email: { type: String, required: true},
    user_phone: { type: String, required:false },
})

const User = mongoose.model<Iuser>('user', userSchema);

export default User;
