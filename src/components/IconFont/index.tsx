import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
    scriptUrl: require('@assets/iconfonts/iconfont.js'),
    extraCommonProps: {
        style: {
            fontSize: '16px',
            cursor: 'pointer'
        }
    }
})

export default IconFont
