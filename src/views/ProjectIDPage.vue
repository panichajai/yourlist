<template>
    <div class="flex flex-row bg-black h-screen">
        <div class="bg-blue-500 flex items-center justify-center w-64 sidebar-menu 
             fixed md:relative top-0 left-0 h-full z-50 md:z-0">
            <SidebarComponent />
        </div>

        <div class="flex flex-col flex-grow ml-64 md:ml-0">
            <div>
                <NavbarComponent Pagename="Project" class="text-gray-700" />
            </div>
            <div class="flex p-4 bg-white">
                <div class="flex-1">
                    <label class="text-4xl w-full block">To Do List</label>
                </div>
                <button type="button" @click="toggleVisibilityAssignee"
                    class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-md h-11">
                    <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
                    <span class="text-lg text-white text-left sm:text-xl">Add Assignee</span>
                </button>

                <div class="card flex justify-center">
                    <Dialog v-model:visible="visibleAssignee" modal
                        :header="isEdit.value ? 'Edit Person' : 'Assignee Person'" :style="{ width: '60rem' }">
                        <div class="flex flex-col gap-4 mb-6">
                            <Select v-model="selectedcustomer" :options="customers" filter optionLabel="fullname"
                                placeholder="Select Customer" class="w-full md:w-56">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center">
                                        <div>{{ slotProps.value.fullname }}</div>
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex items-center">
                                        <div>{{ slotProps.option.fullname }}</div>
                                    </div>
                                </template>
                            </Select>
                        </div>
                        <div class="flex justify-end gap-2">
                            <Toast />
                            <Button type="button" label="Cancel" severity="secondary"
                                @click="visibleAssignee = false; newAssigneeName = { assigneeName: '', tasks: [] }">
                            </Button>
                            <Button type="button" label="Save" severity="info" @click="AddAssignee">
                            </Button>
                        </div>
                    </Dialog>
                    <Dialog v-model:visible="visible" modal
                        :header="mode === 'add' ? 'Add Task' : mode === 'edit' ? 'Edit Task' : 'View Task'"
                        :style="{ width: '50rem' }">
                        <div class="flex flex-col gap-4 mb-6">
                            <div class="flex flex-col gap-1">
                                <label for="taskname" class="font-semibold">Title</label>
                                <div>
                                    <InputText id="taskname" v-model="taskModel.name" class="w-full" autocomplete="off"
                                        :disabled="mode === 'view'" />
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label for="add_description" class="font-semibold">Description</label>
                                <div class="card" :class="{ 'editor-disabled': mode === 'view' }">
                                    <Editor id="description" v-model="taskModel.description"
                                        editorStyle="height: 320px" />
                                </div>
                            </div>
                            <div class="flex-auto">
                                <label for="startdate" class="font-semibold mb-2">Start Date</label>
                                <DatePicker id="startdate" v-model="taskModel.startdate" showIcon fluid
                                    dateFormat="dd/mm/yy" iconDisplay="input" inputId="startdate"
                                    :disabled="mode === 'view'" />
                            </div>
                            <div class="flex-auto">
                                <label for="enddate" class="block font-semibold mb-2">End Date</label>
                                <DatePicker id="enddate" v-model="taskModel.enddate" showIcon fluid
                                    dateFormat="dd/mm/yy" iconDisplay="input" inputId="enddate"
                                    :disabled="mode === 'view'" />
                            </div>
                            <div class="flex-auto">
                                <label for="enddate" class="block font-semibold mb-2">Status</label>
                                <Select v-model="SelectedStatus" :options="Status" optionLabel="name"
                                    placeholder="Select a status" class="w-full md:w-56"
                                    :style="{ height: '42px', display: 'flex', alignItems: 'center', padding: '0px' }"
                                    :disabled="mode === 'view'" />
                            </div>
                        </div>
                        <div v-if="mode !== 'view'" class="flex justify-end gap-2">
                            <Toast />
                            <Button type="button" label="Cancel" severity="secondary" @click="handleCancel">
                            </Button>
                            <Button type="button" label="Save" severity="info" @click="AddTask">
                            </Button>
                        </div>
                    </Dialog>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center flex-grow overflow-auto bg-gray-200 p-4">
                <div class="flex flex-row gap-6 h-full w-full bg-white p-6 rounded-md">
                    <div v-for="(assignee, index) in assignees" :key="index"
                        class="bg-gray-100 rounded-md shadow-md p-4 w-64">
                        <div class="flex items-center justify-between pb-2 border-b-2 border-gray-300">
                            <div class="flex items-center gap-2 flex-grow">
                                <label class="text-lg w-14 truncate">
                                    {{ assignee.customerName }}
                                </label>
                            </div>
                            <div class="flex items-center">
                                <button type="button" @click="onAssignee('delete', assignee.assigneeid)"
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-300 rounded-md">
                                    <i class="pi pi-trash text-gray-600" style="font-size: 12px;"></i>
                                </button>
                                <button type="button" @click="onAssignee('edit', index, assignee)"
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-300 rounded-md">
                                    <i class="pi pi-pencil text-gray-600" style="font-size: 12px;"></i>
                                </button>
                                <button type="button" @click="toggleVisibility(assignee.assigneeid)"
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-300 rounded-md">
                                    <i class="pi pi-plus text-gray-600" style="font-size: 12px;"></i>
                                    <span class="text-xs text-gray-600 text-left">Add Task</span>
                                </button>
                            </div>
                        </div>


                        <div class="flex flex-col pt-2">
                            <ConfirmDialog />
                            <ScrollPanel style="width: 100%; height: 600px">
                                <div class="flex flex-col gap-2 pt-2">
                                    <div v-for="(task, index) in assignee.tasks" :key="index" :class="[
                                        'flex flex-col p-2 gap-2 bg-white border-2 shadow-md rounded-md',
                                        task.status === 'Pending' ? 'border-gray-500' : '',
                                        task.status === 'In Progress' ? 'border-blue-500' : '',
                                        task.status === 'Completed' ? 'border-green-500' : '',
                                        task.status === 'Overdue' ? 'border-red-500' : ''
                                    ]">
                                        <div class="flex items-center gap-4 justify-between">
                                            <label class="text-sm pt-1 text-gray-800 w-48 truncate">
                                                {{ task.name }}
                                            </label>

                                            <div class="flex items-center gap-3">
                                                <i class="pi pi-eye text-gray-600" style="font-size: 12px;"
                                                    @click="onTask('view', task.id)"></i>
                                                <i class="pi pi-trash text-gray-600" style="font-size: 12px;"
                                                    @click="onTask('delete', task.id)"></i>
                                                <i class="pi pi-pencil text-gray-600" style="font-size: 12px;"
                                                    @click="onTask('edit', task.id, task, task.assigneeid)"></i>
                                            </div>
                                        </div>

                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600 w-40 overflow-hidden truncate">
                                                {{ task.description ? task.description.replace(/<\/?[^>]+(>|$)/g, "") : "" }}
                                            </label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label
                                                class="text-xs"
                                                :class="{
                                                    'text-red-500': new Date() > new Date(task.enddate),
                                                    'text-gray-600': new Date() <= new Date(task.enddate),
                                                }"
                                            >
                                                {{ formatDate(task.startdate) }} - {{ formatDate(task.enddate) }}
                                            </label>
                                        </div>

                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-user text-gray-600" style="font-size: 12px;"></i>

                                            <label class="text-xs text-gray-600 w-40">Created By: {{ task.createBy
                                                }}</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-user-edit text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600 w-40">Updated By: {{ task.updateBy
                                                }}</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-flag text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600 w-40">
                                                {{ task.status || 'Pending' }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { inject } from 'vue';

import { useRoute } from 'vue-router';  // ใช้ useRoute เพื่อดึงพารามิเตอร์จาก URL
import SidebarComponent from '@/components/SidebarComponent.vue'
import InputText from "primevue/inputtext"
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import DatePicker from 'primevue/datepicker'
import Editor from 'primevue/editor'
import ScrollPanel from 'primevue/scrollpanel'
import { useToast } from 'primevue/usetoast'
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from 'axios';
import config from '@/config';
import { reactive } from 'vue';
import Select from 'primevue/select';
import ConfirmDialog from 'primevue/confirmdialog';

const route = useRoute();  // รับข้อมูลจาก URL
const projectid = ref(route.params.id);  // ใช้ id ที่ส่งมาจาก URL
const { apiBaseAPIUrl } = config;
const toast = useToast()
// const confirmDialog = inject('confirmation');
const confirmation = inject('confirmation'); // inject ConfirmationService
console.log('Confirmation:', confirmation);

const visibleAssignee = ref(false)
const visible = ref(false)
const isEdit = ref(false)
const isEditTask = ref(false)
const assignees = ref([]);
const newAssigneeName = ref({ assigneeName: '', tasks: [] })
const tasks = ref([]);
const selectedcustomer = ref();
const editingAssigneeId = ref(null);
const customers = ref([]);
const projectId = ref('');
const projectName = ref('');
const taskModel = reactive({
    name: '',
    description: '',
    startDate: null,
    endDate: null,
    assigneeid: null,
    status: '',
})

const mode = ref('add');

const toggleVisibility = (assigneeId) => {
    resetTaskModel();
    mode.value = 'add';
    taskModel.name = '';
    taskModel.description = '';
    taskModel.startDate = null;
    taskModel.endDate = null;
    taskModel.assigneeid = assigneeId;

    visible.value = true;
};


const handleCancel = () => {
    resetTaskModel();
    visible.value = false;
};

const resetTaskModel = () => {
    taskModel.name = '';
    taskModel.description = '';
    taskModel.startdate = null;
    taskModel.enddate = null;
    taskModel.assigneeid = null;
    SelectedStatus.value = null;
    isEditTask.value = false;
};

const SelectedStatus = ref();
const Status = ref([
    // { name: 'To Do', },            // งานที่ยังไม่ได้เริ่ม
    { name: 'Pending', },          // งานที่รอการดำเนินการ
    { name: 'In Progress', },      // งานที่กำลังทำอยู่
    { name: 'Completed', },        // งานที่เสร็จสิ้นแล้ว
    // { name: 'On Hold', },          // งานที่พักไว้ชั่วคราว
    // { name: 'Blocked', },          // งานที่ติดปัญหา
    // { name: 'Overdue', },          // งานที่เกินกำหนดเวลา
    // { name: 'Cancelled', },        // งานที่ยกเลิกแล้ว
]);

const findStatus = (statusName) => {
    return Status.value.find((status) =>
        status.name.toLowerCase() === statusName?.toLowerCase()
    ) || null;
};

const createTaskData = (taskModel, fullname) => {
    return {
        name: taskModel.name,
        description: taskModel.description,
        startdate: new Date(taskModel.startdate).toISOString(),
        enddate: new Date(taskModel.enddate).toISOString(),
        status: SelectedStatus.value?.name,
        assigneeid: taskModel.assigneeid,
        createBy: fullname,
        updateBy: fullname,
    };
};

const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle null or undefined dates
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        console.error('Invalid date detected:', dateString);
        return ''; // Handle invalid dates gracefully
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const validateAndParseDates = (taskModel) => {
    if (typeof taskModel.startdate === 'string' && taskModel.startdate.includes('/')) {
        const parsedStartDate = parseDateToISO(taskModel.startdate);
        if (!parsedStartDate) {
            alert('Invalid start date format.');
            return false;
        }
        taskModel.startdate = parsedStartDate;
    } else if (!taskModel.startdate) {
        console.error('startdate is null or invalid');
        alert('Invalid start date format.');
        return false;
    }

    if (typeof taskModel.enddate === 'string' && taskModel.enddate.includes('/')) {
        const parsedEndDate = parseDateToISO(taskModel.enddate);
        if (!parsedEndDate) {
            alert('Invalid end date format.');
            return false;
        }
        taskModel.enddate = parsedEndDate;
    } else if (!taskModel.enddate) {
        console.error('enddate is null or invalid');
        alert('Invalid end date format.');
        return false;
    }

    return true;
};

const parseDateToISO = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
        console.error('parseDateToISO: Invalid input:', dateString);
        return null;
    }
    const [day, month, year] = dateString.split('/');
    if (!day || !month || !year || day.length !== 2 || month.length !== 2 || year.length !== 4) {
        console.error('parseDateToISO: Invalid date format, expected DD/MM/YYYY:', dateString);
        return null;
    }
    const isoDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(isoDate.getTime())) {
        console.error('parseDateToISO: Invalid date value after parsing:', dateString);
        return null;
    }
    return isoDate.toISOString();
};

