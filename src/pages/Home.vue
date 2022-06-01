<template>
  <section>
    <Editor v-for="item in editors" :key="item.id" :item="item" />
    <Btn btnName="제출하기" />
  </section>
</template>

<script>
import { Editor } from "@/components";
import Btn from "@/components/Btn";

export default {
  name: `Home`,
  props: {
    editors: Array,
  },
  components: {Btn, Editor },
};
</script>

<style></style>
