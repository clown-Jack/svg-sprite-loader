<template>
  <div>
    <iconList></iconList>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import iconList from "@/view/icon/index.vue";
// console.log(iconList);
export default defineComponent({
  name: "App",
  components: {
    iconList
  },
  setup() {
    return {}
  }
});
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
