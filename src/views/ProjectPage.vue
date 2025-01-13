<template>
    <div class="flex flex-row bg-black h-screen">
        <div class="bg-blue-500 flex items-center justify-center w-64 sidebar-menu fixed md:relative top-0 left-0 h-full z-50 md:z-0">
            <SidebarComponent />
        </div>

        <div class="flex flex-col flex-grow ml-64 md:ml-0">
            <div>
                <NavbarComponent Pagename="Dashboard" class="text-gray-700" />
            </div>

            <div class="flex p-4 bg-white">
                <div class="flex-1">
                    <label class="text-4xl block">Project</label>
                </div>
                <button type="button" @click="openDialog()" class="flex items-center gap-2 px-4 py-2 w-44 bg-blue-500 rounded-md">
                    <i class="pi pi-plus" style="color: white; font-size: 1rem;"></i>
                    <span class="text-lg text-white text-left sm:text-xl">New Project</span>
                </button>
            </div>

            <!-- Table Section -->
            <div class="flex flex-col items-center justify-center flex-grow overflow-auto">
                <div class="flex flex-col bg-gray-100 h-full w-full p-4">
                    <div class="flex flex-col h-full w-full bg-white p-6 rounded-md">
                        <div v-if="loading" class="flex items-center justify-center">
                            <p>Loading...</p>
                        </div>
                        <div class="card">
                            <DataTable :value="projects" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem" emptyMessage="No projects found.">
                                <Column field="name" header="Name" style="width: 25%"></Column>
                                <Column field="details" header="Details" style="width: 50%"></Column>
                                <Column field="id" header="ID" style="width: 25%"></Column>
                                <Column header="Actions" style="width: 25%">
                                    <template #body="slotProps">
                                        <div class="flex items-center gap-4">
                                            <button type="button" @click="onAction('view', slotProps.data.id)" class="flex items-center gap-2 hover:bg-gray-300 rounded-md">
                                                <i class="pi pi-eye text-gray-600" style="font-size: 12px;"></i>
                                            </button>

                                            <button type="button" @click="openDialog(slotProps.data)" class="flex items-center gap-2 hover:bg-gray-300 rounded-md">
                                                <i class="pi pi-pencil text-gray-600" style="font-size: 12px;"></i>
                                            </button>

                                            <button type="button" @click="onAction('delete', slotProps.data.id)" class="flex items-center gap-2 hover:bg-gray-300 rounded-md">
                                                <i class="pi pi-trash text-gray-600" style="font-size: 12px;"></i>
                                            </button>
                                        </div>
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dialog สำหรับเพิ่มโปรเจกต์ -->
        <div class="card flex justify-center">
            <Dialog v-model:visible="visible" modal header="Add or Edit Project" :style="{ width: '30rem' }">
                <div class="flex flex-col gap-4 mb-6">
                    <!-- ฟิลด์สำหรับ Project Name -->
                    <div class="flex flex-col gap-1">
                        <label for="projectname" class="font-semibold">Project Name</label>
                        <InputText v-model="selectedProject.name" class="w-full" placeholder="Enter project name" required />
                    </div>

                    <!-- ฟิลด์สำหรับ Project Details -->
                    <div class="flex flex-col gap-1">
                        <label for="projectdetails" class="font-semibold">Project Details</label>
                        <InputText v-model="selectedProject.details" class="w-full" placeholder="Enter project details" required />
                    </div>
                </div>

                <!-- ปุ่มใน Dialog -->
                <div class="flex justify-end gap-2">
                    <Button type="button" label="Cancel" severity="secondary" @click="closeDialog"></Button>
                    <Button type="button" label="Save" severity="info" @click="addOrEditProject"></Button>
                </div>
            </Dialog>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from "vue";
import axios from "axios";
import NavbarComponent from "@/components/NavbarComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import config from "@/config";
const router = useRouter();
const { apiBaseAPIUrl } = config;
const loading = ref(false);

// State
const projects = ref([]);
const selectedProject = ref({ id: null, name: "", details: "" });
const selectedProjectId = ref(null);

const visible = ref(false);

// Fetch projects on component mount
onMounted(async () => {
    await fetchProjects();
});

// Fetch all projects
const fetchProjects = async () => {
    loading.value = true;
    try {
        const response = await axios.get(`${apiBaseAPIUrl}Projects`);
        if (response.data.success) {
            projects.value = response.data.data;
        } else {
            console.error(response.data.message || "Failed to fetch projects.");
        }
    } catch (error) {
        console.error("Error fetching projects:", error);
    } finally {
        loading.value = false;
    }
};

