<script setup lang="ts">

const data = [
    {
        title: "Writing Tools",
        content: [
            'Paraphrasing Tool',
            'Summarizer',
            'QuillBot Flow',
            'Plagiarism Checker',
            'Word Counter',
            'Translator',
            'Al Detector'
        ]
    },
    {
        title: "Free Grammar Tools",
        content: [
            'Grammar Checker',
            'Proofreader',
            'Spell Checker',
            'Punctuation Checker',
            'Essay Checker'
        ]
    },
    {
        title: "Extensions",
        content: [
            'Quill Bot for Chrome',
            'QuillBot for Word',
            'QuillBot for macOS'
        ]
    },
    {
        title: "Citation Tools",
        content: [
            'Citation Generator',
            'APA Citation Generator',
            'MLA Citation Generator'
        ]
    },
    {
        title: "Services",
        content: [
            'Premium',
            'Team Plan',
            'Affiliate',
            'Request a Demo'
        ]
    },
    {
        title: "Knowledge Base",
        content: [
            'QuillBot University',
            'Paraphrasing Guide',
            'Al Writing Assistant',
            'QuillBot Blog',
            'Meaning.io'
        ]
    },
    {
        title: "Student Resources",
        content: [
            'Tools & Videos',
            'Educational Courses'
        ]
    },
    {
        title: "Company",
        content: [
            'Team',
            'Careers',
            'Help Center',
            'Contact Us',
            'Join Us on Discord',
        ]
    },
]
</script>

