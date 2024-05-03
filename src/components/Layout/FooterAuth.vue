<script setup lang="ts">

</script>

<template>
    <div>
        <div :class="$style.footerSecondary">
            <div :class="$style.footerContent">
                <span :class="$style.footerContentItem">QuillBot, a Learneo, Inc. business</span>
                <div :class="[$style.footerContentItem, $style.footerContentLinkItem]">
                    <span>Privacy Policy</span>
                    <span>&#8226;</span>
                    <span>Terms of Service</span>
                    <span>&#8226;</span>
                    <span>Copyright, Community Guidelines, DSA and other Legal Resources</span>
                </div>
                <span :class="$style.footerContentItem">This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply</span>
            </div>
            <div :class="$style.footerVersionBox">
                <div :class="$style.footerAuthor">
                    <span>Made with</span>
                    <img src="https://assets.quillbot.com/emojis/solid_corn.svg" alt="">
                    <span>at</span>
                    <span :class="$style.footerLocation">UIUC</span>
                </div>
                <span :class="$style.footerVersion">v15.71.2</span>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
.footerSecondary {
    background-color: #e0e0e0;
    padding: 12px 68px 20px 68px;
    display: flex;
    justify-content: space-between;
}

.footerContent {
    display: flex;
    flex-direction: column;
}

.footerContentItem {
    display: inline-block;
    padding-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #252525;
    line-height: 24px;
}

.footerContentLinkItem {
    display: flex;
    gap: 6px;
    padding-bottom: 4px;
}

.footerAuthor {
    display: flex;
    align-items: end;
    gap: 6px;

    span {
        font-weight: 400;
        font-size: 14px;
    }
}

.footerLocation {
    text-decoration: underline;
}

.footerVersion {
    display: block;
    margin: 10px 5px 0 0;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
}
</style>