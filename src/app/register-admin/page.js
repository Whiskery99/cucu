'use client';

import InputComponent from '@/components/FormElements/InputComponent';
import SelectComponent from '@/components/FormElements/SelectComponent';
import { registerNewUser } from '@/services/register';
import { registrationFormControls } from '@/utils';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/context';
import Notifications from '@/components/Notifications';
import ComponentLevelLoader from '@/components/Loader/componentLevel';
import { toast } from 'react-toastify';

const initailFormData = {
  name: '',
  email: '',
  password: '',
  phone: '',
  role: 'admin',
};

export default function Register() {
  const [formData, setFormData] = useState(initailFormData);
  const [isRegistered, setIsRegistered] = useState(false);
  const { pageLevelLoader, setPageLevelLoader, isAuthUser } =
    useContext(GlobalContext);
  const router = useRouter();

  console.log(formData);

  function isFormValid() {
    return formData &&
      formData.name &&
      formData.name.trim() !== '' &&
      formData.email &&
      formData.email.trim() !== '' &&
      formData.password &&
      formData.password.trim() !== '' &&
      formData.phone &&
      formData.phone.trim() !== ''
      ? true
      : false;
  }

  async function handleRegisterOnSubmit() {
    setPageLevelLoader(true);
    const data = await registerNewUser(formData);
    console.log(data);
    console.log(data?.success);
    if (data?.success) {
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsRegistered(true);
      setPageLevelLoader(false);
      setFormData(initailFormData);
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData(initailFormData);
    }
  }

  useEffect(() => {
    if (isAuthUser) router.push('/dashboard');
  }, [isAuthUser]);

  return (
    <div className="bg-[#111] relative">
      <div className="flex flex-col items-center justify-between py-0 px-6 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full lg:flex-row">
          <div className="w-full mt-16 mr-0 mb-0 ml-0 relative max-w-3xl lg:mt-24 lg:w-5/12">
            <div className="flex flex-col items-center justify-start px-3 py-10 bg-white shadow-xl rounded-xl relative z-10">
              <p className="text-[#fd961a] w-full text-2xl font-medium text-center font-serif">
                {isRegistered ? (
                  <span className="text-green-60">
                    Account created successfully!
                  </span>
                ) : (
                  'Create an Account'
                )}
              </p>
              {isRegistered ? (
                <button
                  onClick={() => router.push('/login')}
                  className="disabled:opacity-50 inline-flex w-fit items-center justify-center bg-[#fd961a] px-5 py-2 text-base tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md mt-4"
                >
                  Goto Login Now
                </button>
              ) : (
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-6">
                  {registrationFormControls.map((controlItem) =>
                    controlItem.componentType === 'input' ? (
                      <InputComponent
                        key={controlItem.type}
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
                    ) : null
                  )}
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-center mt-3">
                      On signing up, means you&apos;ve accepted our Terms of
                      Service and Privacy Policy.
                    </p>
                    <button
                      className="disabled:opacity-50 inline-flex w-fit items-center justify-center bg-[#fd961a] px-5 py-2 text-base tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md mt-4"
                      disabled={!isFormValid()}
                      onClick={handleRegisterOnSubmit}
                    >
                      {pageLevelLoader ? (
                        <ComponentLevelLoader
                          text={'Registering'}
                          color={'#fff'}
                          loading={pageLevelLoader}
                        />
                      ) : (
                        'Register'
                      )}
                    </button>
                    <p className="text-sm text-center mt-3">
                      Already have an account?{' '}
                      <a
                        href="/login"
                        className="font-semibold underline cursor-pointer"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notifications />
    </div>
  );
}
