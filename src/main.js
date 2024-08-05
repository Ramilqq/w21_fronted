import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI/index'
import directives from './directives/index'

const app = createApp(App);

components.ui.forEach(component => {
    app.component(component.name, component);
});
directives.v.forEach(directive => {
    app.directive(directive.name, directive);
});


app.use(store);
app.use(router);

app.mount('#app');
