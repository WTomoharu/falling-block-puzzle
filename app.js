"use strict";

let ins;

function init() {
    let element = document.getElementById("rect-svg")
    ins = new Block(element)
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
    let moto = Number(element.style[dir].match(/[-\d]+/gi) || "0")
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
        ins.move_vartical("right")
    } else if (evt.key == "ArrowLeft") {
        ins.move_vartical("left")
    } else if (evt.key == "ArrowUp") {
        rotation(document.getElementById("rect-svg"), 200, 90)
    }
}) 

function rotation(element, time, angle) {
    let zentai = time / 20
    let i = 0
    // let moto = Number(element.style.transform)
    let moto = Number(element.style.transform.match(/[-\d]+/gi) || "0")
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


class Block {
    constructor(element, block_type = "") {
        this.element = element
        this.block_type = block_type
        this.move_vartical_bool = true
    }

    move(time/* ミリ秒 */, dist, dir/* top or left */, calcallback = null) {
        let zentai = time / 20
        let i = 0
        let moto = Number(this.element.style[dir].match(/[-\d]+/gi) || "0")
        let id = setInterval(() => {
            i++
            this.element.style[dir] = moto + ((i / zentai) * dist)
            if (i >= zentai) {
                clearInterval(id)
                if (calcallback) {
                    calcallback()
                }
                return
            }
        }, 1000 / 50)
    }

    move_vartical(dir, time = 200, dist = 50) {
        if (dir == "left") {　// 方向が左の場合、座標を反転させる
            dist = -dist
        }

        if (this.move_vartical_bool) {　//実行中か判定
            this.move_vartical_bool = false
            this.move(time, dist, "left", () => {
                this.move_vartical_bool = true // 処理が終わった後にtureに戻す
            })
        } else { //実行中の場合、非実行にする
            console.log("move_varticalは非実行になりました");
        }
    }
}