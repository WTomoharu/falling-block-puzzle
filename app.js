"use strict";

let ins;

function init() {
    let element = document.getElementById("rect-svg")
    ins = new Block(element)
}

document.addEventListener("keydown", (evt) => {
    console.log(evt.key);
    if (evt.key == "ArrowRight") {
        ins.move_improve(200, 50, 0)
    } else if (evt.key == "ArrowLeft") {
        ins.move_improve(200, -50, 0)
    } else if (evt.key == "ArrowUp") {
        ins.rotat_improve(200, 90)
    } else if (evt.key == "ArrowDown") {
        ins.rotat_improve(200, -90)
    }
})

class Block {
    constructor(element, block_type = "") {
        this.element = element
        this.block_type = block_type

        this.move_improve(10000, 0, 600)
    }

    move_improve(time/* ミリ秒 */, x, y, calcallback = null) {
        let start = Date.now()
        console.log(`${(x / (time / 20))}:${(y / (time / 20))}`);

        let id = setInterval(() => {
            let time_passed = Date.now() - start
            // console.log(time_passed);

            if (time_passed > (time + 19)) { // 時間の遅れ用
                clearInterval(id)
                if (calcallback) {
                    calcallback()
                }
                return
            }

            //アニメーション処理
            let left = Number(this.element.style.left.match(/[-\d\.]+/gi) || "0")
            this.element.style.left = left + (x / (time / 20))
            let top = Number(this.element.style.top.match(/[-\d\.]+/gi) || "0")
            this.element.style.top = top + (y / (time / 20))
        }, 20)
    }

    rotat_improve(time/* ミリ秒 */, angle, calcallback = null) {
        let start = Date.now()
        console.log(`angle=${(angle / (time / 20))}`);

        let id = setInterval(() => {
            let time_passed = Date.now() - start
            // console.log(time_passed);

            if (time_passed > (time + 19)) { // 時間の遅れ用
                clearInterval(id)
                if (calcallback) {
                    calcallback()
                }
                return
            }

            //アニメーション処理
            let n = Number(this.element.style.transform.match(/[-\d\.]+/gi) || "0")
            this.element.style.transform = `rotate(${n + (angle / (time / 20))}deg)`
        }, 20)
    }
}