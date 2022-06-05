<template>
  <section>
    <h3 class="title">Not Found</h3>
    <p class="notification">접속한 경로가 잘못 되었습니다. URL 주소를 다시 한번 확인해 주세요.</p>
    <button class="submit-btn" @click="$router.push('/')">돌아가기</button>
  </section>
</template>

<script>
export default {
  name: `NotFound`,
};
</script>
