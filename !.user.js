// ==UserScript== 
// @match https://www.youtube.com/watch?v=*
// ==UserScript== 
document.getElementsByClassName('ytp-gradient-top')[0].remove()
document.getElementsByClassName('ytp-chrome-top')[0].remove()
document.getElementsByClassName('ytp-gradient-bottom')[0].remove()
document.getElementsByTagName('video')[0].onpause=()=>document.getElementsByClassName('ytp-bezel-text-hide')[0].remove()
