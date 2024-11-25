<template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <div class="flex flex-row bg-black h-screen">
        <div class="bg-blue-500 flex items-center justify-center w-64">
            <Sidebar />
        </div>

        <div class="flex flex-col flex-grow">
            <!-- <div class="bg-green-500 flex items-center justify-center">
                <Navbar />
            </div> -->
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
                        <label class="text-4xl w-full block">To Do List</label>
                    </div>
                    <button type="button" @click="visible = true"
                        class="flex items-center gap-2 px-4 py-2  h-10 bg-blue-500 rounded-md">
                        <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
                        <span class="text-lg text-white text-left">Add Assignee</span>
                    </button>

                    <div class="card flex justify-center">
                        <Dialog v-model:visible="visible" modal header="Add Task" :style="{ width: '60rem' }">
                            <div class="flex flex-col gap-4 mb-6">
                                <div class="flex flex-col gap-1">
                                    <label for=" taskname" class="font-semibold">Task name</label>
                                    <div>
                                        <InputText id="taskname" class="w-full" autocomplete="off" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label for=" add_description" class="font-semibold">Add description</label>
                                    <div class="card">
                                        <Editor v-model="value" editorStyle="height: 320px" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label for=" assignee" class="font-semibold">Assignee</label>
                                    <div>
                                        <InputText id="assignee" class="w-full" autocomplete="off" />
                                    </div>
                                </div>
                                <div class="flex-auto">
                                    <label for="startdate" class="font-semibold mb-2">Start Date</label>
                                    <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input"
                                        inputId="startdate" />
                                </div>
                                <div class="flex-auto">
                                    <label for="enddate" class="block font-semibold mb-2">End Date</label>
                                    <DatePicker v-model="date" dateFormat="dd/mm/yy" inputId="enddate" class="w-full" />
                                </div>

                            </div>
                            <div class="flex justify-end gap-2">
                                <Toast />
                                <Button type="button" label="Cancel" severity="secondary" @click="visible = false">
                                </Button>
                                <Button type="button" label="Save" severity="info" @click="AddTask">
                                </Button>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center flex-grow overflow-auto bg-gray-200 p-4">
                <div class="flex flex-row gap-6 h-screen w-full bg-white p-6 rounded-md">
                    <div class="bg-gray-100 rounded-md shadow-md p-4 w-60">
                        <div class="flex items-center justify-between pb-2 border-b-2 border-gray-300">
                            <div class="flex items-center gap-2">
                                <!-- <div class="grid justify-items-center items-center w-6 h-6 bg-blue-300 text-xs text-white rounded-full">
                                P
                                </div> -->
                                <label class="text-lg">Panicha</label>
                            </div>
                            <button type="button" @click="visible = true"
                                class="flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-md">
                                <i class="pi pi-plus" style="color: white; font-size: 0.5rem;"></i>
                                <span class="text-xs text-white text-left">Add Task</span>
                            </button>
                        </div>

                        <div class="flex flex-col pt-2">
                            <ScrollPanel style="width: 100%; height: 440px">
                                <div class="flex flex-col gap-2 pt-2">
                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>

                    <div class="bg-gray-100 rounded-md shadow-md p-4 w-60">
                        <div class="flex items-center justify-between pb-2 border-b-2 border-gray-300">
                            <div class="flex items-center gap-2">
                                <!-- <div class="grid justify-items-center items-center w-6 h-6 bg-blue-300 text-xs text-white rounded-full">
                                P
                                </div> -->
                                <label class="text-lg">Panicha</label>
                            </div>
                            <button type="button" @click="visible = true"
                                class="flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-md">
                                <i class="pi pi-plus" style="color: white; font-size: 0.5rem;"></i>
                                <span class="text-xs text-white text-left">Add Task</span>
                            </button>
                        </div>

                        <div class="flex flex-col pt-2">
                            <ScrollPanel style="width: 100%; height: 440px">
                                <div class="flex flex-col gap-2 pt-2">
                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>

                    <div class="bg-gray-100 rounded-md shadow-md p-4 w-60">
                        <div class="flex items-center justify-between pb-2 border-b-2 border-gray-300">
                            <div class="flex items-center gap-2">
                                <!-- <div class="grid justify-items-center items-center w-6 h-6 bg-blue-300 text-xs text-white rounded-full">
                                P
                                </div> -->
                                <label class="text-lg">Panicha</label>
                            </div>
                            <button type="button" @click="visible = true"
                                class="flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-md">
                                <i class="pi pi-plus" style="color: white; font-size: 0.5rem;"></i>
                                <span class="text-xs text-white text-left">Add Task</span>
                            </button>
                        </div>

                        <div class="flex flex-col pt-2">
                            <ScrollPanel style="width: 100%; height: 440px">
                                <div class="flex flex-col gap-2 pt-2">
                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>

                                    <div class="flex flex-col p-2 gap-2 bg-white shadow-md rounded-md">
                                        <label class="text-sm pt-1 text-gray-800">Dashboard</label>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-align-left text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">Test the functionality of ..</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">13/11/2024</label>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <i class="pi pi-calendar-clock text-gray-600" style="font-size: 12px;"></i>
                                            <label class="text-xs text-gray-600">16/11/2024</label>
                                        </div>
                                    </div>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>

                    <TestPage namepage="Panicha"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';
import Editor from 'primevue/editor';
import Toast from 'primevue/toast';
import ScrollPanel from 'primevue/scrollpanel';
import TestPage from './TestPage.vue';


export default {
    components: {
        // Navbar,
        Sidebar,
        Breadcrumb,
        InputText,
        Button,
        Dialog,
        DatePicker,
        Editor,
        Toast,
        ScrollPanel,
        TestPage
    },
    name: 'ProjectPage',
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                route: '/dashboard'
            },
            items: [
                { label: 'Project' },
                { label: 'To Do List' },
            ],
            visible: false,
            buttondisplay: null,
            icondisplay: null,
            templatedisplay: null,
            value: ''
        }
    },
    methods: {
        toggleVisibility() {
            this.visible = !this.visible;
        },
        AddTask() {
            this.$toast.add({ severity: 'success', summary: 'Add Task Success', detail: ' ', life: 3000 });
        }
    },

}
</script>
