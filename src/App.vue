<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view :editors="editors" :obj1="obj1" :obj2="obj2" />
    </main>
  </div>
</template>

<script>
import "@/static/css/reset.css";
import { Header } from "@/components";

export default {
  name: "App",
  data() {
    return {
      editors: [
        { id: 0, name: "Prev" },
        { id: 1, name: "Current" },
      ],
      obj1: `{"name":"hello", "age":20}`,
      obj2: `{"name":"world", "age":20}`,
    };
  },
  methods: {
    jsonDiff() {
      let isDiff = JSON.stringify(this.obj1) === JSON.stringify(this.obj2);
      console.log(isDiff)
    }
  },
  components: { Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
}

.main {
  display: flow-root;
}

</style>
