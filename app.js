"use strict";

function init() {
    let element = document.getElementById("js-test")
    element.innerHTML = "js-test-text"
    animation_test(element, 1000)
}

function animation_test(element, time) {
    setTimeout(function() {
        element.innerHTML += `${time}ミリ秒経過`
    }, time)
}