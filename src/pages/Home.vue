<template>
  <section>
    <p class="notification">현재 JSON Data는 수정할 수 없습니다.</p>

    <ul class="editors">
      <li class="editor">
        <h3 class="title">JSON1</h3>
        <textarea
          class="text-cont"
          rows="25"
          @input="$emit('prevObj', $event.target.value)"
          readonly
        />
      </li>

      <li class="editor">
        <h3 class="title">JSON2</h3>
        <textarea
          class="text-cont"
          rows="25"
          @input="$emit('currentObj', $event.target.value)"
          readonly
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
    json1: Object,
    json2: Object,
  },
  methods: {},
  components: {},
};
</script>

<style>
.notification {
  background: #eee;
  margin: 1.5rem 1.5rem;
  padding: 1rem 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  color: #ff6372;
}

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
