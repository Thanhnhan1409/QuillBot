<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { openaiApi } from '@/api/openai'

const isExpand = ref<boolean>(false)
const icon = ref<string>('fluent:navigation-20-filled')
const text = ref<string>('')
const result = ref<string>('')

function toggleSidebar() {
  isExpand.value = !isExpand.value
}
function changeIcon() {
  if (!isExpand.value)
    icon.value = 'ic:round-keyboard-double-arrow-right'
  else icon.value = 'tabler:chevrons-left'
}
async function parapharseText() {
  try {
    const res = await openaiApi.getParaphraseTextFull(text.value)
    result.value = res
  }
  catch (error) {

  }
}
</script>

<template>
  <div>
    <SidebarAuth :class="$style.homeSidebar"/>
    <!-- <div :class="$style.box">
      <input v-model="text" type="text">
      <button @click="parapharseText">
        Click me
      </button>
      <input v-model="result" type="text">
    </div> -->
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

.box {
  margin-left: 100px;
}
</style>
