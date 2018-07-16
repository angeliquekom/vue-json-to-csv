module.exports = {
 root: true,
 parser: 'babel-eslint',
 parserOptions: {
   sourceType: 'module'
 },
 env: {
   browser: true,
 },
 plugins: [
   "html"
 ],
 rules: {
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'generator-star-spacing': [2, { 'before': true, 'after': true }],
    'handle-callback-err': [2, '^(err|error)$' ],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    'no-dupe-keys': 2,
    'no-empty-pattern': 2,
    'no-trailing-spaces': 2,
    'no-unexpected-multiline': 2,
    'no-whitespace-before-property': 2,
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': [2, 'never'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
    'template-curly-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'array-bracket-spacing': [2, 'never']
  }
}
