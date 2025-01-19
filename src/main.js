import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker'
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';

// import 'primevue/resources/primevue.min.css'
// import '@primevue/themes/aura/theme.css';

import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    locale: {
        accept: 'Yes',
        reject: 'No'
    }
})
app.use(ToastService)
app.use(Breadcrumb);
app.use(ConfirmationService);
app.component('ConfirmDialog', ConfirmDialog);
app.component('DatePicker', DatePicker);
app.mount('#app')