onMounted(async () => {
    await fetchAssignees()
    await fetchCustomers()
})

const fetchAssignees = async () => {
    const urlAPi = `${apiBaseAPIUrl}AssigneesControllers/GetAssigneeByProject/${projectid.value}`;
    try {
        const response = await axios.get(urlAPi);
        const data = response.data.data;
        projectName.value = data.projectName;
        projectId.value = data.projectId;
        assignees.value = response.data.data.getAssigneeModels;
        assignees.value.forEach((assignee) => {
            tasks.value = assignees.value.flatMap((assignee) => assignee.taskModels);
            assignee.tasks = assignee.taskModels;

            console.log('Tasks:', tasks.value);

        });
        console.log("tasks.value", tasks.value);
        console.log('Task Models:', assignees.value.flatMap((assignee) => assignee.taskModels));

        console.log('API Response:', response.data);

    } catch (error) {
        console.error(error);
    }
};

const fetchCustomers = async () => {
    const urlAPi = apiBaseAPIUrl + 'Customers';
    try {
        const response = await axios.get(urlAPi);
        customers.value = response.data.data;

    } catch (error) {
        console.error(error);
    }
}

const fetchUserFullName = async () => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
        alert('User email not found. Please log in again.');
        route.push({ name: 'LogIn' });
        return null;
    }

    try {
        const response = await axios.get(`${apiBaseAPIUrl}Customers/GetByEmail?email=${encodeURIComponent(email)}`);
        const { fullname } = response.data.data;
        return fullname;
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data.');
        return null;
    }
};

