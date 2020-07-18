"use strict";

const rotat_dict = {
    "T": [
        { x: -25, y: 25 },
        { x: 25, y: -25 },
        { x: 25, y: 25 },
        { x: -25, y: -25 }
    ]
}

let ins;

function init() {
    let element = document.getElementById("rect-svg")
    ins = new Block(element)
}

// 常に余算が正になるような関数
// function mod(i, j) {
//     return (i % j) < 0 ? (i % j) + 0 + (j < 0 ? -j : j) : (i % j + 0);
// }

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
    constructor(element, block_type = "T") {
        this.element = element
        this.block_type = block_type
        this.rotat_num = 0

        // this.move_improve(10000, 0, 600)
    }

    move_improve(time/*ミリ秒*/, x, y, calcallback = null) {
        let start = Date.now()
        // console.log(`${(x / (time / 20))}:${(y / (time / 20))}`);

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

    rotat_improve(time/*ミリ秒*/, angle, calcallback = null) {
        let start = Date.now()
        console.log(`angle=${(angle / (time / 20))}`);

        // 回転軸のズレを修正
        this.move_improve(time,
            rotat_dict[this.block_type][this.rotat_num].x,
            rotat_dict[this.block_type][this.rotat_num].y
        )

        // rotat_numを終了後の値にセット
        if (angle >= 0) {
            this.rotat_num = (this.rotat_num + 1) % 4
        } else {
            this.rotat_num = (this.rotat_num - 1) % 4
        }

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