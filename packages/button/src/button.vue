<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from '@uiku/shared';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'World',
  },
);

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button class="test-class" @click="clickHandler">
    <slot />
  </button>
</template>
<style lang="scss">
.test-class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #e9ecef;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
</style>
