<template>
  <div class="editor container">
    <h3 class="title">{{ item.name }}</h3>
    <textarea rows="15"/>
  </div>
</template>

<script>
export default {
  name: `Editor`,
  props: {
    item: Object,
  }
}
</script>

<style>
.editor {
  width: 50%;
  float: left;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-align: center;
}

.editor > textarea {
  width: 100%;
  border: #C1C1C1 1px solid;
  border-radius: 5px;
  outline-color: #ff6372;
  resize: none;
}

</style>