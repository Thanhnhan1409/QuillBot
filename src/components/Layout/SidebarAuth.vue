<script setup lang="ts">
const menuList = [
    {
        id: 0,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/product/paraphraser-new.svg',
        color: 'rgba(73, 149, 87, 0.1)',
        title: 'Paraphraser'
    },
    {
        id: 1,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/product/grammar-checker-new.svg',
        color: '#EF414C1A',
        title: 'Grammar Checker'
    },
    {
        id: 2,
        icon: 'https://assets.quillbot.com/images/theme/light/commonImages/co-writer-new.svg',
        color: '#319DFF1A',
        title: 'QuillBot Flow'
    },
    {
        id: 3,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/product/plag-checker-new.svg',
        color: '#F27C0E1A',
        title: 'Plagiarism Checker'
    },
    {
        id: 4,
        icon: 'https://assets.quillbot.com/images/theme/light/aiDetector/ai-detector-new.svg',
        color: 'rgb(49, 157, 255)',
        title: 'AI Detector'
    },
    {
        id: 5,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/product/summarizer-new.svg',
        color: '#8051FF1A',
        title: 'Summerizer'
    },
    {
        id: 6,
        icon: 'https://assets.quillbot.com/images/theme/light/translator/translator_icondifferentiateCowriter_April2023.svg',
        color: 'rgb(0, 103, 197)',
        title: 'Translator'
    },
    {
        id: 7,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/product/citation-generator-new.svg',
        color: '#0067C51A',
        title: 'Citation Generator'
    }
]
const menuAppList = [
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
    },
    {
        id: 4,
        icon: 'https://assets.quillbot.com/images/theme/commonImages/edge.svg',
        title: 'QuillBot for Edge'
    },
]
const activeItem = ref<number>(1)

function handleActiveItem(id: number) {
    activeItem.value = id
}
</script>

<template>
    <div :class="$style.sidebarContainer">
        <div :class="[$style.sidebarItemBorder, $style.sidebarItemBox]">
            <div v-for="item in menuList" :key="item.id" @click="handleActiveItem(item.id)">
                <div :class="[$style.sidebarItem, activeItem === item.id && $style.sidebarActiveItem]">
                    <img v-if="item.id === 6 || item.id === 4" :src="item.icon" alt="" width="24" height="24">
                    <div v-else :class="$style.sidebarItemIconBox" :style="{ backgroundColor: item.color }">
                        <img :src="item.icon" alt="" width="20" height="20">
                    </div>
                    <p :class="$style.sidebarItemTitle" style="font-weight: 400">{{ item.title }}</p>
                </div>
            </div>
        </div>
        <div :class="[$style.sidebarItemBorder, $style.sidebarPemiumItem]">
            <div :class="$style.sidebarItem">
                <img src="https://assets.quillbot.com/images/theme/commonImages/product/premium-icn.svg" alt=""
                    width="24" height="24">
                <p :class="[$style.sidebarItemTitle]">QuillBot Premium</p>
            </div>
        </div>
        <div :class="$style.sidebarItemBorder">
            <div :class="[$style.sidebarItem, $style.sidebarGGItem]">
                <img src="https://assets.quillbot.com/images/theme/commonImages/chrome.png" alt="" width="24"
                    height="24">
                <p :class="[$style.sidebarItemTitle]">QuillBot for Chrome</p>
                <Icon :class="$style.sidebarItemGGIcon" icon="material-symbols:ungroup" />
            </div>
            <div :class="[$style.sidebarItem, $style.sidebarAppItem]">
                <img src="https://assets.quillbot.com/images/theme/light/commonImages/AppandExtensions.svg" alt=""
                    width="20" height="20">
                <p :class="[$style.sidebarItemTitle]">Apps & Extensions</p>
                <div :class="$style.sidebarAppMemu">
                    <div v-for="item in menuAppList" :key="item.id">
                        <div :class="$style.sidebarAppItem">
                            <img :src="item.icon" alt="" width="24" height="24">
                            <p :class="$style.sidebarItemTitle">{{ item.title }}</p>
                            <Icon :class="$style.sidebarItemBoxIcon" icon="material-symbols:ungroup" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
.sidebarContainer {
    position: fixed;
    top: 52px;
    left: 0px;
    height: 100vh;
    width: fit-content;
    border-right: 1px solid #DEE1E3;
    transition: all 0.3s ease 0.5s;
    overflow: auto;
    padding: 8px;
    width: 96px;
    background-color: #ffff;

    &::-webkit-scrollbar {
        display: none;
    }
}

.sidebarItemBox {
    padding-bottom: 8px;
}

.sidebarItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;
    border-radius: 8px;
    gap: 4px;
    cursor: pointer;

    &.sidebarActiveItem {
        background-color: #E8F3EB;

        &:hover {
            background-color: #E8F3EB;
        }

        &>p {
            font-weight: 500;
        }
    }

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
    align-items: center;
}


.sidebarPemiumItem {
    padding: 4px 0;

    &:hover {
        background-color: #f5f5f5;
    }
}

.sidebarItemTitle {
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    padding: 0 4px;
    letter-spacing: 0.5px;
}

.sidebarItemBorder {
    border-bottom: 1px solid #DEE1E3;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebarItemBoxIcon {
    width: 16px;
    height: 16px;
}

.sidebarItemPremium {
    color: rgb(220, 158, 0);
}

.sidebarGGItem {
    margin-top: 10px;
    position: relative;

    &>.sidebarItemGGIcon {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        bottom: 36px;
        right: 25px;
    }
}

.sidebarAppItem {
    margin: 10px 0;
    position: relative;

    &>.sidebarAppMemu {
        position: absolute;
        width: 400px;
        right: 0;
        z-index: 999;
    }
}

.sidebarAppItem {
    display: flex;

}
</style>