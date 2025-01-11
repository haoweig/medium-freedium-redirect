// ==UserScript==
// @name         Medium to Freedium Redirector
// @namespace    https://github.com/haoweig
// @version      1.0
// @description  Automatically redirects Medium articles to Freedium
// @author       Hao Wei Goh
// @match        *://medium.com/*
// @match        *://*.medium.com/*
// @match        *://javascript.plainenglish.io/*
// @match        *://towardsdatascience.com/*
// @match        *://betterhumans.pub/*
// @match        *://bootcamp.uxdesign.cc/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    // Don't redirect if already on freedium or in edit mode
    if (window.location.hostname === 'freedium.cfd' || 
        window.location.href.includes('/edit') ||
        window.location.href.includes('#bypass')) {
        return;
    }

    // Check if it's a Medium article
    const isMediumArticle = 
        document.querySelector('meta[property="al:android:url"][content*="medium://p/"]') ||
        window.location.pathname.includes('/p/') ||
        window.location.pathname.match(/^\/[@a-zA-Z0-9-]+\/[a-zA-Z0-9-]+/);

    if (isMediumArticle) {
        window.location.href = 'https://freedium.cfd/' + window.location.href;
    }
})();
