<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view
        @prevObj="json1 = $event"
        @currentObj="json2 = $event"
        @compareData="compareData"
        @diffJson="jsonDiff(json1, json2)"
        :prevData="json1"
        :currentData="json2"
        :resultData="resultData"
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
      json1: { name: "hello", age: 20 },
      json2: { name: "world", age: 20 },
      resultData: {},
    };
  },
  methods: {
    compareData() {
      // this.resultData = this.prevData;
      this.$router.push("diff");
    },
    jsonDiff(o1, o2) {
      Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) {
          return this.resultData = diff;
        }
        return {
          // ...diff,
          ...o1,
          [key]: o2[key] + ` #값이 다름`,
        };
      }, {});
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
