<template>
  <section class="container">
    <h2 class="title">Compare Result</h2>
    <ul class="results">
      <li class="result">
        <p class="prev">{{ resultJson[0] }}</p>
      </li>
      <li class="result">
        <p class="current">{{ resultJson[1] }}</p>
      </li>
    </ul>

    <ul class="editors">
      <li class="editor">
        <h3 class="sub-title">JSON1</h3>
        <textarea
            class="text-cont"
            rows="15"
            :value="JSON.stringify(json1)"
            @input="$emit('prevObj', $event.target.value)"
            readonly
        />
      </li>
      <li class="editor">
        <h3 class="sub-title">JSON2</h3>
        <textarea
            class="text-cont"
            rows="15"
            :value="JSON.stringify(json2)"
            @input="$emit('currentObj', $event.target.value)"
            readonly
        />
      </li>
    </ul>
    <button class="submit-btn" @click="$router.push('/')">돌아가기</button>
  </section>
</template>

<script>
export default {
  name: `Diff`,
  props: {
    json1: Object,
    json2: Object,
    resultJson: Array,
    currentResult: Object,
  },
  methods: {},
};
</script>

<style>
.results {
  display: flow-root;
  margin: 0 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #bdbdbd;
}

.result {
  width: 50%;
  float: left;
}

.sub-title {
  font-size: 0.9rem;
  margin: 1rem 0;
  text-align: center;
}

.prev,
.current {
  padding-left: 0.5rem;
}

.prev {
  background-color: rgba(255, 99, 114, 0.4);
  margin: 1rem 1.5rem 1.5rem 0;
}

.current {
  background-color: rgba(86, 196, 139, 0.4);
  margin: 1rem 0 1.5rem 1.5rem;
}
</style>
