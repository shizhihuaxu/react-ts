module.exports = {
	env: {
		browser: true
	},
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use
			version: 'detect'
		}
	},
	// Specifies the ESLint parser
	parser: '@typescript-eslint/parser',
	extends: [
		// Uses the recommended rules from @eslint-plugin-react
		'plugin:react/recommended',
		// Uses the recommended rules from @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 6,
		// Allows for the use of imports
		sourceType: 'module',
		ecmaFeatures: {
			// Allows for the parsing of JSX
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': 'error',
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'prefer-const': 'error',
		'no-var': 'error',
		'comma-dangle': 'off',
		'arrow-parens': 'off',
		'no-multiple-empty-lines': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'off'
	}
}
/** 
 * javascript comment 
 * @Author: shizhihuaxu 
 * @Date: 2022-01-08 13:26:13 
 * @Desc: ß 
 */
function test(a) {
	return a
}
