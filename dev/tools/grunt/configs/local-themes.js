/**
 * Define Themes
 *
 * area: frontend,
 * name: gruntWork/default,
 * locale: en-US,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * 'css/email'
 * 'css/email-inline'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 * area: frontend,
 * name: testTheme/default,
 * locale: en-US,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * 'css/email'
 * 'css/email-inline'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    gruntWork: {
        area: 'frontend',
        name: 'gruntWork/default',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    }
};
module.exports = {
    testTheme: {
        area: 'frontend',
        name: 'testTheme/default',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    }
};