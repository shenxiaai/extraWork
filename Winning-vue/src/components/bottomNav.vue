<template>
  <div class="bottomNav">
        <router-link to="/" class="navItem active">拆红包</router-link>
        <router-link to="/" class="navItem">记录</router-link>
        <router-link to="/" class="navItem">个人中心</router-link>
        <router-link to="/" class="navItem">代理挣钱</router-link>
        <router-link to="/" class="navItem">客服</router-link>
  </div>
</template>

<script>
export default {
  name: 'bottomNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottomNav{position: fixed;left: 0;bottom: 0;display: -webkit-box;-webkit-box-align: center;background: #28282a;width: 100%;height: 4.9rem;line-height: 4.9rem;}
    .bottomNav .navItem{display: block;-webkit-box-flex: 1;height: 4.9rem;line-height: 4.9rem;text-align: center;color: #fff;font-size: 1.3rem;}
    .bottomNav .navItem.active{background: #4c4c4c;}
</style>
