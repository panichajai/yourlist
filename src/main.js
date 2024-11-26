import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker'

// import 'primevue/resources/primevue.min.css'
// import '@primevue/themes/aura/theme.css';

import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(ToastService)
app.use(Breadcrumb);
app.component('DatePicker', DatePicker);
app.mount('#app')