// ==UserScript==
// @name        Homestar Wiki Redirector
// @namespace   Violentmonkey Scripts
// @icon
// @version     1.0.0
//
// @match       *://www.hrwiki.org/*
// @grant       none
// @run-at       document-start
// @author      loneliest clone in the world
// @homepageURL https://loneliestclone.neocities.org/
// @description quick script to redirect hrwiki links to the faster running mirror.
// ==/UserScript==
(function () {
  window.location.href = 'https://homestar.wiki' + location.pathname;
  console.log("Successfully redirected from hrwiki.org!");
})();
