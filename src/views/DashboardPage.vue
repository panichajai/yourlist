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
        <NavbarComponent Pagename="Dashboard" class="text-gray-700" />
      </div>
      <div>
        <div class="flex p-4 bg-white">
          <div class="flex-1">
            <label class="text-4xl block">Dashboard</label>
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
                  <dd class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {{ taskStatistics.total }}
                  </dd>
                </div>

                <div
                  class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-gray-100 rounded-md shadow-md"
                >
                  <div class="flex flex-row items-center gap-4">
                    <dt class="text-lg text-gray-600 text-left sm:text-xl">Completed Tasks</dt>
                    <i class="pi pi-check-square" style="color: #3B82F6; font-size: 1.5rem;"></i>
                  </div>
                  <dd class="text-3xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
                    {{ taskStatistics.completed }}
                  </dd>
                </div>

                <div
                  class="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 w-60 sm:w-80 h-40 bg-gray-100 rounded-md shadow-md"
                >
                  <div class="flex flex-row items-center gap-4">
                    <dt class="text-lg text-gray-600 text-left sm:text-xl">Pending Tasks</dt>
                    <i class="pi pi-exclamation-circle" style="color: #3B82F6; font-size: 1.5rem;"></i>
                  </div>
                  <dd class="text-3xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
                    {{ taskStatistics.pending }}
                  </dd>
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
import axios from 'axios';
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import Chart from 'primevue/chart';
import ScrollPanel from 'primevue/scrollpanel';
import config from "@/config";

const { apiBaseAPIUrl } = config;
const taskStatistics = ref({
  total: 0,
  completed: 0,
  pending: 0,
});
const chartData = ref(null);
const chartOptions = ref({});

const fetchTaskStatistics = async () => {
  try {
    const urlAPi = `${apiBaseAPIUrl}TasksControllers`; // ดึงข้อมูลจาก TasksControllers
    const response = await axios.get(urlAPi);
    const tasks = response.data.data || []; // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: [ ... ] }

    // คำนวณสถิติ
    const completed = tasks.filter(task => task.status === 'Completed').length;
    const pending = tasks.filter(task => task.status === 'To Do' || task.status === 'In Progress').length;

    taskStatistics.value = {
      total: tasks.length,
      completed,
      pending,
    };

    updateChartData();
  } catch (error) {
    console.error('Error fetching task statistics:', error);
  }
};

const updateChartData = () => {
  const documentStyle = getComputedStyle(document.body);
  chartData.value = {
    labels: ['Completed Tasks', 'Pending Tasks'],
    datasets: [
      {
        data: [taskStatistics.value.completed, taskStatistics.value.pending],
        backgroundColor: [
          documentStyle.getPropertyValue('--p-green-500'),
          documentStyle.getPropertyValue('--p-orange-500'),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--p-green-400'),
          documentStyle.getPropertyValue('--p-orange-400'),
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
          color: textColor,
        },
      },
    },
  };
};

onMounted(() => {
  fetchTaskStatistics();
  setChartOptions();
});
</script>


