<template>
  <div>
  <NavOrchid/>
  <router-view></router-view>
  <FooterOrchid/>
  </div>
</template>

<script>
import NavOrchid from '@/components/NavOrchid.vue'
import FooterOrchid from '@/components/FooterOrchid.vue'
export default {
  components: {NavOrchid, FooterOrchid},
  
}
</script>

<style>
::-webkit-scrollbar {
    width: 0;
}
*{
    margin: 0;
    padding: 0;
}
</style>