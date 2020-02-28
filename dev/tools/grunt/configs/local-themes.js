
'use strict';

/**
 * Define Themes
 *
 * area: frontend,
 * name: Monniers/monnierTopic,
 * locale: en_US,
 * files: [
 *'css/styles-m',
 *'css/styles-l',
 *'css/email',
 *'css/email-inline'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */



module.exports = {
    monnier: {
        area: 'frontend',
        name: 'Monniers/monnierTopic',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    autosts: {
        area: 'frontend',
        name: 'Autostore/autost',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },

};
