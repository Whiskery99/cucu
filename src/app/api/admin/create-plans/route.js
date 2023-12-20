// import connectToDB from "@/database";
import { connectToDB } from '@/database';
import Plan from '@/models/plan';
import Joi from 'joi';
import { NextResponse } from 'next/server';


const createNewPlan = Joi.object({
  parcelName: Joi.string().required(),
  orderId: Joi.string().required(),
  parcelType: Joi.string().required(),
  parcelMode: Joi.string().required(),
  senderName: Joi.string().required(),
  receiverName: Joi.string().required(),
  receiverAddress: Joi.string().required(),
  senderAddress: Joi.string().required(),
  pieces: Joi.number().required(),
  weight: Joi.number().required(),
  cubic: Joi.number().required(),
  startDate: Joi.string().required(),
  arrivalDate: Joi.string().required(),
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  message: Joi.string().required(),
  status: Joi.string().required(),
  // imageUrls: Joi.string().required(),
});

export const dynamic = 'force-dynamic';

// @route   POST /api/admin/create-plans/
// @desc    create plan
// @access  Private
export async function POST(req) {
  try {
    await connectToDB();

    const { id: user_id, role } = JSON.parse(req.headers.get('user-header'));

    if (role.toLowerCase() === 'admin') {
      const extractPlanData = await req.json();

      // Validating createNewPlan
      const { error } = createNewPlan.validate(extractPlanData);
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedPlan = await Plan.create(extractPlanData);

      if (newlyCreatedPlan) {
        return NextResponse.json({
          success: true,
          status: 'success',
          message: 'Order created successfully',
          plan: newlyCreatedPlan,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to create order! Please try again.',
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        status: 'error',
        message: 'Something went wrong! please try again later',
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 'error',
      message: error.message,
    });
  }
}
