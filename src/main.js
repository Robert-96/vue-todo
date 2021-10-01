import { createApp } from 'vue'
import { filters } from './base.js'
import App from './App.vue'

// mount
const vm = createApp(App).mount('#app')

// handle routing
function onHashChange() {
  const visibility = window.location.hash.replace(/#\/?/, "");
  if (filters[visibility]) {
    vm.visibility = visibility;
  } else {
    window.location.hash = "";
    vm.visibility = "all";
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();