"use client"

import InputComponent from "@/components/FormElements/InputComponent"
import SelectComponent from "@/components/FormElements/SelectComponent"
import ComponentLevelLoader from "@/components/Loader/componentLevel";
import Notifications from "@/components/Notifications";
import { GlobalContext } from "@/context";
import { loginUser } from "@/services/login";
// import { fetchLoginUser } from "@/services/user";
import { loginFormControls } from "@/utils"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


const initailFormData = {
    email: "",
    password: "",
};

export default function Login() {
    const [formData, setFormData] = useState(initailFormData);
    // const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
    const { isAuthUser, setIsAuthUser, user, setUser, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const router = useRouter();

    // console.log(formData);

    function isFormValid() {
        return formData && formData.email &&
            formData.email.trim() !== "" &&
            formData.password &&
            formData.password.trim() !== ""
            ? true
            : false;
    }

    async function handleLogin() {
        setComponentLevelLoader({ loading: true, id: '' })
        const data = await loginUser(formData);
        // console.log(data);
        // console.log(data?.success);
        if (data?.success) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            // console.log(data.finalResult)
            setFormData(initailFormData);
            Cookies.set('token', data?.finalResult?.token)
            localStorage.setItem('token', data?.finalResult?.token);
            // const token = data?.finalResult?.token;
            // console.log(token)

            setIsAuthUser(true)
            setUser(data?.finalResult?.user)
            if(data?.finalResult?.user?.role === "client"){
                router.push('/dashboard')
            } else{
                router.push('/admin')
            }
            setComponentLevelLoader({ loading: false, id: '' })
        } else {
            toast.error(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setIsAuthUser(false)
            setFormData(initailFormData);
            setComponentLevelLoader({ loading: false, id: '' })
        }
        // console.log(isAuthUser, userDetails);
    }


    // useEffect(() => {
    //     if (isAuthUser) router.push('/');
    // }, [isAuthUser])

    return (
        <div className="bg-[#111] relative">
            <div className="flex flex-col items-center justify-between py-0 px-6 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full lg:flex-row">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-3xl lg:mt-20 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start px-3 py-10 bg-white shadow-xl rounded-xl relative z-10">
                            <p className="text-[#fd961a] w-full text-2xl font-medium text-center font-serif">
                                Login to your account
                            </p>
                            <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-6">
                                {loginFormControls.map((controlItem) =>
                                    controlItem.componentType === "input" ? (
                                        <InputComponent
                                            key={controlItem.label}
                                            type={controlItem.type}
                                            placeholder={controlItem.placeholder}
                                            label={controlItem.label}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    [controlItem.id]: e.target.value,
                                                });
                                            }}
                                            value={formData[controlItem.id]}
                                        />
                                    ) : controlItem.componentType === "select" ? (
                                        <SelectComponent
                                            key={controlItem.label}
                                            label={controlItem.label}
                                            options={controlItem.options}
                                        />
                                    ) : null
                                )}
                            </div>
                            <p className="text-sm text-center mt-3">Don&apos;t have an account? <a href="/register" className="font-semibold underline cursor-pointer">Register</a></p>
                            <button className="disabled:opacity-50 inline-flex w-fit items-center justify-center bg-[#fd961a] px-5 py-3 text-base tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md mt-4" disabled={!isFormValid()}
                                onClick={handleLogin}>
                                {componentLevelLoader && componentLevelLoader.loading ? <ComponentLevelLoader
                                    text={"Logging in"}
                                    color={"#fff"}
                                    loading={componentLevelLoader && componentLevelLoader.loading}
                                /> : "Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Notifications />
        </div>
    )
}