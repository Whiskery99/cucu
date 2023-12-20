import mongoose from 'mongoose';

// const { Schema } = mongoose;

const PlanSchema = new mongoose.Schema(
  {
    parcelName: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    parcelType: {
      type: String,
      required: true,
    },
    parcelMode: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    receiverName: {
      type: String,
      required: true,
    },
    receiverAddress: {
      type: String,
      required: true,
    },
    pieces: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    cubic: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    arrivalDate: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: String,
    },
  },
  { timestamps: true }
);

const Plan = mongoose.models['Plan'] || mongoose.model('Plan', PlanSchema);

export default Plan;
