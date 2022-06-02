<template>
  <section class="container">
    <h3 class="title">Result</h3>
    <div>
      <code-diff v-if="result === false" :old-string="obj1" :new-string="obj2" :context="10" />
      <p class="message" v-else>JSON 의 비교 결과에 다른 값이 없습니다.</p>
    </div>
    <Btn btnName="다시 검사하기" path="/"/>
  </section>
</template>

<script>
import { Btn } from "@/components";
import CodeDiff from "vue-code-diff";

export default {
  name: `Detail`,
  props: {
    obj1: String,
    obj2: String,
    result: Boolean,
  },
  components: {
    Btn,
    CodeDiff,
  },
};
</script>

<style>
.container {
  padding: 1.5rem 1.5rem;
}



</style>
