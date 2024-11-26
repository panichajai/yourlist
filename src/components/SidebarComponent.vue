<template>
  <div class="fixed left-0 top-0 w-64 h-full bg-blue-500 p-4 z-50 sidebar-menu transition-transform">
    <router-link to="/dashboard" class="flex items-center pb-4 border-b">
      <img :src="require('@/assets/logo.png')" alt="Logo" class="w-8 h-8 rounded object-cover">
      <span class="text-lg font-bold text-white ml-3">YourList</span>
    </router-link>

    <ul class="mt-4 flex flex-col gap-2">
      <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
        <router-link to="/dashboard" class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
          <i class="pi pi-home text-gray-200" style="font-size: 14px;"></i>
          <span class="text-sm">Dashboard</span>
        </router-link>
      </li>

      <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
        <router-link to="/project" class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
          <i class="pi pi-list text-gray-200" style="font-size: 14px;"></i>
          <span class="text-sm">Project</span>
        </router-link>
      </li>

      <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
        <router-link to="/" class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
          <i class="pi pi-sign-out text-gray-200" style="font-size: 14px;"></i>
          <span class="text-sm">Logout</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>
