    <template>
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 class="text-center text-2xl font-bold mb-6">Sign Up</h2>
                <form @submit.prevent="saveData">
                    <Toast />
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
import InputText from "primevue/inputtext";
import Toast from 'primevue/toast';

export default {
    components: {
        InputText,
        Toast,
    },
    name: 'SignUpPage',
    data() {
        return {
            result: {},
            user: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                confirm_password: '',
            }
        }
    },
    created() {
    },
    mounted() {
        console.log("mounted() called.....");
    },
    methods: {
        saveData() {
            this.$toast.add({ severity: "success", summary: "Sign Up Successful", life: 3000 });
            setTimeout(() => {
                this.$router.push({ name: 'LogIn' });
            }, 3000);
            // axios.post("ใส่ลิงก์ URL", this.user)
            //     .then(
            //         ({ data }) => {
            //             console.log(data);
            //             try {
            //                 alert("Sign Up Successfully");
            //             }
            //             catch (err) {
            //                 alert("Sign Up Failed")
            //             }
            //         }
            //     )
        },
        goToLoginPage() {
            this.$router.push({ name: 'LogIn' });
        }
        // อันนี้แชทเจน เผื่อต้องแก้
        // saveData() {
        //     axios.post("URLของAPI", this.user)
        //     .then(({data}) => {
        //         console.log(data);
        //         alert("Successfully Sign Up");
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         alert("Failed to Sign Up");
        //     });
        // }
    },
}
</script>
