<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="w-full max-w-sm px-8 py-16 bg-white rounded-lg shadow-lg" style="max-width: 500px;">
            <h2 class="text-center text-2xl font-bold mb-6">Log In</h2>
            <form @submit.prevent="LoginData">
      <div class="flex flex-col gap-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 text-left">Email</label>
          <input
            type="email"
            v-model="user.email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="email"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 text-left">Password</label>
          <input
            type="password"
            v-model="user.password"
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="password"
          />
        </div>
        <div>
          <Toast ref="toast" />
          <button
            class="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Log In
          </button>
        </div>
        <div class="flex items-center justify-end space-x-2 text-xs text-gray-500">
          <span>Don't have an account?</span>
          <button
            type="button"
            @click="goToSignUpPage"
            class="text-blue-500 hover:text-blue-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Toast from 'primevue/toast';


export default {
    name: 'LoginPage',
    components: {
        Toast,
    },
    setup() {
    const router = useRouter();
    const user = ref({
      email: '',
      password: '',
    });
    const toast = ref(null);

    const LoginData = () => {
      const email = "admin@gmail.com";
      const password = "1234";

      if (user.value.email === email && user.value.password === password) {
        toast.value.add({
          severity: "success",
          summary: "Login Successful",
          life: 3000,
        });
        setTimeout(() => {
          router.push({ name: 'Dashboard' });
        }, 3000);
      } else {
        toast.value.add({
          severity: "error",
          summary: "Login Failed",
          detail: "Invalid email or password.",
        });
      }
    };

    const goToSignUpPage = () => {
      router.push({ name: 'SignUp' });
    };

    return {
      user,
      toast,
      LoginData,
      goToSignUpPage,
    };
  
    },
// axios.post("ใส่ลิงก์ URL", this.user)
        // .then(({data}) => {
        //     console.log(data);
        //     if (data.status === true) {
        //         alert("Login Successfully");
        //         this.$router.push({ name: 'Helloworld' });
        //     } else {
        //         alert("Login Failed");
        //     }
        // })
        // .catch((error) => {
        //     console.error(error);
        //     alert("Error, please try again");
        // });
}
</script>
