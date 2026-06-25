import mongoose, { Schema } from 'mongoose';
const AppointmentSchema = new Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    dogName: { type: String, required: true, trim: true },
    breed: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    preferredDate: { type: String, required: true },
    notes: { type: String, trim: true },
}, { timestamps: true });
export default mongoose.model('Appointment', AppointmentSchema);
