import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App)
app.use(vuetify)
app.mount('#app')

export default createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })