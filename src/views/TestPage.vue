<template>
    <Dialog v-model:visible="visible" modal header="Add Task" :style="{ width: '60rem' }">
    <div class="flex flex-col gap-4 mb-6">
      <div class="flex flex-col gap-1">
        <label for="taskname" class="font-semibold">Task name</label>
        <InputText id="taskname" v-model="task.name" class="w-full" autocomplete="off" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="add_description" class="font-semibold">Add description</label>
        <Editor v-model="task.description" editorStyle="height: 320px" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="assignee" class="font-semibold">Assignee</label>
        <InputText id="assignee" v-model="task.assignee" class="w-full" autocomplete="off" />
      </div>
      <div class="flex-auto">
        <label for="startdate" class="font-semibold mb-2">Start Date</label>
        <DatePicker v-model="task.startDate" showIcon fluid iconDisplay="input" inputId="startdate" />
      </div>
      <div class="flex-auto">
        <label for="enddate" class="font-semibold mb-2">End Date</label>
        <DatePicker v-model="task.endDate" showIcon fluid iconDisplay="input" inputId="enddate" />
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <Toast />
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" severity="info" @click="AddTask"></Button>
    </div>
  </Dialog>

  <!-- Card where task data will be displayed -->
  <div v-if="task.name" class="card mt-6 p-4 shadow-md">
    <h3 class="font-semibold text-xl">{{ task.name }}</h3>
    <p class="text-gray-600">{{ task.description }}</p>
    <div class="mt-2 text-sm text-gray-500">
      <span><strong>Assignee:</strong> {{ task.assignee }}</span><br />
      <span><strong>Start Date:</strong> {{ task.startDate }}</span><br />
      <span><strong>End Date:</strong> {{ task.endDate }}</span>
    </div>
  </div>
  </template>
  
  <script>
  import Dialog from 'primevue/dialog';
  import InputText from "primevue/inputtext";
  import Button from 'primevue/button';
  import DatePicker from 'primevue/datepicker';

  export default {
    components: {
        Dialog,
        InputText,
        Button,
        DatePicker
    },
    name: 'TestPage',
    data() {
        return {
      visible: true, // Controls the visibility of the Dialog
      task: {
        name: '',
        description: '',
        assignee: '',
        startDate: null,
        endDate: null
      }
    };
  },
  methods: {
    AddTask() {
      // Logic to save the task, and hide the dialog
      // In this case, we just hide the dialog
      this.visible = false;
      
      // Optionally, you can add more logic here, like saving data to a backend or database
    }
  }
  };
  </script>
  