<template>
  <div class="flex flex-col w-full bg-gray-100">
    <div class="w-full py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30 mb-1">
      <ul class="ml-auto flex items-center">
        <li class="mr-1 dropdown">
          <button type="button"
            class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
            <i class="ri-search-line"></i>
          </button>
          <div
            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
            <form action="" class="p-4 border-b border-b-gray-100">
              <div class="relative w-full">
                <input type="text"
                  class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                  placeholder="Search...">
                <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
              </div>
            </form>
          </div>
        </li>
          <button type="button"
            class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
            <i class="ri-notification-3-line"></i>
          </button>
        <li class="dropdown ml-3 relative">
          <!-- ปุ่ม Toggle Dropdown -->
          <button type="button" @click="toggleDropdown('navbar')" class="dropdown-toggle flex items-center">
            <img :src="require('@/assets/profile.png')" alt="Profile Picture" class="w-8 h-8 rounded object-cover">
          </button>

          <!-- Dropdown Menu -->
          <ul v-show="states.dropdowns['navbar']"
            class="dropdown-menu absolute top-full right-0 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100">
            <li>
              <a href="#" @click="visible = true"
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                Profile
              </a>
            </li>
            <li>
              <a href="/"
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="card flex justify-center">
      <Toast />
      <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '30rem' }">
        <div class="flex flex-col gap-4 mb-6">
          <div class="flex flex-col gap-1">
            <label for="username" class="font-semibold">Username</label>
            <div>
              <InputText class="w-full" disabled placeholder="Jai" />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <label for="fname" class="font-semibold">First name</label>
            <div>
              <InputText class="w-full" disabled placeholder="Panicha" />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <label for="lname" class="font-semibold">Last Name</label>
            <div>
              <InputText class="w-full" disabled placeholder="Likitsupin" />
            </div>
          </div>
          <div>
            <h2 class="text-base font-medium mb-1">Password</h2>
            <div class="flex justify-start gap-2">
              <Button type="button" label="Change password" severity="secondary" size="small"
                @click="visiblePassword = true"></Button>
              <Button type="button" label="cancle" severity="secondary" size="small" v-if="visiblePassword"
                @click="visiblePassword = false"></Button>
            </div>

          </div>
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="current_password" class="font-semibold">Current password</label>
            <div>
              <InputText class="w-full" disabled placeholder="1234" />
            </div>
          </div>
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="new_password" class="font-semibold">New password</label>
            <div>
              <InputText class="w-full" disabled placeholder="admin1234" />
            </div>
          </div>
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="confirm_new_password" class="font-semibold">Confirm new password</label>
            <div>
              <InputText class="w-full" disabled placeholder="admin1234" />
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
          <Button type="button" label="Save" severity="info" @click="EditProfile"></Button>
        </div>
      </Dialog>
    </div>

    <div>
      <!-- <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb> -->
      <!-- <div class="flex p-4 bg-white">
        <div class="flex-1">
          <label class="text-4xl w-full block">Dashbord</label>
        </div>
        <button type="button" @click="visible = true" class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-md">
          <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
          <label class="text-lg text-white text-left sm:text-xl">New Project</label>
        </button>

        <div class="card flex justify-center">
          <Dialog v-model:visible="visible" modal header="New Project" :style="{ width: '30rem' }">
            <div class="flex flex-col gap-4 mb-6">
              <div class="flex flex-col gap-1">
                <label for=" projectmame" class="font-semibold">Project Name</label>
                <div>
                  <InputText id="projectmame" class="w-full" autocomplete="off" />
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <label for=" projectdetails" class="font-semibold">Project Details</label>
                <div>
                  <InputText id="projectdetails" class="w-full" autocomplete="off" />
                </div>
              </div>
              <div class="flex flex-col gap-1" v-if="visiblePassword">
                <label for="current_password" class="font-semibold">Current password</label>
                <div>
                  <InputText id="current_password" class="w-full" autocomplete="off" />
                </div>
              </div>
              <div class="flex flex-col gap-1" v-if="visiblePassword">
                <label for="new_password" class="font-semibold">New password</label>
                <div>
                  <InputText id="new_password" class="w-full" autocomplete="off" />
                </div>
              </div>
              <div class="flex flex-col gap-1" v-if="visiblePassword">
                <label for="confirm_new_password" class="font-semibold">Confirm new password</label>
                <div>
                  <InputText id="confirm_new_password" class="w-full" autocomplete="off" />
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-2">
              <Toast />
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
              <Button type="button" label="Save" severity="info" @click="goToProjectPage"></Button>
            </div>
          </Dialog>
        </div>
      </div> -->
    </div>
  </div>

</template>

<script>


// import Breadcrumb from 'primevue/breadcrumb';
import InputText from "primevue/inputtext";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

export default {
  components: {
    InputText,
    Dialog,
    Button,
    Toast,
    // Breadcrumb
  },
  name: "HomePage",
  data() {
    return {
      home: {
        icon: 'pi pi-home',
        route: '/introduction'
      },
      items: [
        { label: 'Dashbord' },
      ],

      visible: false,
      visiblePassword: false,
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
    },
    EditProfile() {
      this.visible = false;
      this.$toast.add({ severity: 'success', summary: 'Edit Profile Success', detail: ' ', life: 3000 });
    },
    goToProjectPage() {
      this.$router.push({ name: 'Project' });
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