  <template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <div class="flex flex-row">
      <div class="flex w-64">
        <Navbar />
      </div>
      <div class="flex">
          <Sidebar />
      </div>
    </div>
    

    <div>
      
    </div>
  </template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
    Navbar
  },
  name: "HomePage",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {
    
  },

};

</script>
