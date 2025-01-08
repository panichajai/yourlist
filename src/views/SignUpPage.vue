<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-center text-2xl font-bold mb-6">Sign Up</h2>
        <form @submit.prevent="saveData">
          <Toast ref="toast" />
          <div class="flex flex-col gap-4">
            <div>
              <label for="fname" class="block text-sm font-medium text-gray-700">First Name</label>
              <InputText v-model="user.fname" id="fname" class="w-full" placeholder="Panicha" />
            </div>
  
            <div>
              <label for="lname" class="block text-sm font-medium text-gray-700">Last Name</label>
              <InputText v-model="user.lname" id="lname" class="w-full" placeholder="Likitsupin" />
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <InputText v-model="user.email" id="email" class="w-full" placeholder="admin@gmail.com" />
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <InputText v-model="user.password" id="password" type="password" class="w-full" placeholder="1234" />
            </div>
  
            <div>
              <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <InputText
                v-model="user.confirm_password"
                id="confirm_password"
                type="password"
                class="w-full"
                placeholder="1234"
              />
            </div>
  
            <button
              type="submit"
              class="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
  
            <div class="flex items-center justify-end space-x-2 text-xs text-gray-500">
              <span>Have an account?</span>
              <button @click="goToLoginPage" class="text-blue-500 hover:text-blue-600">
                Log In
              </button>
            </div>
  
            <div class="flex justify-center p-5" v-if="showSpinner">
              <ProgressSpinner />
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import InputText from 'primevue/inputtext';
  import Toast from 'primevue/toast';
  import ProgressSpinner from 'primevue/progressspinner';
  import config from '@/config';
  
  const { apiBaseAPIUrl } = config;
  const router = useRouter();
  const toast = ref(null);
  const showSpinner = ref(false);
  
  const user = ref({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  
  const saveData = async () => {
    showSpinner.value = true;
  
    if (
      !user.value.fname.trim() ||
      !user.value.lname.trim() ||
      !user.value.email.trim() ||
      !user.value.password.trim()
    ) {
      toast.value.add({
        severity: 'warn',
        summary: 'Input Required',
        detail: 'All fields are required.',
      });
      showSpinner.value = false;
      return;
    }

    if (user.value.password.length < 6) {
      toast.value.add({
        severity: 'error',
        summary: 'Weak Password',
        detail: 'Password must be at least 6 characters long.',
      });
      showSpinner.value = false;
      return;
    }
  
    if (user.value.password !== user.value.confirm_password) {
      toast.value.add({
        severity: 'error',
        summary: 'Password Mismatch',
        detail: 'Password and Confirm Password must match.',
      });
      showSpinner.value = false;
      return;
    }
  
    const urlAPi = `${apiBaseAPIUrl}Customers/signup`;
  
    try {
      const { data } = await axios.post(urlAPi, {
        fname: user.value.fname,
        lname: user.value.lname,
        email: user.value.email,
        password: user.value.password,
      });
  
      if (data.success) {
        toast.value.add({
          severity: 'success',
          summary: 'Sign Up Successful',
          detail: data.message || 'Account created successfully!',
          life: 3000,
        });
        setTimeout(() => {
          showSpinner.value = false;
          router.push({ name: 'LogIn' });
        }, 2000);
      } else {
        toast.value.add({
          severity: 'error',
          summary: 'Sign Up Failed',
          detail: data.message || 'An error occurred.',
        });
        showSpinner.value = false;
      }
    } catch (error) {
      console.error(error);
      toast.value.add({
        severity: 'error',
        summary: 'Sign Up Failed',
        detail: error.response?.data?.message || 'An unexpected error occurred.',
      });
      showSpinner.value = false;
    }
  };
  
  const goToLoginPage = () => {
    router.push({ name: 'LogIn' });
  };
  </script>
  