const AddTask = async () => {
    console.log('Task Model Before Submission:', JSON.stringify(taskModel, null, 2));
    console.log('Selected Status:', SelectedStatus.value);

    const fullname = await fetchUserFullName();
    if (isEditTask.value) {
        const isValidDates = validateAndParseDates(taskModel);
        if (!isValidDates) return; // Stop execution if date validation fails
    }
    const taskData = createTaskData(taskModel, fullname);

    try {
        if (mode.value === 'edit') {
            const confirmed = confirm("Are you sure you want to edit this task?");
            if (!confirmed) return;
            const response = await axios.put(`${apiBaseAPIUrl}TasksControllers/${taskModel.id}`, taskData);
            if (response.data.success) {
                toast.add({
                    severity: 'success',
                    summary: 'Edit Task Success',
                    life: 1000,
                });
            } else {
                console.error("Failed to edit task:", response.data.message);
                toast.add({
                    severity: 'error',
                    summary: 'Edit Task Failed',
                    detail: response.data.message,
                    life: 3000,
                });
            }
        } else if (mode.value === 'add') {
            const response = await axios.post(`${apiBaseAPIUrl}TasksControllers`, taskData);
            if (response.data.success) {
                toast.add({
                    severity: 'success',
                    summary: 'Task Added Successfully',
                    life: 1000,
                });
            } else {
                console.error("Failed to add task:", response.data.message);
                toast.add({
                    severity: 'error',
                    summary: 'Task Add Failed',
                    detail: response.data.message,
                    life: 3000,
                });
            }
        }

        setTimeout(() => {
            fetchAssignees();
        }, 1000);
    } catch (error) {
        console.error('Error processing task:', error);
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error occurred while processing task',
            life: 3000,
        });
    }

    resetTaskModel();
    visible.value = false;
};

