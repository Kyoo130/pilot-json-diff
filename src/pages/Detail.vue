<template>
  <section class="container">
    <h3 class="title">Result</h3>
    <div>결과 박스</div>
    <Btn btnName="돌아가기" />
  </section>
</template>

<script>
import { Btn } from "@/components";

export default {
  name: `Detail`,
  components: {
    Btn,
  },
};
</script>

<style>
.container {
  padding: 1.5rem 1.5rem;
}
</style>
