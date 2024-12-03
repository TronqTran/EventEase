import axios from 'axios';

export const URL_BASE = 'http://localhost:8521/KLTN-SERVER-2024/api/v1';

export const employeeRegister = async (data) => {
    const response = await axios ({
      url: URL_BASE + '/employees',
      method: 'POST',
      data: {
        name: data.userName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        account: data.account
      }
    });
    return response.data;
  }