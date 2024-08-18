import { createApp } from 'vue'
import App from './AppW21.vue'
import router from './router'
import store from './store'
import components from './components/UI/index'
import directives from './directives/index'
//import plugins from './plugins/index.js'


const app = createApp(App);

components.ui.forEach(component => {
    app.component(component.name, component);
});
directives.v.forEach(directive => {
    app.directive(directive.name, directive);
});

app.use(store);
app.use(router);
//app.use(plugins);

app.mount('#app');
