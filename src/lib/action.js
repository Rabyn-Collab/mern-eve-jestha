'use server';

import axios from "axios";



export async function addEmployee(data) {
  try {
    await axios.post('https://60f3af443cb0870017a8a007.mockapi.io/employees', data);
    return { success: true, message: 'Employee added successfully' };
  } catch (err) {

    return { success: false, message: err.message };
  }
}