<template>
    <div>
        <div :class="$style.footerPrimary">
            <div :class="$style.footerPrimaryContent">
                <div :class="$style.footerPrimaryTopic" v-for="(item, index) in data" :key="index">
                    <span :class="$style.footerPrimaryTopicTitle" >{{ item.title }}</span>
                    <ul :class="$style.footerPrimaryContentList" >
                        <li :class="$style.footerPrimaryContentItem" v-for="(subItem, id) in item.content" :key=id>{{ subItem }}</li>
                    </ul>
                </div>
            </div>
            <div :class="$style.footerPrimaryTopic">
                <span :class="$style.footerPrimaryTopicTitle" >Get to Know Us</span>
                <div :class="$style.footerPrimaryContactIcons">
                    <svg fill="#434343" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                        font-size="24px">
                        <path fill="#0078D4"
                            d="M21 18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5z">
                        </path>
                        <path fill="#fff"
                            d="M6 9.5h2.5V18H6zm1.242-1H7.23C6.482 8.5 6 7.944 6 7.25 6 6.54 6.497 6 7.257 6c.76 0 1.229.54 1.243 1.25 0 .694-.482 1.25-1.258 1.25M18 18h-2.5v-4.55c0-1.098-.613-1.848-1.596-1.848-.75 0-1.156.505-1.354.995-.072.175-.05.659-.05.903V18H10V9.5h2.5v1.308c.36-.558.925-1.308 2.369-1.308 1.789 0 3.13 1.125 3.13 3.637z">
                        </path>
                    </svg>
                    <svg fill="#434343" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                        font-size="24px">
                        <path fill="#0866FF"
                            d="M22 12.062C22 6.508 17.52 2 12 2S2 6.508 2 12.062c0 5.026 3.656 9.192 8.445 9.938v-7.036H7.89v-2.902h2.554V9.845c0-2.519 1.483-3.918 3.77-3.918 1.09 0 2.224.208 2.224.208V8.59h-1.257c-1.246 0-1.637.787-1.637 1.575v1.886h2.78l-.442 2.901h-2.338v7.037c4.8-.735 8.456-4.901 8.456-9.927">
                        </path>
                        <path fill="#fff"
                            d="M10.445 22v-7.036H7.89v-2.902h2.554V9.845c0-2.519 1.483-3.918 3.77-3.918 1.09 0 2.224.208 2.224.208V8.59h-1.257c-1.246 0-1.637.787-1.637 1.575v1.886h2.78l-.442 2.901h-2.338v7.037l-3.1.01Z">
                        </path>
                    </svg>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                        font-size="24px">
                        <path
                            d="M17.768 2.999h3.055l-6.673 7.625L22 21h-6.145l-4.817-6.292-5.504 6.293h-3.06l7.136-8.158-7.526-9.845h6.301l4.35 5.751zm-1.073 16.176h1.692L7.464 4.73H5.646z">
                        </path>
                    </svg>
                    <svg fill="#434343" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                        font-size="24px">
                        <path fill="url(#instagram_static_svg__a)"
                            d="M12.005 2.999c-3.759 0-4.858.004-5.071.021-.772.065-1.252.186-1.775.446-.402.2-.72.432-1.034.758-.571.592-.917 1.322-1.043 2.19-.06.42-.078.506-.082 2.656v2.926c0 3.755.004 4.853.022 5.067.063.75.18 1.222.43 1.739a3.792 3.792 0 0 0 2.457 2.008c.372.095.781.148 1.308.173.223.01 2.495.016 4.769.016 2.273 0 4.547-.002 4.764-.014.61-.028.964-.076 1.355-.177a3.77 3.77 0 0 0 2.458-2.012c.244-.504.368-.994.424-1.705.012-.155.017-2.628.017-5.098 0-2.47-.005-4.938-.017-5.093-.057-.723-.181-1.209-.433-1.723a3.568 3.568 0 0 0-.77-1.055c-.596-.57-1.325-.915-2.193-1.04-.42-.061-.504-.08-2.656-.083z">
                        </path>
                        <path fill="url(#instagram_static_svg__b)"
                            d="M12.005 2.999c-3.759 0-4.858.004-5.071.021-.772.065-1.252.186-1.775.446-.402.2-.72.432-1.034.758-.571.592-.917 1.322-1.043 2.19-.06.42-.078.506-.082 2.656v2.926c0 3.755.004 4.853.022 5.067.063.75.18 1.222.43 1.739a3.792 3.792 0 0 0 2.457 2.008c.372.095.781.148 1.308.173.223.01 2.495.016 4.769.016 2.273 0 4.547-.002 4.764-.014.61-.028.964-.076 1.355-.177a3.77 3.77 0 0 0 2.458-2.012c.244-.504.368-.994.424-1.705.012-.155.017-2.628.017-5.098 0-2.47-.005-4.938-.017-5.093-.057-.723-.181-1.209-.433-1.723a3.568 3.568 0 0 0-.77-1.055c-.596-.57-1.325-.915-2.193-1.04-.42-.061-.504-.08-2.656-.083z">
                        </path>
                        <path fill="#fff"
                            d="M12 5.353c-1.804 0-2.03.008-2.74.04-.707.032-1.19.144-1.613.309-.437.17-.808.397-1.178.766-.37.37-.596.74-.767 1.178-.164.422-.277.906-.308 1.613-.032.709-.04.936-.04 2.74 0 1.806.008 2.032.04 2.74.032.708.144 1.191.308 1.614.17.437.397.808.767 1.178.37.37.74.597 1.177.767.423.164.906.276 1.614.309.709.032.935.04 2.74.04 1.805 0 2.031-.008 2.74-.04.708-.033 1.191-.145 1.614-.31.437-.17.807-.397 1.177-.766.37-.37.597-.74.767-1.178.163-.423.275-.906.309-1.613.032-.71.04-.935.04-2.74 0-1.805-.008-2.032-.04-2.741-.034-.708-.146-1.19-.31-1.613a3.264 3.264 0 0 0-.766-1.178c-.37-.37-.74-.597-1.177-.766-.424-.165-.907-.277-1.615-.309-.709-.032-.935-.04-2.74-.04zm-.595 1.198H12c1.774 0 1.985.006 2.686.038.648.03 1 .138 1.234.229.31.12.531.264.764.497.232.233.376.454.497.764.09.234.2.586.229 1.234.032.7.039.911.039 2.685s-.007 1.985-.04 2.685c-.029.648-.137 1-.228 1.234-.12.31-.265.531-.497.764a2.054 2.054 0 0 1-.764.497c-.234.091-.586.2-1.234.229-.701.032-.912.039-2.686.039-1.775 0-1.985-.007-2.686-.04-.648-.029-1-.137-1.234-.228a2.06 2.06 0 0 1-.765-.497 2.061 2.061 0 0 1-.497-.764c-.091-.234-.2-.586-.229-1.234-.032-.7-.038-.911-.038-2.686s.006-1.985.038-2.685c.03-.649.138-1 .229-1.235.12-.31.265-.531.497-.764.233-.233.455-.377.765-.497.234-.092.586-.2 1.234-.23.613-.027.85-.036 2.09-.037zm4.144 1.103a.798.798 0 1 0 0 1.596.798.798 0 0 0 0-1.596zM12 8.586a3.414 3.414 0 1 0 0 6.827 3.414 3.414 0 0 0 0-6.827m0 1.198a2.216 2.216 0 1 1 0 4.431 2.216 2.216 0 0 1 0-4.43">
                        </path>
                        <defs>
                            <radialGradient id="instagram_static_svg__a" cx="0" cy="0" r="1"
                                gradientTransform="matrix(0 -17.8399 16.5965 0 7.782 22.386)"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD5"></stop>
                                <stop offset="0.1" stop-color="#FD5"></stop>
                                <stop offset="0.5" stop-color="#FF543E"></stop>
                                <stop offset="1" stop-color="#C837AB"></stop>
                            </radialGradient>
                            <radialGradient id="instagram_static_svg__b" cx="0" cy="0" r="1"
                                gradientTransform="matrix(1.56559 7.81938 -32.23906 6.45487 -.016 4.296)"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3771C8"></stop>
                                <stop offset="0.128" stop-color="#3771C8"></stop>
                                <stop offset="1" stop-color="#60F" stop-opacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
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
.footerPrimary {
    display: flex;
    background-color: #f1f1f1;
    padding-bottom: 52px;
    border-top: 1px solid;
    border-color: #DEE1E3;
    padding-right: 68px;
    padding-left: 68px;
    padding: 0 68px 52px 68px;
    flex-wrap: wrap;
}

.footerPrimaryContent {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}

.footerPrimaryTopic {
    flex-basis: 25%;
    max-width: 25%;
    padding-left: 36px;
    padding-top: 52px;
}

.footerPrimaryTopicTitle {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 700;
    color: #252525;
    padding-bottom: 4px;
}

.footerPrimaryContentItem {
    font-size: 16px;
    font-weight: 400;
    color: #252525;
    line-height: 36px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

.footerPrimaryContactIcons {
    display: flex;
    
}

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