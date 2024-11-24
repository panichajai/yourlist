    <template>
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 class="text-center text-2xl font-bold mb-6">Sign Up</h2>
                <form @submit.prevent="saveData">
                    <div class="flex flex-col gap-4">
                        <div>
                            <label for="fname" class="block text-sm font-medium text-gray-700">First Name</label>
                            <input 
                                type="text" 
                                v-model="user.fname" 
                                name="fname" 
                                id="fname" 
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="first name"
                            />
                        </div>

                        <div>
                            <label for="lname" class="block text-sm font-medium text-gray-700">Last Name</label>
                            <input 
                                type="text" 
                                v-model="user.lname" 
                                name="lname" 
                                id="lname" 
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="last name"
                            />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                v-model="user.email" 
                                name="email" 
                                id="email" 
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="email"
                            />
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                v-model="user.password" 
                                name="password" 
                                id="password" 
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="password"
                            />
                        </div>

                        <div>
                            <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input 
                                type="password" 
                                v-model="user.confirm_password" 
                                name="confirm_password" 
                                id="confirm_password" 
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="confirm your password"
                            />
                        </div>

                        <button 
                            type="submit" 
                            @click="goToLoginPage"
                            class="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Save
                        </button>

                        <div class="flex items-center justify-end space-x-2 text-xs text-gray-500">
                            <span>Have an account?</span>
                            <button 
                                type="submit" 
                                @click="goToLoginPage"
                                class="text-blue-500 hover:text-blue-600"
                            >
                                Log In
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    </template>
    
    <script>
        import axios from 'axios';

        export default {
            name: 'SignUpPage',
            data () {
                return {
                    result: {},
                    user:{
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
                saveData()
                {
                    axios.post("ใส่ลิงก์ URL",this.user)
                    .then(
                        ({data})=>{
                            console.log(data);
                            try
                            {
                                alert("Register Successfully");
                            }
                            catch(err)
                            {
                                alert("Register Failed")
                            }
                        }
                    )
                },
                goToLoginPage() {
                    this.$router.push({ name: 'LogIn' });
                }
                // อันนี้แชทเจน เผื่อต้องแก้
                // saveData() {
                //     axios.post("URLของAPI", this.user)
                //     .then(({data}) => {
                //         console.log(data);
                //         alert("Successfully Registered");
                //     })
                //     .catch((error) => {
                //         console.error(error);
                //         alert("Failed to Register");
                //     });
                // }
            },
        }
    </script>
    