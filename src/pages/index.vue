<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { openaiApi } from '@/api/openai'

const isExpand = ref<boolean>(false)
const icon = ref<string>('fluent:navigation-20-filled')
const text = ref<string>('')
const result = ref<string>('')
const languageList = [
  'English (US)',
  'Chinese',
  'Hindi',
  'French',
  'All'
]
const activeItem = ref<number>(1)

function toggleSidebar() {
  isExpand.value = !isExpand.value
}

function changeIcon() {
  if (!isExpand.value)
    icon.value = 'ic:round-keyboard-double-arrow-right'
  else icon.value = 'tabler:chevrons-left'
}

function handleActiveItem(id: number) {
  activeItem.value = id
}

async function parapharseText() {
  try {
    const res = await openaiApi.getParaphraseTextFull(text.value)
    result.value = res
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <SidebarAuth :class="$style.homeSidebar" />
    <div :class="$style.homeContent">
      <div :class="$style.homeContentParaPhrase">
        <ul :class="$style.homeContentLanguageList">
          <li v-for="(item, index) in languageList" @click="handleActiveItem(index)"
            :class="activeItem === index && $style.homeLanguageActiveItem" :key="index">{{ item }}</li>
        </ul>
        <div :class="$style.homeTextAreaBox">
          <div :class="$style.homeTextAreaBoxHeader">
            <span :class="$style.homeTextAreaBoxHeaderTitle">Models:</span>
            <span :class="$style.homeTextAreaBoxHeaderValue">Standard</span>
          </div>
          <div :class="$style.homeTextArea">
            <div :class="$style.homeTextAreaLeftBox">
              <textarea name="" id="" cols="30" rows="25"
                placeholder='To rewrite text, enter or paste it here and press "Paraphrase."'></textarea>
              <div :class="$style.homeTextAreaLeftFooter">
                <div :class="$style.homeTextAreaLeftUpload">
                  <Icon :class="$style.homeIcon" icon="bi:cloud-arrow-up" />
                  <span>Upload Doc</span>
                </div>
                <button :class="$style.homeTextAreaLeftButton">Paraphrase</button>
              </div>
            </div>
            <div :class="$style.homeTextAreaRightBox">
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.homeGetPremium">
        <div :class="$style.homeGetPremiumContent">
          <p :class="$style.homeGetPremiumDescription">Whether you’re writing emails, essays, or social media posts,
            QuillBot has your back.</p>
          <div :class="$style.homeGetPremiumBtnBox">
            <button :class="$style.homeGetPremiumBtn">
              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv" focusable="false" aria-hidden="true"
                viewBox="0 0 16 15" style="width:18px;height:20px;margin-right:8px">
                <path
                  d="M8.05882 14L14.7647 4.42727M8.05882 14L1 4.42727M8.05882 14L5.70588 4.42727M8.05882 14L10.4118 4.42727M14.7647 4.42727L12.5294 1M14.7647 4.42727H1M12.5294 1L10.4118 4.42727M12.5294 1H8.05882M3.35294 1L1 4.42727M3.35294 1L5.70588 4.42727M3.35294 1H8.05882M5.70588 4.42727L8.05882 1M10.4118 4.42727L8.05882 1"
                  stroke="white" fill="white" stroke-width="0.8" stroke-linejoin="round" />
              </svg>
              <span>Get Premium</span>
            </button>
          </div>

          <div :class="$style.homeGetPremiumCountDate">
            <Icon :class="$style.homeIcon" icon="iconoir:thumbs-up" />
            <span>3-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
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

.homeContent {
  margin-left: 96px;
  margin-top: 52px;
  background-color: #f1f1f1;
  // height: 100vh;

  &::-webkit-scrollbar {
    width: 3px;
  }
}

.homeContentParaPhrase {
  padding: 25px 100px 44px 40px;

}

.homeContentLanguageList {
  display: flex;
  align-items: center;

  li {
    padding: 8px 16px;
    font-size: 14px;
    color: #505050;
    border-radius: 8px 8px 0px 0px;
    cursor: pointer;

    &.homeLanguageActiveItem {
      background-color: #ffff;

      &:hover {
        background-color: #25252514;
      }
    }

    &:hover {
      background-color: #25252514;
    }
  }
}

.homeTextAreaBox {
  box-shadow: 0px 4px 22px 0px #00000033;
}

.homeTextAreaBoxHeader {
  position: sticky;
  top: 49px;
  z-index: 10;
  line-height: 1.5;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #ffff;
  border-bottom: 1px solid #DEE1E3;
}

.homeTextAreaBoxHeaderTitle {
  color: #505050;
  padding: 13px 12px 12px 20px;
  font-weight: 700;
  font-size: 16px;
}

.homeTextAreaBoxHeaderValue {
  color: #499557;
  font-weight: 500;
  padding: 14px 9px 11px 9px;
  border-bottom: 2px solid #499557;
}

.homeTextArea {
  background-color: #ffff;
  display: flex;
  align-items: center;
}

.homeTextAreaLeftBox {
  width: 50%;
  border-right: 3px solid rgba(0, 0, 0, 0.2);

  textarea {
    resize: none;
    width: 100%;
    border: none;
    padding: 20px 36px 8px 20px;

    &::placeholder {
      line-height: 30px;
      font-size: 16px;
      color: #8B8B8B;
      font-weight: 300;
    }
  }
}

.homeTextAreaLeftFooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
}

.homeTextAreaLeftUpload {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #ffff;
  margin-right: 10px;
  height: 54px;
  padding-left: 15px;

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #252525;
  }
}

.homeIcon {
  width: 24px;
  height: 24px;
}

.homeTextAreaLeftButton {
  padding: 5px 25px 6px;
  font-size: 17.5px;
  font-weight: bold;
  width: 140px;
  min-height: 40px;
  background-color: #499557;
  color: #ffff;
  border: none;
  border-radius: 25px;
}

.homeGetPremium {
  background-color: #ffff;
  padding: 80px 0;
  text-align: center;
}

.homeGetPremiumContent {
  padding: 0 10%;
}

.homeGetPremiumDescription {
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  color: #172b4d;
  padding-bottom: 32px;
}

.homeGetPremiumBtnBox {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 16px;
}

.homeGetPremiumBtn {
  border: none;
  display: flex;
  align-items: center;
  border-radius: 32px;
  padding: 8px 20px;
  background-color: #008847;

  &>span {
    font-size: 16px;
    color: #ffff;
  }
}

.homeGetPremiumCountDate {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  &>span {
    font-weight: 600;
    line-height: 24px;
    color: #172b4d;
  }
}
</style>