// const addOrEditProject = async () => {
//     try {
//         // เพิ่มข้อมูล createBy และ updateBy ก่อน
//         const projectData = { 
//             ...selectedProject.value,
//             createBy: selectedProject.value.createBy || "admin",  // ถ้าไม่มี createBy ให้ใช้ค่า "admin"
//             updateBy: selectedProject.value.updateBy || "admin",   // ถ้าไม่มี updateBy ให้ใช้ค่า "admin"
//         };

//         // ลบ id ออกเมื่อเป็นการเพิ่มโปรเจกต์ใหม่
//         if (!selectedProject.value.id) {
//             delete projectData.id;  // ลบ id หากเป็นการเพิ่มใหม่
//         }

//         let response;

//         if (selectedProject.value.id) {
//             // PUT: Update existing project
//             response = await axios.put(`${apiBaseAPIUrl}Projects/${selectedProject.value.id}`, projectData);
//             if (response.data.success) {
//                 const index = projects.value.findIndex(project => project.id === selectedProject.value.id);
//                 if (index !== -1) {
//                     projects.value[index] = { ...response.data.data };
//                 }
//                 alert("Project updated successfully");
//             }
//         } else {
//             // POST: Add new project
//             response = await axios.post(`${apiBaseAPIUrl}Projects`, projectData); // ส่ง projectData ที่ไม่มี id
//             if (response.data.success) {
//                 projects.value.push(response.data.data);
//                 alert("Project added successfully");
//             }
//         }

//         closeDialog();
//     } catch (error) {
//         console.error("Error adding or updating project:", error);
//         alert("An error occurred while adding or updating the project");
//     }
// };
const addOrEditProject = async () => {
    try {
        const email = localStorage.getItem('userEmail'); // ดึง Email จาก LocalStorage
        if (!email) {
            alert("No email found. Please log in again.");
            router.push({ name: 'Login' });
            return;
        }

        // สร้างข้อมูลโปรเจกต์พร้อม createBy และ updateBy
        const projectData = {
            ...selectedProject.value,
            createBy: selectedProject.value.createBy || email, // ใช้ email แทน admin
            updateBy: email, // ใช้ email แทน admin
        };

        // ลบ id ออกเมื่อเป็นการเพิ่มโปรเจกต์ใหม่
        if (!selectedProject.value.id) {
            delete projectData.id; // ลบ id หากเป็นการเพิ่มใหม่
        }

        let response;

        if (selectedProject.value.id) {
            // PUT: Update existing project
            response = await axios.put(`${apiBaseAPIUrl}Projects/${selectedProject.value.id}`, projectData);
            if (response.data.success) {
                const index = projects.value.findIndex(project => project.id === selectedProject.value.id);
                if (index !== -1) {
                    projects.value[index] = { ...response.data.data };
                }
                alert("Project updated successfully");
            }
        } else {
            // POST: Add new project
            response = await axios.post(`${apiBaseAPIUrl}Projects`, projectData);
            if (response.data.success) {
                projects.value.push(response.data.data);
                alert("Project added successfully");
            }
        }

        closeDialog();
    } catch (error) {
        console.error("Error adding or updating project:", error);
        alert("An error occurred while adding or updating the project");
    }
};

const openDialog = (project = { id: null, name: "", details: "" }) => {
    selectedProject.value = { ...project }; // รีเซตข้อมูลสำหรับ New Project หรือแก้ไข
    selectedProjectId.value = project.id;
    visible.value = true; // เปิด Dialog
};

// Close Dialog
const closeDialog = () => {
    selectedProject.value = { id: null, name: "", details: "" }; // รีเซตข้อมูล
    visible.value = false; // ปิด Dialog
};

// Handle actions (view, edit, delete)
const onAction = async (action, projectId) => {
    if (action === "view") {
        router.push({ name: 'ProjectID', params: { id: projectId } });
    } else if (action === "edit") {
        const project = projects.value.find(p => p.id === projectId);
        openDialog(project);
    } else if (action === "delete") {
        if (confirm("Are you sure you want to delete this project?")) {
            try {
                await axios.delete(`${apiBaseAPIUrl}Projects/${projectId}`);
                projects.value = projects.value.filter(p => p.id !== projectId);
                alert("Project deleted successfully");
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("An error occurred while deleting the project");
            }
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
