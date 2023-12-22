
import { connectToDB } from '@/database';
import Plan from '@/models/plan';
import Joi from 'joi';
import { NextResponse } from 'next/server';



const updateDatas = Joi.object({
    parcelName: Joi.string(),
    orderId: Joi.string(),
    parcelType: Joi.string(),
    parcelMode: Joi.string(),
    senderName: Joi.string(),
    receiverName: Joi.string(),
    receiverAddress: Joi.string(),
    senderAddress: Joi.string(),
    pieces: Joi.number(),
    weight: Joi.number(),
    cubic: Joi.number(),
    startDate: Joi.string(),
    arrivalDate: Joi.string(),
    message: Joi.string(),
    status: Joi.string(),
});

export const dynamic = 'force-dynamic';

// @route   PUT /api/admin/update-plam/
// @desc    update a plan
// @access  Private

export async function PUT(req) {
    try {
        await connectToDB();

        const url = new URL(req.url);
        const plan_id = url.searchParams.get('plan_id');

        const plan = await Plan.findById(plan_id);

        if (!plan) {
            return NextResponse.json({
                success: false,
                state: 'error',
                message: 'No such plan available',
            });
        }

        const extractPlanData = await req.json();

        const {
            parcelName,
            orderId,
            parcelType,
            parcelMode,
            senderName,
            receiverName,
            receiverAddress,
            senderAddress,
            pieces,
            weight,
            cubic,
            startDate,
            arrivalDate,
            message,
            status } = extractPlanData;

        // Validating createNewPlan
        const { error } = updateDatas.validate(extractPlanData);

        if (error) {
            return NextResponse.json({
              success: false,
              status: 'error',
              message: error.details[0].message,
            });
          }

          if(orderId) {
            plan.orderId = orderId;
          }
          if(message) {
            plan.message = message;
          }
          if(status) {
            plan.status = status;
          }
          if(parcelMode) {
            plan.parcelMode = parcelMode;
          }
          if(parcelType) {
            plan.parcelType = parcelType;
          }
          if(senderName) {
            plan.senderName = senderName;
          }
          if(receiverName) {
            plan.receiverName = receiverName;
          }
          if(senderAddress) {
            plan.senderAddress = senderAddress;
          }
          if(receiverAddress) {
            plan.receiverAddress = receiverAddress;
          }
          if(pieces) {
            plan.pieces = pieces;
          }
          if(weight) {
            plan.weight = weight;
          }
          if(cubic) {
            plan.cubic = cubic;
          }
          if(startDate) {
            plan.startDate = startDate;
          }
          if(arrivalDate) {
            plan.arrivalDate = arrivalDate;
          }

          await plan.save();

          const response = NextResponse.json({
            success: true,
            state: 'success',
            plan,
          });

          return response;

    } catch (error) {
        if (error) {
            if (error.message) {
                return NextResponse.json({
                    success: false,
                    state: 'error',
                    message: error.message,
                });
            } else {
                return NextResponse.json({
                    success: false,
                    state: 'error',
                    message: error,
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                state: 'error',
                message: 'Something went wrong! please try again later',
            });
        }
    }
}