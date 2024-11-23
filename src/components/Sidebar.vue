<template>
    <!-- <div class="flex w-64"> -->
        <div class="fixed left-0 top-0 w-64 h-full bg-blue-500 p-4 z-50 sidebar-menu transition-transform">
          <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
            <img :src="require('@/assets/logo.png')" alt="Logo" class="w-8 h-8 rounded object-cover">
            <span class="text-lg font-bold text-white ml-3">YourList</span>
          </a>
          <ul class="mt-4">
            <li class="mb-1 group active">
              <a href="#"
                class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                <i class="ri-home-2-line mr-3 text-lg"></i>
                <span class="text-sm">Dashboard</span>
              </a>
            </li>
            <li class="mb-1 group">
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
            </li>


            <li class="mb-1 group">
              <a href="#"
                class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                <i class="ri-flashlight-line mr-3 text-lg"></i>
                <span class="text-sm">Services</span>
                <i class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
              </a>
              <ul class="pl-7 mt-2 hidden group-[.selected]:block">
                <li class="mb-4">
                  <a href="#"
                    class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage
                    services</a>
                </li>
              </ul>
            </li>
            <li class="mb-1 group">
              <a href="#"
                class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                <i class="ri-settings-2-line mr-3 text-lg"></i>
                <span class="text-sm">Settings</span>
              </a>
            </li>
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
      states: {
        sidebar: window.innerWidth >= 768,
        dropdowns: {},
      },
    };
  },
  methods: {
    toggleDropdown(dropdownId) {
      if (this.states.dropdowns[dropdownId] === undefined) {
        this.states.dropdowns[dropdownId] = false;
      }
      this.states.dropdowns[dropdownId] = !this.states.dropdowns[dropdownId];
    },
    closeAllDropdowns() {
      Object.keys(this.states.dropdowns).forEach((key) => {
        this.states.dropdowns[key] = false;
      });
    },
    toggleVisibility() {
      this.visible = !this.visible;
    }
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.states.sidebar = false;
    }
  },

  confirm1() {
    this.$confirm.require({
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptProps: {
        label: 'Save'
      },
      accept: () => {
        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
        this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  },
  confirm2() {
    this.$confirm.require({
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptProps: {
        label: 'Delete',
        severity: 'danger'
      },
      accept: () => {
        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
      },
      reject: () => {
        this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }
};

</script>