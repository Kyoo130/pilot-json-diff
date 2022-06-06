<template>
  <section class="container">
    <h2 class="title">Compare Result</h2>
    <ul class="results">
      <li class="result">
        <h3 class="sub-title">JSON1</h3>
        <p class="prev">{{ JSON.stringify(resultJson[0], null, 4) }}</p>
      </li>
      <li class="result">
        <h3 class="sub-title">JSON2</h3>
        <p class="current">{{ JSON.stringify(resultJson[1], null, 4) }}</p>
      </li>
    </ul>
    <button class="submit-btn" @click="$router.push('/')">돌아가기</button>
  </section>
</template>

<script>
export default {
  name: `Diff`,
  props: {
    resultJson: Array,
    getJsonFB: Function,
  },
  mounted() {
    this.getJsonFB();
  },
};
</script>

<style>

.container{
  margin-bottom: 2.5rem;
}

.results {
  display: flow-root;
  margin: 2rem 1.5rem;
}

.result {
  width: 50%;
  float: left;
  white-space: pre-wrap;
}

.sub-title {
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  text-align: center;
}

.prev,
.current {
  padding: 1rem 1.2rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

.prev {
  background-color: rgba(255, 99, 114, 0.4);
  margin-right: 1.5rem;
}

.current {
  background-color: rgba(86, 196, 139, 0.4);
  margin-left: 1.5rem;
}
</style>
