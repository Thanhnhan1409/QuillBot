<script setup lang="ts">
// import { Icon } from '@iconify/vue';

defineProps<{
    isExpand: boolean
}>()
const menuList = [
    {
        id: 1,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/paraphraser-new.svg',
        color: 'rgb(73, 149, 87)',
        title: 'Paraphraser'
    },
    {
        id: 2,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/grammar-checker-new.svg',
        color: 'rgb(239, 65, 76)',
        title: 'Grammar Checker'
    },
    {
        id: 3,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/plag-checker-new.svg',
        color: 'rgb(242, 124, 14)',
        title: 'Plagiarism Checker'
    },
    {
        id: 4,
        icon: '	https://assets.quillbot.com/images/theme/commonImages/co-writer-new.svg',
        color: 'rgb(49, 157, 255)',
        title: 'QuillBot Flow'
    },
    {
        id: 5,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/summarizer-new.svg',
        color: 'rgb(128, 81, 255)',
        title: 'Summerizer'
    },
    {
        id: 6,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/citation-generator-logo.svg',
        color: 'rgb(0, 103, 197)',
        title: 'Citation Generator'
    },
    {
        id: 7,
        icon: 'https://assets.quillbot.com/images/theme/light/translator/translator_icon.svg',
        color: 'rgba(0, 0, 0, 0.87)',
        title: 'Translator'
    }
]
const menuToolList = [
    {
        id: 1,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/chrome.png',
        title: 'QuillBot for Chrome'
    },
    {
        id: 2,
        icon: 'https://assets.quillbot.com/emojis/solid_msword.svg',
        title: 'QuillBot for Word'
    },
    {
        id: 3,
        icon: 'https://assets.quillbot.com/emojis/mac_new.svg',
        title: 'QuillBot for macOs'
    }
]
const activeItem = ref<number>(1)
const hoverExpand = ref<boolean>(false)

function handleActiveItem(id: number) {
    activeItem.value = id
}
defineEmits<{
    (e: "toggleSidebar"): void
}>()
</script>

<template>
    <div :class="$style.sidebarContainer" @click="$emit('toggleSidebar')" @mouseover="hoverExpand = true" @mouseleave="hoverExpand = false">
        <div :class="[$style.sidebarItemBorder, $style.sidebarItemBox]">
            <div v-for="item in menuList" :key="item.id" @click="handleActiveItem(item.id)">
                <div :class="$style.sidebarItem">
                    <div :style="{ backgroundColor: item.color }"
                        :class="[$style.sidebarBorderItem, activeItem === item.id && $style.sidebarActiveItem]" />
                    <div v-if="item.id < 6" :class="$style.sidebarItemIconBox" :style="{ backgroundColor: item.color }">
                        <img :src="item.icon" alt="" width="20" height="20">
                    </div>
                    <img v-else :src="item.icon" alt="" width="24" height="24">
                    <p v-show="hoverExpand || isExpand" :class="$style.sidebarItemTitle">{{ item.title }}</p>
                </div>
            </div>
        </div>
        <div :class="[$style.sidebarItemBorder, $style.sidebarPemiumItem]">
            <div :class="$style.sidebarItem">
                <div :class="$style.sidebarBorderItem" />
                <Icon :class="$style.sidebarItemIcon" icon="mdi-light:diamond" />
                <p v-show="hoverExpand || isExpand" :class="[$style.sidebarItemTitle, $style.sidebarItemPremium]">QuillBot Premium</p>
            </div>
        </div>
        <div :class="[$style.sidebarItemBorder, $style.sidebarItemBox]">
            <div v-for="item in menuToolList" :key="item.id">
                <div :class="$style.sidebarItem">
                    <div :class="$style.sidebarBorderItem" />
                    <img :src="item.icon" alt="" width="24" height="24">
                    <p v-show="hoverExpand || isExpand" :class="$style.sidebarItemTitle">{{ item.title }}</p>
                    <Icon v-show="hoverExpand || isExpand" :class="$style.sidebarItemBoxIcon" icon="material-symbols:ungroup" />
                </div>
            </div>
        </div>
        <div>
            <div :class="$style.sidebarItem">
                <div :class="$style.sidebarBorderItem" />
                <Icon :class="$style.sidebarItemIcon" icon="ic:outline-help-outline" />
                <p v-show="hoverExpand || isExpand" :class="$style.sidebarItemTitle">Help Center</p>
            </div>
            <div :class="$style.sidebarItem">
                <div :class="$style.sidebarBorderItem" />
                <Icon :class="$style.sidebarItemIcon" icon="material-symbols:mail-outline" />
                <p v-show="hoverExpand || isExpand" :class="$style.sidebarItemTitle">Contact us</p>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
.sidebarContainer {
    position: fixed;
    top: 50px;
    left: 0px;
    height: 100vh;
    width: fit-content;
    border-right: 1px solid #DEE1E3;    
    transition: all 0.3s ease 0.5s;
    overflow: hidden;
}

.sidebarBorderItem {
    opacity: 0;
    position: relative;
    height: 24px;
    left: 0;
    width: 4px;
    border-radius: 0px 4px 4px 0px;

    &.sidebarActiveItem {
        opacity: 1;
    }
}

.sidebarItemBox {
    padding: 8px 0;
}

.sidebarItem {
    display: flex;
    align-items: center;
    padding: 8px 13px 8px 0;
    gap: 8px;
    height: 40px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
}

.sidebarItemIconBox {
    border-radius: 50%;
    overflow: hidden;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-items: center;

    img {
        object-fit: contain;
        margin: auto;
        width: 14px;
        height: 14px;
    }
}

.sidebarItemIcon {
    object-fit: contain;
    margin: auto;
    width: 24px;
    height: 24px;
    margin: 0;
}


.sidebarPemiumItem {
    padding: 4px 0;

    &:hover {
        background-color: #f5f5f5;
    }
}

.sidebarItemTitle {
    font-size: 13px;
    width: 65%;
}

.sidebarItemBorder {
    border-bottom: 1px solid #DEE1E3;
}

.sidebarItemBoxIcon {
    width: 16px;
    height: 16px;
}

.sidebarItemPremium {
    color: rgb(220, 158, 0);
}
</style>