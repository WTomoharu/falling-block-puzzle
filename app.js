"use strict";

const rotat_dict = {
    "T": {
        "right": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ],
        "left": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ]
    },
    "I": {
        "right": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ],
        "left": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ]
    },
    "L": {
        "right": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ],
        "left": [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ]
    }
}

const block_svg_dict = {
    "T":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "I":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="200" height="200">
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="red"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="150" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "L":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
    <rect x="100" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`
}

//角度ごとのブロック位置の情報を記述
const block_position_dict = {
    "T": [
        [
            { x: 0, y: 0, type: 1 },
            { x: 1, y: 0, type: 2 },
            { x: 2, y: 0, type: 1 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 2, y: 0, type: 1 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 },
            { x: 2, y: 2, type: 1 },

        ],
        [
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 0, y: 2, type: 1 },
            { x: 1, y: 2, type: 2 },
            { x: 2, y: 2, type: 1 },
        ],
        [
            { x: 0, y: 0, type: 1 },
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 0, y: 2, type: 1 },
            { x: 1, y: 2, type: 2 },
        ]
    ],
    "I": [
        [
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 3, y: 1, type: 2 },
        ],
        [
            { x: 2, y: 0, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 2, y: 2, type: 2 },
            { x: 2, y: 3, type: 2 },
        ],
        [
            { x: 0, y: 2, type: 2 },
            { x: 1, y: 2, type: 2 },
            { x: 2, y: 2, type: 2 },
            { x: 3, y: 2, type: 2 },
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 },
            { x: 1, y: 3, type: 2 },
        ]
    ],
    "--": [
        [
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 }
        ],
    ],
    "L": [
        [
            { x: 2, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 }
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 },
            { x: 2, y: 2, type: 2 }
        ],
        [
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 0, y: 2, type: 2 }
        ],
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 }
        ],
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
        ins.safeMove("right")
    } else if (evt.key == "ArrowLeft") {
        ins.safeMove("left")
    } else if (evt.key == "ArrowUp") {
        ins.safeRotat("right")
    } else if (evt.key == "ArrowDown") {
        ins.safeRotat("left")
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
        this.move_lock = false
        this.position = { x: 1, y: 0 }

        // this.move(10000, 0, 600)
    }

    move(time/*ミリ秒*/, x, y, calcallback = null) {
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

    rotat(time/*ミリ秒*/, angle, calcallback = null) {
        let start = Date.now()
        let dir = angle >= 0 ? "right" : "left"
        console.log(`angle=${(angle / (time / 20))}:${this.rotat_num}`);

        // 回転軸のズレを修正
        this.move(time,
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

    blockCheck(inp_x = this.position.x, inp_y = this.position.y, inp_rotate_num = this.rotat_num) {
        let check_stage_list = deep_copy(stage)

        for (let v of block_position_dict[this.block_type][inp_rotate_num]) {
            check_stage_list[v.y + inp_y][v.x + inp_x] += v.type
        }

        stage_log(check_stage_list)

        //リストをフラットにする
        let flat_list = Array.prototype.concat.apply([], check_stage_list)

        // 最大値を取得：https://qiita.com/hachisukansw/items/81d739ef39af343df619
        let max = flat_list.reduce((a, b) => a > b ? a : b)
        return max
    }

    safeMove(dir/* left or right */) {
        //ロック状態かを確認
        if (this.move_lock) {
            console.log("ロック状態のため移動できません");
            return
        }

        //移動後の座標を計算
        let next_x = this.position.x
        if (dir == "left") {
            next_x--
        } else if (dir == "right") {
            next_x++
        }

        //移動可能かチェックする（最大値返却）
        let check = this.blockCheck(next_x, this.position.y)

        //最大値から移動可能か判定する
        if (check <= 3) {
            if (dir == "left") {
                this.position.x--
                ins.move(200, -50, 0)
            } else if (dir == "right") {
                this.position.x++
                ins.move(200, 50, 0)
            }
        } else {
            console.log("移動不可")
        }

        //移動後の座標を出力
        console.log(ins.position)
    }

    safeRotat(dir /* right or left */) {
        //ロック状態かを確認
        if (this.move_lock) {
            console.log("ロック状態のため回転できません");
            return
        }

        //移動後のrotat_numを計算
        let next_rotat_num = this.position.x
        if (dir == "left") {
            next_rotat_num = (this.rotat_num + 5) % 4
        } else if (dir == "right") {
            next_rotat_num = (this.rotat_num + 3) % 4
        }

        //移動可能かチェックする（最大値返却）
        let check = this.blockCheck(
            this.position.x,
            this.position.y,
            next_rotat_num
        )

        //最大値から移動可能か判定する
        if (check <= 3) {
            if (dir == "left") {
                ins.rotat(200, -90)
            } else if (dir == "right") {
                ins.rotat(200, 90)
            }
        } else {
            console.log("回転不可")
        }
    }

    falling(calcallback = null) {
        //初回処理

        //移動可能かチェックする（最大値返却）
        let check = this.blockCheck(
            this.position.x,
            this.position.y + 1
        )

        //最大値から移動可能か判定する
        if (check <= 3) {
            this.position.y++
            ins.move(2000, 0, 50)
        } else {
            console.log("移動不可のため落下不可")
            return
        }

        let id = setInterval(() => {
            //移動可能かチェックする（最大値返却）
            let check = this.blockCheck(
                this.position.x,
                this.position.y + 1
            )

            //最大値から移動可能か判定する
            if (check <= 3) {
                this.position.y++
                ins.move(2000, 0, 50)
            } else {
                console.log("移動不可のため落下を終了")
                clearInterval(id)
                this.move_lock = true
                return
            }
        }, 2000)
    }
}