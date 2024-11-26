    <template>
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 class="text-center text-2xl font-bold mb-6">Sign Up</h2>
                <form @submit.prevent="saveData">
                    <Toast ref="toast" />
                    <div class="flex flex-col gap-4">
                        <div>
                            <label for="fname" class="block text-sm font-medium text-gray-700">First Name</label>
                            <InputText class="w-full" disabled placeholder="Panicha" />
                        </div>

                        <div>
                            <label for="lname" class="block text-sm font-medium text-gray-700">Last Name</label>
                            <InputText class="w-full" disabled placeholder="Likitsupin" />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <InputText class="w-full" disabled placeholder="admin@gmail.com" />
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <InputText class="w-full" disabled placeholder="1234" />
                        </div>

                        <div>
                            <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm
                                Password</label>
                            <InputText class="w-full" disabled placeholder="1234" />
                        </div>

                        <button type="submit"
                            class="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Save
                        </button>

                        <div class="flex items-center justify-end space-x-2 text-xs text-gray-500">
                            <span>Have an account?</span>
                            <button @click="goToLoginPage" class="text-blue-500 hover:text-blue-600">
                                Log In
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
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

export default {
    name: 'SignUpPage',
    components: {
        InputText,
        Toast,
    },
    setup() {
        const router = useRouter();
        const toast = ref(null);
        const user = ref({
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirm_password: '',
        });

        const saveData = () => {
            toast.value.add({
                severity: 'success',
                summary: 'Sign Up Successful',
                life: 3000,
            });
            setTimeout(() => {
                router.push({ name: 'LogIn' });
            }, 3000);
        };

        const goToLoginPage = () => {
            router.push({ name: 'LogIn' });
        };

        return {
            user,
            toast,
            saveData,
            goToLoginPage,
        };
    },

    // axios.post("ใส่ลิงก์ URL", user.value)
    //   .then(({ data }) => {
    //     console.log(data);
    //     alert("Sign Up Successfully");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     alert("Sign Up Failed");
    //   });
}
</script>
