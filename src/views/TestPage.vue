<template>
  <div class="p-6 bg-white">
 <h>{{ namepage }}</h>

    <Navbar
    :home="home"
    :items="breadcrumbItems"
    title="Test Page"
  />

  </div>
</template>

<script>
// import Breadcrumb from 'primevue/breadcrumb';
import Navbar from '@/components/Navbar.vue';
import { String } from 'core-js';
// import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    // Sidebar,
    Navbar,
    // Breadcrumb
  },
  name: 'TestPage',
  props:{
    namepage: String
  },
  data() {
    return {
      home: {
        icon: 'pi pi-home',
        route: '/dashboard',
      },
      breadcrumbItems: JSON.parse(
  JSON.stringify([
    { label: 'Home', route: '/dashboard' },
    { label: 'Test Page' },
  ])
),

    };
    },
    mounted() {
      console.log('NamePage', this.namepage)
  console.log("Breadcrumb Items:", this.breadcrumbItems);
}
};
</script>