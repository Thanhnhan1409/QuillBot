<script setup lang="ts">

</script>

<template>
    <div :class="$style.premiumBenifitsContainer">
        <div :class="$style.premiumBenifitsIconBox">
            <Icon :class="$style.premiumBenifitsIcon" icon="material-symbols:keyboard-arrow-down-rounded" />
        </div>
        <div>
            <div :class="$style.premiumBenifitsFlat">
                <div :class="$style.premiumBenifitsFlatTitle">
                    <span>Premium benefits</span>
                </div>
                <div>
                    <svg fill="inherit" viewBox="0 0 14 24" :class="$style.premiumBenifitsSvg">
                        <path fill="#008847"
                            d="M13.387 20.747c1.052 1.31.12 3.253-1.559 3.253H0V0h11.828c1.679 0 2.61 1.944 1.56 3.253l-6.022 7.495a2 2 0 0 0 0 2.505l6.021 7.494Z">
                        </path>
                    </svg>
                </div>
            </div>
            <h1 :class="$style.premiumBenifitsDescription">Cut your writing time by more than half<br>using QuillBot Premium</h1>
        </div>
        <div :class="$style.premiumBenifitsCardBox">
            <div :class="$style.premiumBenifitsCardItem">
                <span :class="$style.premiumBenifitsCardTitle">ACCELERATE</span>
                <img src="https://assets.quillbot.com/images/theme/light/paraphraser/unlimited-words.svg" alt="">
                <span :class="$style.premiumBenifitsCardBenefit">Improve your speed</span>
                <p :class="$style.premiumBenifitsCardDes">Paraphrase an unlimited number of words in one click, with a faster processing rate to get more done in less time.</p>
            </div>
            <div :class="$style.premiumBenifitsCardItem">
                <span :class="$style.premiumBenifitsCardTitle">CREATE</span>
                <img src="https://assets.quillbot.com/images/theme/light/paraphraser/unlimited-words.svg" alt="">
                <span :class="$style.premiumBenifitsCardBenefit">Increase changes</span>
                <p :class="$style.premiumBenifitsCardDes">Paraphrase an unlimited number of words in one click, with a faster processing rate to get more done in less time.</p>
            </div>
            <div :class="$style.premiumBenifitsCardItem">
                <span :class="$style.premiumBenifitsCardTitle">ACCELERATE</span>
                <img src="https://assets.quillbot.com/images/theme/light/paraphraser/unlimited-words.svg" alt="">
                <span :class="$style.premiumBenifitsCardBenefit">Improve your speed</span>
                <p :class="$style.premiumBenifitsCardDes">Paraphrase an unlimited number of words in one click, with a faster processing rate to get more done in less time.</p>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">

.premiumBenifitsContainer {
    background-color: #ffff;
    text-align: center;
    padding: 0 10%;
}

.premiumBenifitsFlat {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.premiumBenifitsFlatTitle {
    background-color: #008847;
    border-radius: 2px 0px 0px 2px;
    height: 24px;
    padding: 2px 8px;

    span {
        color: #ffff;
        font-size: 12px;
    }
}

.premiumBenifitsIconBox {
    height: 64px;
    padding: 0 0 24px;
}

.premiumBenifitsIcon {
    height: 24px;
    width: 24px;
}

.premiumBenifitsSvg {
    color: #008847;
    font-size: 24px;
    height: 24px;
}

.premiumBenifitsDescription {
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    text-align: center;
    padding-top: 20px;
    color: #172b4d;
    padding-bottom: 72px;
}

.premiumBenifitsCardBox {
    display: flex;
    padding-bottom: 80px;
    border-bottom: 1px solid #C1C1C1;
}

.premiumBenifitsCardItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.premiumBenifitsCardTitle {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding-left: 12px;
    margin-bottom: 16px;
    color: #008847;
}

.premiumBenifitsCardBenefit {
    font-size: 20px;
    font-weight: 550;
    line-height: 28px;
    padding-left: 12px;
    padding-bottom: 12px;
    color: #172b4d;
}

.premiumBenifitsCardDes {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-left: 12px;
    color: #2c3e5d;
    text-align: start;
}
</style>