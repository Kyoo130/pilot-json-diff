<template>
  <section>
    <ul class="editors">
      <li class="editor">
        <h3 class="title">Prev</h3>
        <textarea rows="15" @input="$emit('prevObj', $event.target.value)" />
      </li>

      <li class="editor">
        <h3 class="title">Current</h3>
        <textarea rows="15" @input="$emit('currentObj', $event.target.value)" />
      </li>
    </ul>

    <div class="diff">
      <code-diff :old-string="obj1" :new-string="obj2" :context="10" />
    </div>
  </section>
</template>

<script>
import CodeDiff from "vue-code-diff";

export default {
  name: `Main`,
  props: {
    obj1: String,
    obj2: String,
    result: Boolean,
  },
  components: { CodeDiff },
};
</script>

<style>
.editors {
  display: flow-root;
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

.diff {
  padding: 1rem 1.5rem;
}

</style>
