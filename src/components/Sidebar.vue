<template>
    <!-- <div class="flex w-64"> -->
        <div class="fixed left-0 top-0 w-64 h-full bg-blue-500 p-4 z-50 sidebar-menu transition-transform">
          <router-link to="/dashboard" class="flex items-center pb-4 border-b">
            <img :src="require('@/assets/logo.png')" alt="Logo" class="w-8 h-8 rounded object-cover">
            <span class="text-lg font-bold text-white ml-3">YourList</span>
          </router-link>

          <ul class="mt-4 flex flex-col gap-2">
            <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
              <router-link to="/dashboard"
              class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
              <i class="pi pi-home text-gray-200" style="font-size: 14px;"></i>
                <span class="text-sm">Dashboard</span>
              </router-link>
            </li>

            <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
              <router-link to="/project"
              class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
              <i class="pi pi-list text-gray-200" style="font-size: 14px;"></i>
                <span class="text-sm">Project</span>
              </router-link>
            </li>

            <li class="mb-1 group bg-blue-500 hover:bg-blue-400 rounded-md">
              <router-link to="/"
              class="flex items-center gap-4 py-2 px-4 text-gray-200 ">
              <i class="pi pi-sign-out text-gray-200" style="font-size: 14px;"></i>
                <span class="text-sm">Logout</span>
              </router-link>
            </li>

            <!-- <li class="mb-1 group">
              <a href="#" @click.prevent="toggleDropdown('orders')"
                class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <i class="ri-instance-line mr-3 text-lg"></i>
                <span class="text-sm">Orders</span>
                <i class="ri-arrow-right-s-line ml-auto" :class="{ 'rotate-90': states.dropdowns['orders'] }"></i>
              </a>

              <ul v-show="states.dropdowns['orders']" class="pl-7 mt-2">
                <li class="mb-4">
                  <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100">Active order</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100">Completed order</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100">Canceled order</a>
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
      <!-- </div> -->
</template>

<script>




export default {
    components: {

    },
    name: "SidebarComponent",
    data() {
        return {
      visible: false,
      // states: {
      //   sidebar: window.innerWidth >= 768,
      //   dropdowns: {},
      // },
    };
  },
  methods: {
    // toggleDropdown(dropdownId) {
    //   if (this.states.dropdowns[dropdownId] === undefined) {
    //     this.states.dropdowns[dropdownId] = false;
    //   }
    //   this.states.dropdowns[dropdownId] = !this.states.dropdowns[dropdownId];
    // },
    // closeAllDropdowns() {
    //   Object.keys(this.states.dropdowns).forEach((key) => {
    //     this.states.dropdowns[key] = false;
    //   });
    // },
    toggleVisibility() {
      this.visible = !this.visible;
    }
  },
  mounted() {
    // if (window.innerWidth < 768) {
    //   this.states.sidebar = false;
    // }
  },

  // confirm1() {
  //   this.$confirm.require({
  //     message: 'Are you sure you want to proceed?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     rejectProps: {
  //       label: 'Cancel',
  //       severity: 'secondary',
  //       outlined: true
  //     },
  //     acceptProps: {
  //       label: 'Save'
  //     },
  //     accept: () => {
  //       this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  //     },
  //     reject: () => {
  //       this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  //     }
  //   });
  // },
  // confirm2() {
  //   this.$confirm.require({
  //     message: 'Do you want to delete this record?',
  //     header: 'Danger Zone',
  //     icon: 'pi pi-info-circle',
  //     rejectProps: {
  //       label: 'Cancel',
  //       severity: 'secondary',
  //       outlined: true
  //     },
  //     acceptProps: {
  //       label: 'Delete',
  //       severity: 'danger'
  //     },
  //     accept: () => {
  //       this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
  //     },
  //     reject: () => {
  //       this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  //     }
  //   });
  // }
};

</script>