'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";



export async function addEmployee(data) {
  try {
    await axios.post('https://60f3af443cb0870017a8a007.mockapi.io/employees', data);
    revalidatePath('/');
    return { success: true, message: 'Employee added successfully' };
  } catch (err) {

    return { success: false, message: err.message };
  }
}

export async function removeEmployee(id) {
  try {
    await axios.delete(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);
    revalidatePath('/');
    return { success: true, message: 'Employee deleted successfully' };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function updateEmployee(id, data) {
  try {
    await axios.put(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`, data);
    revalidatePath('/');
    return { success: true, message: 'Employee updated successfully' };
  } catch (err) {

    return { success: false, message: err.message };
  }
}