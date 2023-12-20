"use client"

import InputComponent from "@/components/FormElements/InputComponent"
import SelectComponent from "@/components/FormElements/SelectComponent"
import ComponentLevelLoader from "@/components/Loader/componentLevel";
import { GlobalContext } from "@/context";
import { adminCreateInvestmentControls, adminCreateOrdersControls, firebaseConfig, firebaseStorageURL } from "@/utils"
import { useContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { createNewPlan } from "@/services/plan";
import { toast } from "react-toastify";
import Notifications from "@/components/Notifications";
import { useRouter } from "next/navigation";


const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);

const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);

    return `${getFile}-${timeStamp}-${randomStringValue}`
}

async function helperForUploadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `indexcopier/plans/${getFileName}`);
    await uploadBytesResumable(storageReference, file);

    return await getDownloadURL(storageReference);
}

// async function helperForUploadingImageToFirebase(file) {
//     const getFileName = createUniqueFileName(file);
//     const storageReference = ref(storage, `indexcopier/plans/${getFileName}`);
//     const uploadImage = uploadBytesResumable(storageReference, file);



//     return new Promise((resolve, reject) => {
//         uploadImage.on('state_changed', (snapshot) => { }, (error) => {
//             console.log(error)
//             reject(error)
//         }, () => {
//             getDownloadURL(uploadImage.snapshot.ref).then(downloadURL => resolve(downloadURL)).catch(error => reject(error))
//         })
//     })
// }


const initialFormData = {
    parcelName: '',
    orderId: '',
    parcelType: '',
    parcelMode: '',
    senderName: '',
    receiverName: '',
    senderAddress: '',
    receiverAddress: '',
    pieces: '',
    weight: '',
    cubic: '',
    startDate: '',
    arrivalDate: '',
    message: '',
    origin: '',
    destination: '',
    status: '',
    // imageUrls: '',
}

export default function AdminPlans() {
    const [formData, setFormData] = useState(initialFormData);
    const { componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const router = useRouter();


    async function handleImage(e) {
        if (!confirm("Are you sure you want to upload these images?")) return;
        const selectedImages = e.target.files;

        // Check if exceeding limit
        if (selectedImages.length + formData.imageUrls.length > 4) {
            toast.error("Maximum of 4 images allowed.", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        // Upload and collect URLs
        const uploadedImageURLs = await Promise.all(
            Array.from(selectedImages).map(async (image) => {
                return await helperForUploadingImageToFirebase(image);
            })
        );

        // Update state with URLs
        // setFormData({
        //     ...formData,
        //     imageUrls: formData?.imageUrls,
        // });
    }

    // async function handleImage(e) {
    //     const selectedImages = e.target.files;

    //     // Check if the total selected images exceed the limit (4 in this case)
    //     if (selectedImages?.length + formData?.imageUrls?.length > 4) {
    //         toast.error("You can upload a maximum of 4 images.", {
    //             position: toast.POSITION.TOP_RIGHT,
    //         });
    //         return;
    //     }

    //     const uploadedImageURLs = await Promise.all(
    //         Array.from(selectedImages).map(async (image) => {
    //             return await helperForUploadingImageToFirebase(image);
    //         })
    //     );

    //     setFormData({
    //         ...formData,
    //         imageUrls: [...formData.imageUrls, ...uploadedImageURLs],
    //     });
    // }

    console.log(formData)
    async function handleCreatePlan() {
        setComponentLevelLoader({ loading: true, id: '' })
        const res = await createNewPlan(formData)
        console.log(res);
        console.log(res?.success);
        if (res?.success) {
            toast.success(res?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setFormData(initialFormData);
            router.push('/admin/parcels')
            setComponentLevelLoader({ loading: false, id: '' })
        } else {
            toast.error(res?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            // setFormData(initialFormData);
            setComponentLevelLoader({ loading: false, id: '' })
        }
    }

    return (
        <div className="w-full mt-5 mx-0 mb-0 relative">
            <p className="text-lg ml-8 mb-4">Create Order Page</p>
            <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
                <div className="w-full mt-6 mx-0 mb-0 space-y-6">
                    {/* <div className="p-3 border-[0.8px] border-gray-400 rounded-md">
                        <input className="placeholder:text-black text-black" accept="image/*" max="4" type="file" onChange={handleImage} />
                    </div> */}
                    <div className="flex gap-8 flex-col">
                        {
                            adminCreateOrdersControls.map(controlItem =>
                                controlItem.componentType === 'input' ?
                                    (
                                        <InputComponent
                                            type={controlItem.type}
                                            placeholder={controlItem.placeholder}
                                            label={controlItem.label}
                                            key={controlItem.id}
                                            value={formData[controlItem.id]}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    [controlItem.id]: e.target.value,
                                                });
                                            }}
                                        />
                                    )
                                    :

                                    controlItem.componentType === 'select' ? (
                                        <SelectComponent
                                            key={controlItem.id}
                                            label={controlItem.label}
                                            options={controlItem.options}
                                            value={formData[controlItem.id]}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    [controlItem.id]: e.target.value,
                                                });
                                            }}
                                        />
                                    ) : null)
                        }
                        <button className="disabled:opacity-50 flex items-center justify-center bg-[#fd961a] px-6 py-4 text-lg tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md mt-4" onClick={handleCreatePlan}>
                            {componentLevelLoader && componentLevelLoader.loading ? <ComponentLevelLoader
                                text={"Creating Order"}
                                color={"#fff"}
                                loading={componentLevelLoader && componentLevelLoader.loading}
                            /> : "Create Order"}
                        </button>
                    </div>
                </div>
            </div>
            <Notifications />
        </div>
    )
}