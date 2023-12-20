import axios from "axios";
import Cookies from "js-cookie";

export const fetchLoginUser = async () => {
    try {
        console.log(Cookies.get('token'))
        const token = Cookies.get('token');

        // const response = fetch('/api/user/get-user/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
        const response = await axios.get('/api/user/get-user/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response)
        // const { success, user: fetchedUser } = response.data;

        // if (!response.ok) {
        //     // Handle the case where the server response was not ok
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const finalResult = response.json();
        console.log('User details from API:', finalResult);
        return finalResult?.user;

    } catch (err) {
        console.error('Error', err);
        // You may want to handle different types of errors differently
        if (err instanceof SyntaxError) {
            console.error('The server response is not valid JSON.');
        } else {
            console.error('Some other error occurred:', err.message);
        }
    }
}

export const updateUser = async (formData, userID) => {
    const token = Cookies.get('token');
    try {
        const response = await axios.put(`/api/admin/update-user/?user_id=${userID}`, formData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error updating :', error);
        return error;
      }
}

export const fundUserBalance = async (formData) => {
    const token = Cookies.get('token');
    try {
        const response = await axios.put('/api/user/fund-balance/', formData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error funding user account:', error);
        throw error;
      }
}

export const userWithdrawal = async (formData) => {
    const token = Cookies.get('token');
    try {
        const response = await axios.put('/api/user/create-withdraw/', formData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error funding user account:', error);
        throw error;
      }
}