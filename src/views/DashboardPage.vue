<template>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  <div class="flex flex-row bg-black h-screen">
    <div 
      class="bg-blue-500 flex items-center justify-center w-64 sidebar-menu 
             fixed md:relative top-0 left-0 h-full z-50 md:z-0"
    >
      <SidebarComponent />
    </div>

    <div class="flex flex-col flex-grow ml-64 md:ml-0">
      <div>
        <NavbarComponent Pagename="Dashboard" class="text-gray-700"/>
      </div>
      <div>
        <div class="flex p-4 bg-white">
          <div class="flex-1">
            <label class="text-4xl block">Dashboard</label>
          </div>

          <div class="card flex justify-center">
            <Dialog v-model:visible="visible" modal header="New Project" :style="{ width: '30rem' }">
              <div class="flex flex-col gap-4 mb-6">
                <div class="flex flex-col gap-1">
                  <label for="projectname" class="font-semibold">YourList</label>
                  <InputText class="w-full" disabled placeholder="Panicha" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="projectdetails" class="font-semibold">Project Details</label>
                  <InputText class="w-full" disabled placeholder="-" />
                </div>
              </div>
              <div class="flex justify-end gap-2">
                <Toast />
                <Button
                  type="button"
                  label="Cancel"
                  severity="secondary"
                  @click="visible = false"
                ></Button>
                <Button
                  type="button"
                  label="Save"
                  severity="info"
                  @click="goToProjectPage"
                ></Button>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center flex-grow overflow-auto">
        <div class="flex flex-col bg-gray-100 h-full w-full p-4">
          <ScrollPanel style="width: 100%; height: 520px" class="bg-white">

          <div class="flex flex-col h-full w-full bg-white p-6 rounded-md">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-blue-500 rounded-md shadow-md"
              >
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-white text-left sm:text-xl">Total Tasks</dt>
                  <i class="pi pi-list-check" style="color: white; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">120</dd>
              </div>

              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-gray-100 rounded-md shadow-md"
              >
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-gray-600 text-left sm:text-xl">Completed Tasks</dt>
                  <i class="pi pi-check-square" style="color: #3B82F6; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-gray-600 sm:text-5xl">80</dd>
              </div>

              <div
                class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-gray-100 rounded-md shadow-md"
              >
                <div class="flex flex-row items-center gap-4">
                  <dt class="text-lg text-gray-600 text-left sm:text-xl">Pending Tasks</dt>
                  <i class="pi pi-exclamation-circle" style="color: #3B82F6; font-size: 1.5rem;"></i>
                </div>
                <dd class="text-3xl font-semibold tracking-tight text-gray-600 sm:text-5xl">40</dd>
              </div>
            </dl>
            <div class="pb-8">
              <div class="card flex justify-center mt-6 w-72 h-72">
                <Chart
                  type="doughnut"
                  :data="chartData"
                  :options="chartOptions"
                  class="w-full md:w-[30rem]"
                />
              </div>
            </div>
            
          </div>
        </ScrollPanel>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import Chart from 'primevue/chart';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import ScrollPanel from 'primevue/scrollpanel'

const router = useRouter(); 
const visible = ref(false);
const chartData = ref(null);
const chartOptions = ref({
  cutout: '60%',
});

const goToProjectPage = () => {
  router.push({ name: 'Project' });
};

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  chartData.value = {
    labels: ['Total Tasks', 'Completed Tasks', 'Pending Tasks'],
    datasets: [
      {
        data: [120, 80, 40],
        backgroundColor: [
          documentStyle.getPropertyValue('--p-cyan-500'),
          documentStyle.getPropertyValue('--p-orange-500'),
          documentStyle.getPropertyValue('--p-gray-500'),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--p-cyan-400'),
          documentStyle.getPropertyValue('--p-orange-400'),
          documentStyle.getPropertyValue('--p-gray-400'),
        ],
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  chartOptions.value = {
    plugins: {
      legend: {
        labels: {
          cutout: '60%',
          color: textColor,
        },
      },
    },
  };
};

onMounted(() => {
  setChartData();
  setChartOptions();
});
</script>
