  <template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <div class="flex flex-row bg-black h-screen">
      <div class="bg-blue-500 flex items-center justify-center w-64">
        <Sidebar />
      </div>

      <div class="flex flex-col flex-grow">
        <div class="bg-green-500 flex items-center justify-center">
          <Navbar />
        </div>
        <div>
          <Breadcrumb :home="home" :model="items">
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
                </Breadcrumb>
        <div class="flex p-4 bg-white">
          <div class="flex-1">
            <label class="text-4xl block">Dashbord</label>
          </div>
          <button type="button" @click="visible = true"
            class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-md">
            <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
            <label class="text-lg text-white text-left sm:text-xl">New Project</label>
          </button>

          <div class="card flex justify-center">
            <Dialog v-model:visible="visible" modal header="New Project" :style="{ width: '30rem' }">
              <div class="flex flex-col gap-4 mb-6">
                <div class="flex flex-col gap-1">
                  <label for=" projectname" class="font-semibold">Project Name</label>
                  <div>
                    <InputText id="projectname" class="w-full" autocomplete="off" />
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
        </div>
        </div>
        


        <div class="flex flex-col items-center justify-center flex-grow overflow-auto">
          <div class="flex flex-col bg-gray-100 bg-white h-full w-full p-6">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-blue-500 rounded-md shadow-md">
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-white text-left sm:text-xl">Total Tasks</dt>
                  <i class="pi pi-list-check" style="color: white; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">120</dd>
              </div>

              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-white rounded-md shadow-md">
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-gray-600 text-left sm:text-xl">Completed Tasks</dt>
                  <i class="pi pi-check-square" style="color: #3B82F6; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">80</dd>
              </div>

              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-white rounded-md shadow-md">
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-gray-600 text-left sm:text-xl">Pending Tasks</dt>
                  <i class="pi pi-exclamation-circle" style="color: #3B82F6; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">40</dd>
              </div>
            </dl>

            <div class="card flex justify-center mt-6 w-80 h-80">
              <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>


  </template>

<script>
import Breadcrumb from 'primevue/breadcrumb';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Chart from 'primevue/chart';
import Dialog from 'primevue/dialog';

export default {
  components: {
    Breadcrumb,
    Navbar,
    Sidebar,
    InputText,
    Button,
    Chart,
    Dialog,

  },
  name: "DashboardPage",
  data() {
    return {
      home: {
                icon: 'pi pi-home',
                route: '/dashboard'
            },
            items: [
                { label: 'Dashboard'},
            ],
      chartData: null,
      chartOptions: {
        cutout: '60%'
      },
      visible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    goToProjectPage() {
      this.$router.push({ name: 'Project' });
    },
    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ['Total Tasks', 'Completed Tasks', 'Pending Tasks'],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      return {
        plugins: {
          legend: {
            labels: {
              cutout: '60%',
              color: textColor
            }
          }
        }
      };
    }
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },

};

</script>
