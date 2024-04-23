<script setup lang="ts">
import { Icon } from '@iconify/vue';

const isExpand = ref<boolean>(false)
const icon = ref<string>('fluent:navigation-20-filled')

function toggleSidebar() {
  isExpand.value = !isExpand.value
}
function changeIcon() {
  if (!isExpand.value) icon.value = 'ic:round-keyboard-double-arrow-right'
  else icon.value = 'tabler:chevrons-left'
}
</script>

<template>
  <div>
    <div @click="toggleSidebar" :class="$style.iconBox" @mouseover="changeIcon" @mouseleave="icon = 'fluent:navigation-20-filled'">
      <Icon :class="$style.temIcon" :icon="icon" />
    </div>
    <SidebarMenu :class="$style.homeSidebar" :is-expand="isExpand" @toggle-sidebar="toggleSidebar" />
  </div>
</template>

<style module lang="scss">
.iconBox {
  width: 24px;
  height: 24px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f3f3;
    border-radius: 50%;
  }
}

.temIcon {
  object-fit: contain;
  margin: auto;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>