  <template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <div class="flex">
      <div class="w-64">
        <Sidebar />
      </div>
      <div class="flex-1">
        <div>
          <Navbar />
        </div>
        <div>
          <!-- เนื้อหา -->
        </div>
      </div>
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
