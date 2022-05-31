<template>
  <div id="app">
    <Header/>
    <main class="main">
      <Editor v-for="item in editors" :key="item.id" :item = 'item' />
      <button class="submit-btn">비교하기</button>
    </main>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import {Header, Editor} from "@/components";

export default {
  name: 'App',
  data() {
    return {
      editors: [
        {id: 0, name: 'Prev'},
        {id: 1, name: 'Current'}
      ],
    }
  },
  components: {Editor, Header}
}
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
  background: #FF6372;
  color: #fff;
}
</style>
