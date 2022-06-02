<template>
  <section>
    <Editor
      @iptValue="$emit('iptValue', $event)"
      v-for="item in editors"
      :key="item.id"
      :item="item"
      :obj1="obj1"
      :obj2="obj2"
    />
    <button class="submit-btn">제출하기</button>
  </section>
</template>

<script>
import { Editor } from "@/components";

export default {
  name: `Home`,
  props: {
    editors: Array,
    obj1: String,
    obj2: String,
  },
  components: { Editor },
};
</script>

<style></style>
