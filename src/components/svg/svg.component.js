import React from 'react'
import PropTypes from 'prop-types'
import Svg, {Path} from 'react-native-svg'

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

export default {
    IconDescMentor,
    IconStudyMentor,
    IconSystemMentor,
    IconCheckListModal,
}