const onTask = async (action, taskId) => {
    if (action === 'delete') {
        const confirmed = confirm("Are you sure you want to delete this task?");
        if (!confirmed) return;
        try {
            const response = await axios.delete(`${apiBaseAPIUrl}TasksControllers/${taskId}`);
            if (response.data.success) {
                toast.add({
                    severity: 'success',
                    summary: 'Task Deleted Successfully',
                    life: 1000,
                });
                setTimeout(() => {
                    fetchAssignees();
                }, 1000);
            } else {
                toast.add({
                    severity: 'error',
                    summary: 'Task Deletion Failed',
                    detail: response.data.message,
                    life: 3000,
                });
            }
        } catch (error) {
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred while deleting the task',
                life: 3000,
            });
        }
    }

    else if (action === 'edit') {
        mode.value = action;
        try {
            const response = await axios.get(`${apiBaseAPIUrl}TasksControllers/${taskId}`);
            console.log('Task Details for Edit:', response.data);

            if (response.data.success) {
                const taskDetails = response.data.data;

                // Set taskModel
                taskModel.id = taskDetails.id;
                taskModel.name = taskDetails.name;
                taskModel.description = taskDetails.description;
                taskModel.startdate = taskDetails.startdate
                    ? new Date(taskDetails.startdate)
                    : null;

                taskModel.enddate = taskDetails.enddate
                    ? new Date(taskDetails.enddate)
                    : null;
                taskModel.assigneeid = taskDetails.assigneeid;
                SelectedStatus.value = findStatus(taskDetails.status);

                console.log('Selected Status after Match (Edit):', SelectedStatus.value);
                console.log('Formatted Dates:', {
                    startdate: taskModel.startdate,
                    enddate: taskModel.enddate,
                });
            } else {
                console.error('Failed to fetch task details:', response.data.message);
                toast.add({
                    severity: 'error',
                    summary: 'Failed to Fetch Task Details',
                    detail: response.data.message,
                    life: 3000,
                });
            }
        } catch (error) {
            console.error('Error fetching task details for edit:', error);
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred while fetching task details',
                life: 3000,
            });
        }

        isEditTask.value = true;
        visible.value = true;
    } else if (action === 'view') {
        mode.value = action;
        try {
            const response = await axios.get(`${apiBaseAPIUrl}TasksControllers/${taskId}`);
            console.log('Task Details:', response.data);

            if (response.data.success) {
                const taskDetails = response.data.data;
                console.log('Parsed Task Details:', taskDetails);

                taskModel.id = taskDetails.id;
                taskModel.name = taskDetails.name;
                taskModel.description = taskDetails.description;
                taskModel.startdate = taskDetails.startdate
                    ? new Date(taskDetails.startdate)
                    : null;

                taskModel.enddate = taskDetails.enddate
                    ? new Date(taskDetails.enddate)
                    : null;
                taskModel.assigneeid = taskDetails.assigneeid;
                SelectedStatus.value = findStatus(taskDetails.status);
                console.log('Selected Status after Match (Edit):', SelectedStatus.value);
                console.log('Formatted Dates:', {
                    startdate: taskModel.startdate,
                    enddate: taskModel.enddate,
                });
            } else {
                console.error('Failed to fetch task details:', response.data.message);
                toast.add({
                    severity: 'error',
                    summary: 'Failed to Fetch Task Details',
                    detail: response.data.message,
                    life: 3000,
                });
            }
        } catch (error) {
            console.error("Error fetching task details:", error);
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred while fetching task details',
                life: 3000,
            });
        }
        visible.value = true;
    }
};
const resetAssigneeData = () => {
    selectedcustomer.value = {};
    editingAssigneeId.value = null;
};

