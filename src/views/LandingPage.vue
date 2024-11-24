<template>
    <div class="flex flex-col w-full h-screen p-4">
        <div class="flex flex-row items-center justify-between px-6 py-2">
            <div class="flex items-center gap-2 py-2 bg-white rounded-md">
                <img :src="require('@/assets/logo.png')" alt="Logo" class="w-8 h-8 rounded object-cover">
                <label class="text-lg text-blue-500 sm:text-xl">YourList</label>
            </div>

            <div class="flex items-center gap-4">
                <button type="button" @click="visible = true"
                    class="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md">
                    <label class="text-sm">Log in</label>
                </button>
                <button type="button" @click="visible = true"
                    class="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                    <label class="text-xs text-white sm:text-sm">Sign Up</label>
                </button>
            </div>
        </div>

        <div class="flex flex-wrap lg:flex-nowrap items-center bg-gray-50 p-8">
  <!-- Left Section: Image -->
  <div class="w-full lg:w-1/2 flex justify-center">
    
    <img :src="require('@/assets/landing.png')" alt="To-Do List" class="rounded-lg shadow-md max-w-[90%] lg:max-w-full">
  </div>

  <!-- Right Section: Content -->
  <div class="w-full lg:w-1/2 flex flex-col items-start gap-6">
    <!-- Headline -->
    <h1 class="text-4xl font-bold text-gray-800">
      Simplify Your Day with the Ultimate To-Do List App
    </h1>

    <!-- Subheadline -->
    <p class="text-lg text-gray-600">
      Stay on top of your tasks with our powerful and intuitive to-do list platform. Designed to help individuals and teams manage their responsibilities effortlessly.
    </p>

    <!-- Features -->
    <ul class="space-y-4">
      <li class="flex items-center gap-4">
        <i class="pi pi-check-circle text-blue-500 text-2xl"></i>
        <span class="text-lg text-gray-700">Smart Task Reminders</span>
      </li>
      <li class="flex items-center gap-4">
        <i class="pi pi-check-circle text-blue-500 text-2xl"></i>
        <span class="text-lg text-gray-700">Seamless Team Collaboration</span>
      </li>
      <li class="flex items-center gap-4">
        <i class="pi pi-check-circle text-blue-500 text-2xl"></i>
        <span class="text-lg text-gray-700">Progress Tracking</span>
      </li>
    </ul>

    <!-- Call-to-Action -->
    <button class="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
      Get Started. It's FREE
    </button>
  </div>
</div>

        
        <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-6 h-screen">
            <!-- ส่วนรูปภาพ -->
            <div class="col-span-1 md:row-span-3 rounded-md">
                <img :src="require('@/assets/landing.png')" alt="Logo"
                    class="max-w-full h-auto object-cover rounded-md">
            </div>

            <!-- ส่วนหัวข้อ -->
            <div class="col-span-2 flex items-center justify-center bg-white rounded-md shadow-md">
                <label class="text-4xl font-bold text-gray-800 text-center">
                    Welcome to Your To-Do List Manager
                </label>
            </div>

            <!-- ปุ่ม Get Started -->
            <div class="col-span-2 flex items-center justify-center bg-blue-500 rounded-md shadow-md">
                <button class="px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    components: {

    },
    name: "LandingPage",
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {

    },

};
</script>