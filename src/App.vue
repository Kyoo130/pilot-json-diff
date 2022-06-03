<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view
        :json1="json1"
        :json2="json2"
        :resultJson="resultJson"
        @prevObj="json1 = $event"
        @currentObj="json2 = $event"
        @compareData="compareData(json1, json2)"
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
      resultJson: [],
    };
  },
  methods: {
    compareData(o1, o2) {
      Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) {
          return diff;
        }
        return (this.resultJson = [
          {
            // ...o1,
            ...diff,
            [key]: o1[key],
          },
          {
            ...diff,
            [key]: o2[key],
          },
        ]);
      }, {});
      this.$router.push("diff");
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
