<template>
  <div class="flex flex-col w-full bg-gray-100">
    <!-- Navbar -->
    <div class="w-full py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30 mb-1">
      <ul class="ml-auto flex items-center">
        <li class="mr-1 dropdown">
          <button
            type="button"
            class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          >
            <i class="ri-search-line"></i>
          </button>
        </li>
        <button
          type="button"
          class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
        >
          <i class="ri-notification-3-line"></i>
        </button>
        <li class="dropdown ml-3 relative">
          <button type="button" @click="toggleDropdown('navbar')" class="dropdown-toggle flex items-center">
            <img :src="require('@/assets/profile.png')" alt="Profile Picture" class="w-8 h-8 rounded object-cover" />
          </button>
          <ul
            v-show="states.dropdowns['navbar']"
            class="dropdown-menu absolute top-full right-0 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100"
          >
            <li>
              <a
                href="#"
                @click="openProfileDialog"
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              >
                Profile
              </a>
            </li>
            <li>
              <button @click="logout" 
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              >
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Profile Dialog -->
    <div class="card flex justify-center">
      <Toast />
      <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '30rem' }">
        <div class="flex flex-col gap-4 mb-6">
          <!-- First Name -->
          <div class="flex flex-col gap-1">
            <label for="fname" class="font-semibold">First name</label>
            <InputText v-model="formData.fname" class="w-full" placeholder="First name" />
          </div>
          <!-- Last Name -->
          <div class="flex flex-col gap-1">
            <label for="lname" class="font-semibold">Last Name</label>
            <InputText v-model="formData.lname" class="w-full" placeholder="Last Name" />
          </div>
          <!-- Password Section -->
          <div>
            <h2 class="text-base font-medium mb-1">Password</h2>
            <div class="flex justify-start gap-2">
              <Button
                type="button"
                label="Change password"
                severity="secondary"
                size="small"
                @click="visiblePassword = true"
              ></Button>
              <Button
                type="button"
                label="Cancel"
                severity="secondary"
                size="small"
                v-if="visiblePassword"
                @click="visiblePassword = false"
              ></Button>
            </div>
          </div>
          <!-- Current Password -->
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="current_password" class="font-semibold">Current password</label>
            <InputText v-model="formData.currentPassword" class="w-full" placeholder="Current password" />
          </div>
          <!-- New Password -->
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="new_password" class="font-semibold">New password</label>
            <InputText v-model="formData.newPassword" class="w-full" placeholder="New password" />
          </div>
          <!-- Confirm New Password -->
          <div class="flex flex-col gap-1" v-if="visiblePassword">
            <label for="confirm_new_password" class="font-semibold">Confirm new password</label>
            <InputText v-model="formData.confirmNewPassword" class="w-full" placeholder="Confirm new password" />
          </div>
        </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
          <Button type="button" label="Save" severity="info" @click="updateProfile"></Button>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import axios from 'axios';
import config from '@/config';

const router = useRouter(); 
const { apiBaseAPIUrl } = config;
const toast = useToast();
const visible = ref(false);
const visiblePassword = ref(false);
const states = ref({
  dropdowns: {},
});
const defaultFormData = {
  id: '',
  fname: '',
  lname: '',
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};
const formData = reactive({ ...defaultFormData });

const resetFormData = () => {
  Object.assign(formData, { ...defaultFormData });
  visiblePassword.value = false;
};

const toggleDropdown = (dropdownId) => {
  states.value.dropdowns[dropdownId] = !states.value.dropdowns[dropdownId];
};

const fetchProfileData = async () => {
  const email = localStorage.getItem('userEmail'); // ดึง Email จาก LocalStorage
  if (!email) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'No email found. Please log in again.',
      life: 3000,
    });
    router.push({ name: 'Login' });
    return;
  }

  try {
    const response = await axios.get(`${apiBaseAPIUrl}Customers/GetByEmail?email=${encodeURIComponent(email)}`);
    const { fname, lname, id } = response.data.data;
    Object.assign(formData, { fname, lname, id });
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.response?.data?.message || 'Failed to fetch profile data.',
      life: 3000,
    });
  }
};

const verifyCurrentPassword = async () => {
  try {
    const response = await axios.post(`${apiBaseAPIUrl}Customers/${formData.id}/verifyPassword`, {
      currentPassword: formData.currentPassword,
    });
    return response.data.success;
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.response?.data?.message || 'Failed to verify password.',
      life: 3000,
    });
    return false;
  }
};

const updateProfile = async () => {
  if (!formData.fname.trim() || !formData.lname.trim()) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'First name and last name are required.',
      life: 3000,
    });
    return;
  }

  if (visiblePassword.value) {
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmNewPassword) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please complete the password information.',
        life: 3000,
      });
      return;
    }

    if (formData.newPassword.length < 6) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'New password must be at least 6 characters.',
        life: 3000,
      });
      return;
    }

    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'New passwords do not match.',
        life: 3000,
      });
      return;
    }

    const isPasswordValid = await verifyCurrentPassword();
    if (!isPasswordValid) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'The current password is invalid.',
        life: 3000,
      });
      return;
    }
  }

  const payload = {
    fname: formData.fname,
    lname: formData.lname,
    currentPassword: visiblePassword.value ? formData.currentPassword : undefined, // เพิ่ม currentPassword
    password: visiblePassword.value ? formData.newPassword : undefined,
  };

  try {
    const response = await axios.put(`${apiBaseAPIUrl}Customers/${formData.id}`, payload);
    if (response.status === 200) {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Profile updated successfully.',
        life: 3000,
      });
      visible.value = false;
      resetFormData();
    }
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.response?.data?.message || 'Failed to update profile.',
      life: 3000,
    });
  }
};

const openProfileDialog = () => {
  resetFormData();
  fetchProfileData();
  visible.value = true;
};

onMounted(() => {
  fetchProfileData();
});

const logout = () => {
  // ลบข้อมูล Email จาก LocalStorage
  localStorage.removeItem('userEmail');
  // เปลี่ยนเส้นทางไปยังหน้า Login
  router.push({ name: 'LandingPage' });
};
</script>
