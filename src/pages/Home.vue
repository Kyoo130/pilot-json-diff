<template>
  <section>
    <ul class="editors">
      <li class="editor">
        <h3 class="title">JSON1</h3>
        <textarea rows="25" @input="$emit('prevObj', $event.target.value)" />
      </li>

      <li class="editor">
        <h3 class="title">JSON2</h3>
        <textarea rows="25" @input="$emit('currentObj', $event.target.value)" />
      </li>
    </ul>
    <button class="submit-btn" @click="$emit('compareData')">검사하기</button>
  </section>
</template>

<script>
export default {
  name: `Home`,
  props: {
    prevData: Object,
    currentData: Object,
    resultData: Object,
  },
  methods: {},
  components: {},
};
</script>

<style>
.editors {
  display: flow-root;
  margin-bottom: 1rem;
}

.editor {
  width: 50%;
  float: left;
  padding: 1.5rem 1.5rem;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-align: center;
}

.editor > textarea {
  width: 100%;
  border: #c1c1c1 1px solid;
  border-radius: 5px;
  outline-color: #ff6372;
  resize: none;
}
</style>

