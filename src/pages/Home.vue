<template>
  <section>
    <ul class="editors">
      <li class="editor">
        <h3 class="title">JSON1</h3>
        <textarea
          class="text-cont"
          rows="25"
          :value="prev"
          @input="$emit('prevObj', $event.target.value)"
        />
      </li>

      <li class="editor">
        <h3 class="title">JSON2</h3>
        <textarea
          class="text-cont"
          rows="25"
          :value="current"
          @input="$emit('currentObj', $event.target.value)"
        />
      </li>
    </ul>
    <button class="submit-btn" @click="$emit('addJsonFB')">비교하기</button>
  </section>
</template>

<script>
export default {
  name: `Home`,
  props: {
    prev: String,
    current: String,
  },
};
</script>

<style>
.editors {
  display: flow-root;
  margin: 2rem 0;
}

.editor {
  width: 50%;
  float: left;
  padding: 0 1.5rem;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
}

.text-cont {
  width: 100%;
  padding: 0 0.5rem;
  border: #c1c1c1 1px solid;
  border-radius: 5px;
  outline-color: #ff6372;
  resize: none;
}
</style>
