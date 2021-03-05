<template>
  <div class="container">
    <a-list :grid="{ gutter: 20, column: 6 }" :data-source="svgIconData">
      <template #renderItem="{ item }">
        <a-list-item>
          <div class="wrapper" @click="handleCopy(item,$event)">
            <svg-icon :icon="item" :size="30" class="disabled"/>
            <div style="margin-top:8px">{{ item }}</div>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script>
import svgIconData from "@/icons";
import { defineComponent } from "vue";
import { handleClipboard } from "@/utils/clipboard";
export default defineComponent({
  name: "icon",
  setup() {
    const handleCopy=(item,event)=>{
        console.log(item);
        console.log(event);
        handleClipboard(item,event)
    }
    return {
      svgIconData,
      handleCopy
    };
  },
});
</script>
<style>
.container {
  padding: 24px;
}
.wrapper {
  padding: 15px 0;
  text-align: center;
  cursor: pointer;
}
.wrapper:hover {
  background-color: #1890ff;
  color: #fff;
}
.disabled{
    pointer-events: none;
}
</style>
