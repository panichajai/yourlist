<template>
    <!-- <div class="flex flex-col flex-1"> -->
        <div class="w-full py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button type="button" class="text-lg text-gray-600 sidebar-toggle">
            <i class="ri-menu-line"></i>
          </button>
          <ul class="flex items-center text-sm ml-4">
            <li class="mr-2">
              <a href="#" class="text-gray-400 hover:text-gray-600 font-medium">Dashboard</a>
            </li>
            <li class="text-gray-600 mr-2 font-medium">/</li>
            <li class="text-gray-600 mr-2 font-medium">Analytics</li>
          </ul>
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
                <div class="mt-3 mb-2">
                  <div class="text-[13px] font-medium text-gray-400 ml-4 mb-2">Recently</div>
                  <ul class="max-h-64 overflow-y-auto">
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create
                            landing page</div>
                          <div class="text-[11px] text-gray-400">$345</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="dropdown">
              <button type="button"
                class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
                <i class="ri-notification-3-line"></i>
              </button>
              <div
                class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                <div class="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                  <button type="button" data-tab="notification" data-tab-page="notifications"
                    class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active">Notifications</button>
                  <button type="button" data-tab="notification" data-tab-page="messages"
                    class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1">Messages</button>
                </div>
                <div class="my-2">
                  <ul class="max-h-64 overflow-y-auto" data-tab-for="notification" data-page="notifications">
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New
                            order
                          </div>
                          <div class="text-[11px] text-gray-400">from a user</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New
                            order
                          </div>
                          <div class="text-[11px] text-gray-400">from a user</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New
                            order
                          </div>
                          <div class="text-[11px] text-gray-400">from a user</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New
                            order
                          </div>
                          <div class="text-[11px] text-gray-400">from a user</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New
                            order
                          </div>
                          <div class="text-[11px] text-gray-400">from a user</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul class="max-h-64 overflow-y-auto hidden" data-tab-for="notification" data-page="messages">
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe
                          </div>
                          <div class="text-[11px] text-gray-400">Hello there!</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe
                          </div>
                          <div class="text-[11px] text-gray-400">Hello there!</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe
                          </div>
                          <div class="text-[11px] text-gray-400">Hello there!</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe
                          </div>
                          <div class="text-[11px] text-gray-400">Hello there!</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <img src="https://placehold.co/32x32" alt=""
                          class="w-8 h-8 rounded block object-cover align-middle">
                        <div class="ml-2">
                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe
                          </div>
                          <div class="text-[11px] text-gray-400">Hello there!</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="dropdown ml-3 relative">
              <!-- ปุ่ม Toggle Dropdown -->
              <button type="button" @click="toggleDropdown('navbar')" class="dropdown-toggle flex items-center">
                <img src="https://placehold.co/32x32" alt="Profile Picture"
                  class="w-8 h-8 rounded block object-cover align-middle">
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
                  <a href="#"
                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
      <!-- </div> -->


      <div class="card flex justify-center">
        <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
</Dialog>
    </div>
</template>

<script>



// import Menubar from 'primevue/menubar';
import InputText from "primevue/inputtext";
// import Avatar from "primevue/avatar";
// import Badge from 'primevue/badge'; 
// import Ripple from 'primevue/ripple'; 
import Dialog from 'primevue/dialog';

export default {
  components: {
    InputText,
    Dialog
  },
  name: "HomePage",
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