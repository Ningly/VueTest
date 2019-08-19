<template>
  <div>
    <h2>这是Account组件</h2>
    <router-link to="/account/login">login</router-link>
    <router-link to="/account/register">register</router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped lang='scss'>
body {
  div {
    font-style: italic;
  }
}
</style>
<script>
export default {};
</script>