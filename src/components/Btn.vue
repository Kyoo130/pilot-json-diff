<template>
  <button class="submit-btn">{{ btnName }}</button>
</template>

<script>
export default {
  name: `Btn`,
  props: {
    btnName: String,
  }
};
</script>

<style>
.submit-btn {
  display: block;
  width: 25%;
  border: none;
  border-radius: 5px;
  background: #bdbdbd;
  padding: 0.5rem 0;
  margin: 0 auto;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  transition: 400ms;
  cursor: pointer;
}

.submit-btn:hover {
  background: #ff6372;
  color: #fff;
}
</style>
