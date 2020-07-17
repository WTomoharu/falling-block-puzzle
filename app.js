"use strict";

function init() {
    let element = document.getElementById("rect-svg")
    move_test(element, 10000)
}

function animation_test(element, time) {
    setTimeout(function() {
        element.innerHTML += `${time}ミリ秒経過`
    }, time)
}

function cout_test(element, end) {
    let i = 0
    // setInterval( fun, 間隔（ミリ秒）)
    let id = setInterval(function() {
        i++
        element.innerHTML = `${i}`
        
        if (i >= end) {
            console.log("end");
            clearInterval(id)
            return
        }
    }, 1000/50) //一秒(1000ミリ秒)間に50回更新（50フレーム）
}

function move_test(element, time/* ミリ秒 */, dist) {
    let i = time/20
    let textObj = document.getElementById("js-test")
    let id = setInterval(function() {
        i--
        element.style.top = i
        textObj.innerHTML = `${i}`
        if (i <= 0) {
            clearInterval(id)
            return
        }
    }, 1000/50)
}