"use strict";

function init() {
    let element = document.getElementById("rect-svg")
    move_test(element, 10000, 600)
}

function animation_test(element, time) {
    setTimeout(function () {
        element.innerHTML += `${time}ミリ秒経過`
    }, time)
}

function cout_test(element, end) {
    let i = 0
    // setInterval( fun, 間隔（ミリ秒）)
    let id = setInterval(function () {
        i++
        element.innerHTML = `${i}`

        if (i >= end) {
            console.log("end");
            clearInterval(id)
            return
        }
    }, 1000 / 50) //一秒(1000ミリ秒)間に50回更新（50フレーム）
}

function move_test(element, time/* ミリ秒 */, dist, dir = "top") {
    let zentai = time / 20
    let i = 0
    let moto = Number(element.style[dir].slice(0, -2))
    let id = setInterval(function () {
        i++
        // console.log(moto + ((i / zentai) * dist));
        element.style[dir] = moto + ((i / zentai) * dist)
        if (i >= zentai) {
            clearInterval(id)
            return
        }
    }, 1000 / 50)
}

document.addEventListener("keydown", (evt) => {
    console.log(evt.key);
    if (evt.key == "ArrowRight") {
        move_test(document.getElementById("rect-svg"), 200, 100, "left")
    } else if (evt.key == "ArrowLeft") {
        move_test(document.getElementById("rect-svg"), 200, -100, "left")
    } else if (evt.key == "ArrowUp") {
        rotation(document.getElementById("rect-svg"), 200, 90)
    }
}) 

function rotation(element, time, angle) {
    let zentai = time / 20
    let i = 0
    // let moto = Number(element.style.transform)
    let moto = element.style.transform.match(/\d+?/gi) || [0]
    moto = Number(moto.join(""))
    console.log(moto);
    let id = setInterval(function () {
        i++
        // console.log(((i / zentai) * angle));
        element.style.transform = `rotate(${moto + ((i / zentai) * angle)}deg)`
        // textObj.innerHTML = `${i}:${(i / zentai) * dist}`
        if (i >= zentai) {
            clearInterval(id)
            return
        }
    }, 1000 / 50)
}