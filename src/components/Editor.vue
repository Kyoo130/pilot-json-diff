<template>
  <div class="editor container">
    <h3 class="title">{{ item.name }}</h3>
    <textarea
      rows="15"
      @input="
        $emit('iptValue', {
          value: $event.target.value,
          name: item.name,
        })
      "
    />
  </div>
</template>

<script>
export default {
  name: `Editor`,
  props: {
    item: Object,
  },
  methods: {},
};
</script>

<style>

</style>
