<template>
  <section class="container">
    <h3 class="title">Result</h3>
    <ul class="editors">
      <li class="editor">
        <div>{{ prevData }}</div>
      </li>
      <li class="editor">
        <div>{{ currentData }}</div>
      </li>
    </ul>
    <button class="submit-btn" @click="$router.push('/home')">돌아가기</button>
  </section>
</template>

<script>
export default {
  name: `Diff`,
  props: {
    prevData: String,
    currentData: String,
  },
};
</script>

<style>
.container {
  padding: 1.5rem 1.5rem;
}
</style>
