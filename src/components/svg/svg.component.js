import React from 'react'
import PropTypes from 'prop-types'
import Svg, {Path, Defs, RadialGradient, Circle, Stop} from 'react-native-svg'

const IconCheckListModal = (props) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none">
            <Path
                fill="#fff"
                d="M21.799 43.597c12.039 0 21.798-9.76 21.798-21.798C43.597 9.759 33.837 0 21.8 0 9.759 0 0 9.76 0 21.799s9.76 21.798 21.799 21.798z"
            ></Path>
            <Path
                fill={props.ColorBg}
                d="M34.745 11.607c-5.017 2.28-11.333 4.647-17.123 12.836-.637-1.924-3.852-3.896-5.869-4.704l-2.9 2.856c5.286 2.09 7.885 5.4 8.968 9.396 5.746-13.226 12.181-16.976 16.924-20.384z"
            ></Path>
        </Svg>
    )
} 

const IconDescMentor = (props) => {
    return (
        <Svg
            width="27"
            height="21"
            fillRule="evenodd"
            fill={props.ColorBg}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path d="M27 2.66a.723.723 0 00-.723-.723h-5.784a4.58 4.58 0 00-4.579 4.579v13.495a.723.723 0 001.446 0 2.17 2.17 0 012.169-2.169h6.748a.723.723 0 00.723-.723V2.66zm-9.64 14.459V6.516a3.13 3.13 0 01.918-2.215 3.135 3.135 0 012.215-.918h5.061v13.013h-6.025a3.61 3.61 0 00-2.169.723zM2.623 1.696a.92.92 0 01.355.071.93.93 0 01.301.201l7.74 7.74.492 1.803-1.803-.492-7.74-7.74a.93.93 0 01-.201-.301.92.92 0 010-.71.93.93 0 01.502-.502.92.92 0 01.355-.071zM3.531.431A2.36 2.36 0 002.623.25a2.36 2.36 0 00-.908.181c-.288.12-.55.294-.77.514a2.37 2.37 0 00-.514.77 2.377 2.377 0 00-.181.908 2.36 2.36 0 00.181.908c.12.288.294.55.514.77l7.876 7.876c.089.089.2.153.321.186l3.209.875a.726.726 0 00.702-.186.72.72 0 00.186-.701l-.875-3.209a.723.723 0 00-.186-.321L4.301.945a2.37 2.37 0 00-.77-.514z"></Path>
            <Path d="M7.721 9.215v7.182h6.025c.787 0 1.547.256 2.169.723V6.516a3.135 3.135 0 00-3.133-3.133H8.685L7.239 1.937h5.543a4.58 4.58 0 014.579 4.579v13.495a.723.723 0 01-1.446 0 2.17 2.17 0 00-2.169-2.169H6.998a.723.723 0 01-.723-.723V7.913l1.446 1.301z"></Path>
        </Svg>
    )
}

const IconStudyMentor = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            fill="none"
            stroke={props.ColorStroke}
            strokeLinejoin="round"
            strokeWidth="1.5"
            >
            <Path d="M4 1H1v9h3V1zm7 0H8v5h3V1z"></Path>
        </Svg>
    )
}

const IconSystemMentor = (props) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill={props.ColorBg}>
            <Path
                stroke={props.ColorStroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M6.833 1H1v5.833h5.833V1zM16 1h-5.833v5.833H16V1zm0 9.167h-5.833V16H16v-5.833zm-9.167 0H1V16h5.833v-5.833z"
            ></Path>
        </Svg>
    )
}

const IconTerms = (props) => {
    return (
        <Svg width="12" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                 d="M8.794 0C10.854 0 12 1.187 12 3.22v6.887c0 2.066-1.147 3.226-3.206 3.226H3.207C1.18 13.333 0 12.173 0 10.107V3.22C0 1.187 1.18 0 3.207 0h5.587zM3.387 9.16a.53.53 0 0 0-.5.807c.106.166.3.266.5.24h5.226a.522.522 0 0 0 .467-.52c0-.274-.2-.5-.467-.527H3.387zm5.226-3.04H3.387a.52.52 0 0 0 0 1.04h5.226a.52.52 0 0 0 0-1.04zM5.38 3.1H3.387v.007a.52.52 0 0 0 0 1.04h1.992a.522.522 0 0 0 0-1.047z" 
                 fill={props.color}
            />
        </Svg>
    )
}

