<template>
  <svg
    class="svgClass"
    aria-hidden="true"
    :style="{ fontSize: size + 'px', color: color }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
import { computed } from "vue";
export default {
  name: "svgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,0.6)'
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.icon}`;
    });
    return {
      iconName,
    };
  },
};
</script>
<style>
.svgClass {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  outline: 0;
}
</style>
