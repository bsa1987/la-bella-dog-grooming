import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  phone: string;
  email: string;
  dogName: string;
  breed: string;
  service: string;
  preferredDate: string;
  notes?: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    dogName: { type: String, required: true, trim: true },
    breed: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    preferredDate: { type: String, required: true },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
