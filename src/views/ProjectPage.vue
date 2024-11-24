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
                        <label class="text-4xl w-full block">To Do List</label>
                    </div>
                    <button type="button" @click="visible = true"
                        class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-md">
                        <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
                        <label class="text-lg text-white text-left sm:text-xl">Add Task</label>
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
                                    <label for="enddate" class="font-semibold mb-2">End Date</label>
                                    <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input"
                                        inputId="enddate" />
                                </div>
                            </div>
                            <div class="flex justify-end gap-2">
                                <Toast />
                                <Button 
                                    type="button" 
                                    label="Cancel" 
                                    severity="secondary"
                                    @click="visible = false">
                                </Button>
                                <Button 
                                    type="button" 
                                    label="Save" 
                                    severity="info" 
                                    @click="AddTask">
                                </Button>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center flex-grow overflow-auto">
                <div class="flex flex-col bg-gray-100 bg-white h-full w-full p-6">



                    
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';
import Editor from 'primevue/editor';
import Toast from 'primevue/toast';


export default {
    components: {
        Navbar,
        Sidebar,
        Breadcrumb,
        InputText,
        Button,
        Dialog,
        DatePicker,
        Editor,
        Toast
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