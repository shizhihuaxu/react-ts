module.exports = {
    env: {
        browser: true,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        indent: ['warn', 4, { SwitchCase: 1 }],  // 4 spcaes 缩进，switch case 添加一个单位缩进
        'quotes': ['warn', 'single'], // 单引号
        'semi': ['warn', 'never'], // 不加分号
        'comma-dangle': ['warn', 'always-multiline'], // 对象、数组等最后一个元素使用尾逗号
        'space-before-blocks': ['warn', 'always'],
        'arrow-parens': ['warn', 'as-needed'],
        'prefer-const': 'warn',
        'prefer-template': 'warn', // 优先使用字符串模板
        'no-var': 'warn',
        'no-multiple-empty-lines': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/jsx-first-prop-new-line': ['warn', 'multiline'], // 第一个属性单独一行
        'react/jsx-max-props-per-line': ['warn', { maximum: 1 }], // 每个属性单独一行
    },
}