const IconTarif = (props) => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M9.49982 0.59375L9.27485 0.795L1.07607 9.08434L0.583008 9.57884L1.07679 10.0963L7.90491 16.9245L8.42241 17.4182L8.91835 16.9245L17.2055 8.72569L17.4061 8.5V0.59375H9.49982ZM10.1064 2.03125H15.9686V7.89337L8.4217 15.3957L2.60413 9.57812L10.1064 2.03125ZM13.8123 3.46875C13.6217 3.46875 13.4389 3.54448 13.3041 3.67927C13.1693 3.81406 13.0936 3.99688 13.0936 4.1875C13.0936 4.37812 13.1693 4.56094 13.3041 4.69573C13.4389 4.83052 13.6217 4.90625 13.8123 4.90625C14.0029 4.90625 14.1858 4.83052 14.3206 4.69573C14.4553 4.56094 14.5311 4.37812 14.5311 4.1875C14.5311 3.99688 14.4553 3.81406 14.3206 3.67927C14.1858 3.54448 14.0029 3.46875 13.8123 3.46875Z" 
                fill={props.ColorBg}
                />
        </Svg>
    )
}

const IconAchievement = (props) => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M16.5 2.25H15V1.5C14.9996 1.1023 14.8414 0.720997 14.5602 0.439779C14.279 0.15856 13.8977 0.000397108 13.5 0H4.5C4.1023 0.000397108 3.721 0.15856 3.43978 0.439779C3.15856 0.720997 3.0004 1.1023 3 1.5V2.25H1.5C1.1023 2.2504 0.720997 2.40856 0.439779 2.68978C0.15856 2.971 0.000397108 3.3523 0 3.75V6C0.000992322 6.79534 0.317381 7.55783 0.879776 8.12022C1.44217 8.68262 2.20466 8.99901 3 9H3.2415C3.55403 10.148 4.19408 11.1802 5.08349 11.9705C5.9729 12.7609 7.07318 13.2751 8.25 13.4505V16.5H4.5V18H13.5V16.5H9.75V13.4482C10.9421 13.3009 12.0621 12.7976 12.9638 12.0041C13.8656 11.2106 14.5072 10.1637 14.805 9H15C15.7953 8.99901 16.5578 8.68262 17.1202 8.12022C17.6826 7.55783 17.999 6.79534 18 6V3.75C17.9996 3.3523 17.8414 2.971 17.5602 2.68978C17.279 2.40856 16.8977 2.2504 16.5 2.25ZM3 7.5C2.6023 7.4996 2.221 7.34144 1.93978 7.06022C1.65856 6.779 1.5004 6.3977 1.5 6V3.75H3V7.5ZM13.5 7.5C13.5 8.10268 13.3789 8.69922 13.144 9.25422C12.909 9.80922 12.565 10.3114 12.1322 10.7309C11.6995 11.1504 11.1869 11.4787 10.6249 11.6963C10.0629 11.9139 9.46289 12.0164 8.8605 11.9977C7.66634 11.9234 6.54679 11.3917 5.73466 10.513C4.92253 9.63441 4.48032 8.47656 4.5 7.28025V1.5H13.5V7.5ZM16.5 6C16.4996 6.3977 16.3414 6.779 16.0602 7.06022C15.779 7.34144 15.3977 7.4996 15 7.5V3.75H16.5V6Z" 
                fill={props.ColorBg}/>
        </Svg>
    )
}

const IconChekListAbout = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            version="1"
            viewBox="0 0 6316 6316"
            >
            <Defs>
                <RadialGradient
                id="a"
                cx="5305.82"
                cy="947.12"
                r="558.8"
                fx="5305.82"
                fy="947.12"
                gradientTransform="translate(-3537 -631) scale(1.66666)"
                gradientUnits="userSpaceOnUse"
                >
                <Stop offset="0" stopColor="#6ff7a8"></Stop>
                <Stop offset="0.439" stopColor="#4bd284"></Stop>
                <Stop offset="1" stopColor="#27ae60"></Stop>
                </RadialGradient>
            </Defs>
            <Circle cx="3158" cy="3158" r="3158" fill={props.ColorBg}></Circle>
            <Path
                fill="#2980b9"
                fillOpacity="0.4"
                fillRule="nonzero"
                d="M1172 3129c311 69 583 205 822 393 115 89 221 190 321 301 1003-1699 2005-2282 2645-2272-756 460-1721 1794-2338 2958l-238 448c-374-765-669-927-1494-1110l282-718z"
            ></Path>
            <Path
                fill="#fff"
                fillRule="nonzero"
                d="M1156 3027c291 65 545 191 769 367 107 84 206 179 300 282 1025-1589 2554-2138 2534-2126-706 430-1670 1680-2247 2768l-223 419-264-394c-134-201-282-372-449-502-160-126-454-231-658-276l238-538z"
            ></Path>
        </Svg>
    )
}

export default {
    IconTerms,
    IconTarif,
    IconDescMentor,
    IconStudyMentor,
    IconAchievement,
    IconSystemMentor,
    IconChekListAbout,
    IconCheckListModal,
}