const toggleVisibilityAssignee = () => {
    visibleAssignee.value = !visibleAssignee.value
    newAssigneeName.value = { assigneeName: '', tasks: [] };
    resetAssigneeData();
}

const onAssignee = async (action, assigneeId, assignee) => {
    console.log("Action:", action);
    console.log("Assignee ID (from button):", assigneeId);
    console.log("Assignee Data:", assignee);

    if (action === 'delete') {
        const confirmed = confirm("Are you sure you want to delete this assignee?");
        if (!confirmed) return;
        try {
            const response = await axios.delete(`${apiBaseAPIUrl}AssigneesControllers/${assigneeId}`);
            if (response.data.success) {
                alert("Task deleted successfully");
                if (response.data.success) {
                    toast.add({
                        severity: 'success',
                        summary: 'Add Assignee Success',
                        life: 1000,
                    });
                    setTimeout(() => {
                        fetchAssignees()
                    }, 1000);
                } else {
                    toast.add({
                        severity: 'error',
                        summary: 'Add Assignee Failed'
                    });
                }
            } else {
                console.error("Failed to delete task:", response.data.message);
                alert(`Failed to delete task: ${response.data.message}`);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("An error occurred while deleting the task");
        }
    }
    else if (action === 'edit') {
        isEdit.value = true;
        editingAssigneeId.value = assignee.assigneeid;
        selectedcustomer.value = { id: assignee.customerid, fullname: assignee.customerName };
        visibleAssignee.value = true;
    }
};

const AddAssignee = async () => {
    console.log("Selected customer (before PUT/POST):", selectedcustomer.value);
    console.log("Editing Assignee ID (in AddAssignee):", editingAssigneeId.value);

    if (!selectedcustomer.value.id) {
        toast.add({
            severity: 'warn',
            summary: 'Invalid Input',
            detail: 'Customer must be selected',
            life: 1000,
        });
        return;
    }

    const assigneeData = {
        projectid: projectId.value,
        projectName: projectName.value,
        customerid: selectedcustomer.value.id,
        customerName: selectedcustomer.value.fullname
    };

    const EditassigneeData = {
        id: editingAssigneeId.value,
        projectid: projectId.value,
        projectName: projectName.value,
        customerid: selectedcustomer.value.id,
        customerName: selectedcustomer.value.fullname
    };

    try {
        if (isEdit.value) {
            const response = await axios.put(`${apiBaseAPIUrl}AssigneesControllers/${editingAssigneeId.value}`, EditassigneeData);
            console.log("editingAssigneeId.value", editingAssigneeId.value)
            if (response.data.success) {
                toast.add({
                    severity: 'success',
                    summary: 'Update Assignee Success',
                    life: 1000,
                });
            } else {
                toast.add({
                    severity: 'error',
                    summary: 'Update Assignee Failed',
                    detail: response.data.message,
                });
            }
        } else {
            const response = await axios.post(`${apiBaseAPIUrl}AssigneesControllers`, assigneeData);
            if (response.data.success) {
                toast.add({
                    severity: 'success',
                    summary: 'Add Assignee Success',
                    life: 1000,
                });

            } else {
                toast.add({
                    severity: 'error',
                    summary: 'Add Assignee Failed',
                    detail: response.data.message,
                });
            }
        }

        setTimeout(() => {
            fetchAssignees();
        }, 1000);

        visibleAssignee.value = false;

    } catch (error) {
        console.error("Error adding/updating assignee:", error);
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: `Error: ${error.message}`,
        });
    }


};



</script>

<style scoped>
.form-container {
    /* ปรับขนาดให้ฟอร์มไม่ย่อหรือหดตัว */
    min-height: 200px;
    width: 100%;
    /* ช่วยให้ความกว้างของฟอร์มพอดีกับ Dialog */
}

input,
textarea,
.p-select {
    /* ปรับขนาดของฟิลด์ให้เหมาะสม */
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

.p-select {
    min-width: 200px;
    /* ป้องกันการย่อขนาด */
}

.p-dialog {
    max-width: 100%;
    /* ป้องกันการย่อ Dialog */
}

.editor-disabled {
    pointer-events: none;
    /* ปิดการโต้ตอบทั้งหมด */
    background-color: #e2e8f0;
    /* สีพื้นหลังเหมือนฟิลด์ input */
    border: 1px solid #CDD6E2;
    /* ขอบสีเหมือน input */
    opacity: 0.6;
    /* ทำให้ดูเหมือน disabled */
    border-radius: 4px;
    /* เพิ่มมุมโค้งให้ดูสอดคล้อง */
    padding: 10px;
    /* เพิ่ม padding ให้เหมาะสม */
    color: #6c757d;
    /* สีข้อความเทา */
}
</style>