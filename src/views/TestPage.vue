<template>
  <div class="p-6 bg-white">


    <div class="bg-gray-100 rounded-md shadow-md p-4 w-60">
      <div class="flex items-center gap-2 pb-2 border-b-2 border-gray-300">
        <Avatar label="P" class="mr-2"
          style="background-color: white; color: black; width: 24px; height: 24px; font-size: 14px;"
          shape="circle" />
        <label class="text-lg font-semibold ">Panicha</label>
      </div>

      <div class="flex flex-col gap-2 pt-2">

        <div class="flex flex-col p-2 gap-2 bg-white rounded-md">
          <label class="text-sm pt-1 text-gray-800">Dashboard</label>
          <div class="flex items-center gap-4">
            <i class="pi pi-align-left text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">Test the functionality of ..</label>
          </div>
          <div class="flex items-center gap-4">
            <i class="pi pi-calendar text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">13/11/2024</label>
          </div>
          <div class="flex items-center gap-4">
            <i class="pi pi-calendar-clock text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">16/11/2024</label>
          </div>
        </div>

        <div class="flex flex-col p-2 gap-2 bg-white rounded-md">
          <label class="text-sm pt-1 text-gray-800">Dashboard</label>
          <div class="flex items-center gap-4">
            <i class="pi pi-align-left text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">Test the functionality of ..</label>
          </div>
          <div class="flex items-center gap-4">
            <i class="pi pi-calendar text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">13/11/2024</label>
          </div>
          <div class="flex items-center gap-4">
            <i class="pi pi-calendar-clock text-gray-500" style="font-size: 12px;"></i>
            <label class="text-xs text-gray-500">16/11/2024</label>
          </div>
        </div>

      </div>



    </div>

  </div>
</template>

<script>
import Avatar from 'primevue/avatar';

export default {
  components: {
    Avatar,
  },
  name: 'TestPage',
  // data() {
  //   return {
  //     tasks: [
  //       { id: 1, title: 'Changes Template email tickets', details: 'In Shared with...', dueDate: '2023-03-20', assignedTo: 'NL', subtasks: [], },
  //       { id: 2, title: 'Event ยังกระตุกกับ Organizer', details: 'In Shared with...', dueDate: '2023-03-15', assignedTo: 'TT', subtasks: [], },
  //       { id: 3, title: 'UI - 1. Landing Page', details: 'มีข้อมูลคนเข้าใช้งานเริ่ม...', dueDate: '2023-03-10', assignedTo: 'Manow', subtasks: [{}, {}], },
  //     ],
  //   };
  // },
  // computed: {
  //   sortedTasks() {
  //     // Just return the sorted array instead of doing side effects
  //     return [...this.tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  //   },
  // },
  // methods: {
  //   formatDate(date) {
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //     return new Date(date).toLocaleDateString(undefined, options);
  //   },
  //   markAsComplete(id) {
  //     const task = this.tasks.find(t => t.id === id);
  //     task.completed = true; // Handle task completion logic
  //   },
  // },
};
</script>