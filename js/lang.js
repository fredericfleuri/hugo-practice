
var getFirstBrowserLanguage = function () {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language

    if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
            language = nav.languages[i]
            if (language && language.length) {
                return language
            }
        }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]]
        if (language && language.length) {
            return language
        }
    }
    return 'en'
}

console.log(navigator.language);
document.documentElement.lang = navigator.language

// if (window.location.pathname == '/' && navigator.language != 'fr') {
//     window.location.replace('/en/')
// }

// if (window.location.pathname == '/' or ) {
//     console.log(window.location.pathname);
//     window.location.replace('/' + getFirstBrowserLanguage() + '/')
// } else {
//     console.log(window.location.pathname);
// }