"use strict";

const rotat_dict = {
    "T": {
        "right": [
            { x: 25, y: 25 },
            { x: -25, y: 25 },
            { x: -25, y: -25 },
            { x: 25, y: -25 }
        ],
        "left": [
            { x: -25, y: 25 },
            { x: -25, y: -25 },
            { x: 25, y: -25 },
            { x: 25, y: 25 }
        ]
    },
    "I": { //Tと完全に同じ
        "right": [
            { x: 25, y: 25 },
            { x: -25, y: 25 },
            { x: -25, y: -25 },
            { x: 25, y: -25 }
        ],
        "left": [
            { x: -25, y: 25 },
            { x: -25, y: -25 },
            { x: 25, y: -25 },
            { x: 25, y: 25 }
        ]
    }
}

const block_svg_dict = {
    "T":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="100">
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "I":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="200" height="50">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="red"></rect>
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="150" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`
}

const block_position_dict = {
    "T": [
        [
            { x: 0, y: 0, type: 1 },
            { x: 1, y: 0, type: 2 },
            { x: 2, y: 0, type: 1 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
        ]
    ]
}

//0: 無し, 1: 回転用の空間, 2: 固形ブロック
let stage = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

let ins;

function init() {
    ins = new Block(document.getElementById("div_svg"), "T_block", "T")
}

function stage_log(inp = stage) {
    const r = inp.map((v) => {
        return v.join(" ")
    }).join("\n")
    console.log(r)
}

// 二次元配列専用のディープコピー
function deep_copy(inp) {
    const result = [];
    for (const line of inp) {
        result.push([...line]);
    }
    return result;
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
    constructor(parent_element, block_id, block_type) {
        //svg_element作成・挿入
        parent_element.insertAdjacentHTML(
            "beforeend",
            block_svg_dict[block_type].replace("{block_id}", block_id)
        )

        this.element = document.getElementById(block_id)
        this.block_type = block_type
        this.rotat_num = 0
        this.position = { x: 1, y: 1 }

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
        let dir = angle >= 0 ? "right" : "left"
        console.log(`angle=${(angle / (time / 20))}:${this.rotat_num}`);

        // 回転軸のズレを修正
        this.move_improve(time,
            rotat_dict[this.block_type][dir][this.rotat_num].x,
            rotat_dict[this.block_type][dir][this.rotat_num].y
        )

        // rotat_numを終了後の値にセット
        if (angle >= 0) {
            this.rotat_num = (this.rotat_num + 5) % 4
        } else {
            this.rotat_num = (this.rotat_num + 3) % 4
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