<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view
        @prevObj="obj1 = $event"
        @currentObj="obj2 = $event"
        :obj1="obj1"
        :obj2="obj2"
        :editors="editors"
      />
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
      obj1: ``,
      obj2: ``,
    };
  },
  methods: {
    jsonDiff() {
      let isDiff = JSON.stringify(this.obj1) === JSON.stringify(this.obj2);
      console.log(isDiff);
    },
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

.submit-btn {
  display: block;
  width: 25%;
  border: none;
  border-radius: 5px;
  background: #bdbdbd;
  padding: 0.5rem 0;
  margin: 0 auto;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  transition: 400ms;
  cursor: pointer;
}

.submit-btn:hover {
  background: #ff6372;
  color: #fff;
}
</style>
