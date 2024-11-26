<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-full max-w-sm px-8 py-16 bg-white rounded-lg shadow-lg" style="max-width: 500px;">
      <h2 class="text-center text-2xl font-bold mb-6">Log In</h2>
      <form @submit.prevent="LoginData">
        <Toast ref="toast" />
        <div class="flex flex-col gap-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 text-left">Email</label>
            <InputText v-model="user.email" id="email" class="w-full" placeholder="Enter your email" />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 text-left">Password</label>
            <InputText v-model="user.password" id="password" type="password" class="w-full"
              placeholder="Enter your password" />
          </div>
          <div>
            <button
              class="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit">
              Log In
            </button>
          </div>
          <div class="flex items-center justify-end space-x-2 text-xs text-gray-500">
            <span>Don't have an account?</span>
            <button type="button" @click="goToSignUpPage" class="text-blue-500 hover:text-blue-600">
              Sign Up
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

const { apiBaseUrl } = config;
const router = useRouter();

const showSpinner = ref(false);
const user = ref({
  email: '',
  password: '',
});
const toast = ref(null);

const LoginData = async () => {
  showSpinner.value = true;

  const urlAPi = apiBaseUrl + 'users/login';
  if (user.value.email?.trim() && user.value.password?.trim()) {
    const userLogin = {
      user_email: user.value.email,
      user_password: user.value.password,
    };
    console.log('urlAPi', urlAPi, 'userLogin', userLogin);

    try {
      const { data } = await axios.post(urlAPi, userLogin);

      if (data.success === true) {
        toast.value.add({
          severity: 'success',
          summary: 'Login Successful',
          life: 1000,
        });
        setTimeout(() => {
          showSpinner.value = false;
          router.push({ name: 'Dashboard' });
        }, 1000);
      } else {
        toast.value.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Invalid email or password.',
        });
      }
    } catch (error) {
      console.error(error);
      toast.value.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: 'Invalid email or password.',
      });
    }
  }
};

const goToSignUpPage = () => {
  router.push({ name: 'SignUp' });
};
</script>
