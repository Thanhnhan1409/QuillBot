<script setup lang="ts">

</script>

<template>
    <div :class="$style.tabRighContainer">
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="[$style.tabRightIcon, $style.tabRightIconPadding]"
                    icon="streamline:interface-time-rewind-back-return-clock-timer-countdown" />
                <svg :class="$style.tabRightDiamondIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ak090"
                    focusable="false" aria-hidden="true" viewBox="0 0 12 12" width="14" height="14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#499557" />
                    <rect x="2.18176" y="2.18182" width="7.63636" height="7.63636" rx="3.81818" fill="#499557" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.9503 3.0729C3.99481 3.00807 4.0684 2.96933 4.14704 2.96933H8.08874C8.16938 2.96933 8.24457 3.01006 8.28862 3.0776L9.24879 4.54977C9.30203 4.63141 9.30028 4.73722 9.24436 4.81705L6.36388 8.92897C6.3198 8.99189 6.24814 9.02974 6.17133 9.03068C6.09451 9.03161 6.02195 8.99551 5.97636 8.93368L2.94428 4.82176C2.88394 4.73994 2.88207 4.62888 2.93961 4.54507L3.9503 3.0729ZM4.14704 3.62959L4.70444 4.4415H3.58964L4.14704 3.62959ZM3.60881 4.91877L5.65157 7.68903L4.97065 4.91877H3.60881ZM5.61103 4.4415L6.16843 3.62959L6.72584 4.4415H5.61103ZM6.87474 4.91877L6.16843 7.7923L5.46213 4.91877H6.87474ZM6.7045 7.61088L7.36622 4.91877H8.59037L6.7045 7.61088ZM8.60836 4.4415H7.6071L8.09419 3.65315L8.60836 4.4415ZM7.66078 3.4466H6.62172L7.16861 4.24317L7.66078 3.4466ZM5.71513 3.4466H4.60033L5.15773 4.25851L5.71513 3.4466Z"
                        fill="white" />
                </svg>
            </div>
            <span :class="$style.tabRighItemTitle">History</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="[$style.tabRightIcon, $style.tabRightDisableItem]" icon="clarity:snowflake-line" />
                <!-- <svg :class="$style.tabRightDiamondIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ak090"
                    focusable="false" aria-hidden="true" viewBox="0 0 12 12" width="14" height="14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#499557" />
                    <rect x="2.18176" y="2.18182" width="7.63636" height="7.63636" rx="3.81818" fill="#499557" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.9503 3.0729C3.99481 3.00807 4.0684 2.96933 4.14704 2.96933H8.08874C8.16938 2.96933 8.24457 3.01006 8.28862 3.0776L9.24879 4.54977C9.30203 4.63141 9.30028 4.73722 9.24436 4.81705L6.36388 8.92897C6.3198 8.99189 6.24814 9.02974 6.17133 9.03068C6.09451 9.03161 6.02195 8.99551 5.97636 8.93368L2.94428 4.82176C2.88394 4.73994 2.88207 4.62888 2.93961 4.54507L3.9503 3.0729ZM4.14704 3.62959L4.70444 4.4415H3.58964L4.14704 3.62959ZM3.60881 4.91877L5.65157 7.68903L4.97065 4.91877H3.60881ZM5.61103 4.4415L6.16843 3.62959L6.72584 4.4415H5.61103ZM6.87474 4.91877L6.16843 7.7923L5.46213 4.91877H6.87474ZM6.7045 7.61088L7.36622 4.91877H8.59037L6.7045 7.61088ZM8.60836 4.4415H7.6071L8.09419 3.65315L8.60836 4.4415ZM7.66078 3.4466H6.62172L7.16861 4.24317L7.66078 3.4466ZM5.71513 3.4466H4.60033L5.15773 4.25851L5.71513 3.4466Z"
                        fill="white" />
                </svg> -->
            </div>
            <span :class="[$style.tabRighItemTitle, $style.tabRightDisableItem]">Freeze <br> Words</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="[$style.tabRightIcon, $style.tabRightDisableItem]" icon="ic:baseline-insert-chart-outlined" />
            </div>
            <span :class="[$style.tabRighItemTitle, $style.tabRightDisableItem]">Statistics</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="[$style.tabRightIcon, $style.tabRightIconPadding, $style.tabRightDisableItem]" icon="streamline:smiley-happy" />
                <!-- <svg :class="$style.tabRightDiamondIcon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ak090"
                    focusable="false" aria-hidden="true" viewBox="0 0 12 12" width="14" height="14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#499557" />
                    <rect x="2.18176" y="2.18182" width="7.63636" height="7.63636" rx="3.81818" fill="#499557" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.9503 3.0729C3.99481 3.00807 4.0684 2.96933 4.14704 2.96933H8.08874C8.16938 2.96933 8.24457 3.01006 8.28862 3.0776L9.24879 4.54977C9.30203 4.63141 9.30028 4.73722 9.24436 4.81705L6.36388 8.92897C6.3198 8.99189 6.24814 9.02974 6.17133 9.03068C6.09451 9.03161 6.02195 8.99551 5.97636 8.93368L2.94428 4.82176C2.88394 4.73994 2.88207 4.62888 2.93961 4.54507L3.9503 3.0729ZM4.14704 3.62959L4.70444 4.4415H3.58964L4.14704 3.62959ZM3.60881 4.91877L5.65157 7.68903L4.97065 4.91877H3.60881ZM5.61103 4.4415L6.16843 3.62959L6.72584 4.4415H5.61103ZM6.87474 4.91877L6.16843 7.7923L5.46213 4.91877H6.87474ZM6.7045 7.61088L7.36622 4.91877H8.59037L6.7045 7.61088ZM8.60836 4.4415H7.6071L8.09419 3.65315L8.60836 4.4415ZM7.66078 3.4466H6.62172L7.16861 4.24317L7.66078 3.4466ZM5.71513 3.4466H4.60033L5.15773 4.25851L5.71513 3.4466Z"
                        fill="white" />
                </svg> -->
            </div>
            <span :class="[$style.tabRighItemTitle, $style.tabRightDisableItem]">Tone</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="$style.tabRightIcon" icon="ant-design:setting-outlined" />
            </div>
            <span :class="$style.tabRighItemTitle">Statistics</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="$style.tabRightIcon" icon="mdi:message-reply-text-outline" />
            </div>
            <span :class="$style.tabRighItemTitle">Feedback</span>
        </div>
        <div :class="$style.tabRightItem">
            <div :class="$style.tabRightIconBox">
                <Icon :class="$style.tabRightIcon" icon="ic:baseline-keyboard" />
            </div>
            <span :class="$style.tabRighItemTitle">Hotkeys</span>
        </div>
    </div>
</template>

<style module lang="scss">
.tabRighContainer {
    position: absolute;
    right: 15px;
    height: calc(100% - 22px);
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tabRightItem {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    cursor: pointer;
}

.tabRightDisableItem {
    opacity: 0.5;
}

.tabRightIconBox {
    position: relative;
    width: 36px;
    height: 36px;
    padding: 6px;
    color: #878A8D;
}

.tabRightIcon {
    width: 24px;
    height: 24px;
}

.tabRightIconPadding {
    padding: 2px;
}

.tabRightDiamondIcon {
    position: absolute;
    bottom: 4px;
    right: 3px;
}

.tabRighItemTitle {
    font-weight: 400;
    line-height: 1.5;
    color: #252525;
    font-size: 12px;
}
</style>
