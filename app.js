"use strict";

// file:///Users/tomoharu/workspace/falling-block-puzzle/index.html

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
    },
    "J": {
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
    "S": {
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
    "Z": {
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
    "O": {
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
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="150" height="150">
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "I":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="200" height="200">
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="red"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="150" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "L":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="150" height="150">
    <rect x="100" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "J":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="150" height="150">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "S":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="150" height="150">
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "Z":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="150" height="150">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "O":
        `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="100" height="100">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
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
    ],
    "J": [
        [
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 }
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 2, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 }
        ],
        [
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 2, y: 2, type: 2 }
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 0, y: 2, type: 2 },
            { x: 1, y: 2, type: 2 }
        ]
    ],
    "S": [
        [
            { x: 1, y: 0, type: 2 },
            { x: 2, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 }
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 2, y: 2, type: 2 }
        ],
        [
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 0, y: 2, type: 2 },
            { x: 1, y: 2, type: 2 }
        ],
        [
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 }
        ],
    ],
    "Z": [
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 }
        ],
        [
            { x: 2, y: 0, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 2, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 }
        ],
        [
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 1, y: 2, type: 2 },
            { x: 2, y: 2, type: 2 }
        ],
        [
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 },
            { x: 0, y: 2, type: 2 }
        ],
    ],
    "O": [
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 }
        ],
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 }
        ],
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 }
        ],
        [
            { x: 0, y: 0, type: 2 },
            { x: 1, y: 0, type: 2 },
            { x: 0, y: 1, type: 2 },
            { x: 1, y: 1, type: 2 }
        ],
    ],

    "--": [
        [
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 },
            { x: 0, y: 0, type: 2 }
        ],
    ]
}

const BlockData = {
    "default": {
        "pattern": [
            [
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 }
            ],
            [
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 }
            ],
            [
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 }
            ],
            [
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 },
                { x: 0, y: 0, type: 2 }
            ],
        ],
        "rotat_dict": {
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
        "svg":
            `<svg id="{block_id}" style="position: absolute; top: {top_num}; left: {left_num};" width="100" height="100">
            <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            </svg>`,
    },
}

//0: 無し, 1: 回転用の空間, 2: 固形ブロック

let ins;
let gm;
const fallingTime = 500;

function init() {
    gm = new GameMastr()
    gm.nextBlock()
    // ins = new Block(document.getElementById("div_svg"), "T_block", "O")
}

function stage_log(inp = gm.stage) {
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
        gm.now_block.safeMove("right")
    } else if (evt.key == "ArrowLeft") {
        gm.now_block.safeMove("left")
    } else if (evt.key == "ArrowUp") {
        gm.now_block.safeRotat("right")
    } else if (evt.key == "ArrowDown") {
        gm.now_block.safeRotat("left")
    }
})


class GameMastr { // GM
    constructor() {
        this.stage = [
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
        this.lock_elem_list = {}
        this.lock_parent_elemnt = document.getElementById("lock_svg")
        // this.gameStart()
    }

    nextBlock(position_list = []) {
        for (let v of position_list) {
            if (v.x >= 0 && v.y >= 0) { //範囲外（マイナス）になってないかチェック
                this.stage[v.y][v.x] = 2
            }
        }

        this.now_block = new Block(
            ["T", "I", "L", "J", "S", "Z", "O"][Math.floor(Math.random() * 7)]
        )
    }
}

class Block {
    constructor(block_type) {
        this.parent_element = document.getElementById("div_svg")
        this.expect_parent_element = document.getElementById("expect_svg")
        this.color = "green"
        this.block_type = block_type
        this.rotat_num = 0
        this.move_lock = false

        this.start()
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

        // ズレ修正用のデータがある場合、回転軸のズレを修正
        if (rotat_dict[this.block_type]) { //あるかどうかのチェック
            this.move(time,
                rotat_dict[this.block_type][dir][this.rotat_num].x,
                rotat_dict[this.block_type][dir][this.rotat_num].y
            )
        }

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
                this.inStageLog()
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
        let check_stage_list = deep_copy(gm.stage)

        for (let v of block_position_dict[this.block_type][inp_rotate_num]) {
            if (v.y + inp_y >= 0 && v.x + inp_x >= 0) {　 //範囲外（マイナス）になってないかチェック
                check_stage_list[v.y + inp_y][v.x + inp_x] += v.type
            }
        }

        // stage_log(check_stage_list)

        //リストをフラットにした後、フィルターで数字のみ抽出
        let flat_list = Array.prototype.concat.apply([], check_stage_list).filter((v) => v)

        // 最大値を取得：https://qiita.com/hachisukansw/items/81d739ef39af343df619
        let max = flat_list.reduce((a, b) => a > b ? a : b)
        // console.log(flat_list, max)
        return max
    }

    inStageLog(inp_x = this.position.x, inp_y = this.position.y, inp_rotate_num = this.rotat_num) {
        let check_stage_list = deep_copy(gm.stage)

        for (let v of block_position_dict[this.block_type][inp_rotate_num]) {
            if (v.y + inp_y >= 0 && v.x + inp_x >= 0) {　 //範囲外（マイナス）になってないかチェック
                check_stage_list[v.y + inp_y][v.x + inp_x] += v.type
            }
        }
        stage_log(check_stage_list)
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
            this.expectBlock(200)
            if (dir == "left") {
                this.position.x--
                this.move(200, -50, 0)
            } else if (dir == "right") {
                this.position.x++
                this.move(200, 50, 0)
            }
        } else {
            console.log("移動不可")
        }

        //移動後の座標を出力
        console.log(this.position)
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
            next_rotat_num = (this.rotat_num + 3) % 4
        } else if (dir == "right") {
            next_rotat_num = (this.rotat_num + 5) % 4
        }

        //移動可能かチェックする（最大値返却）
        let check = this.blockCheck(
            this.position.x,
            this.position.y,
            next_rotat_num
        )

        //最大値から移動可能か判定する
        if (check <= 3) {
            this.expectBlock(200)
            if (dir == "left") {
                this.rotat(200, -90)
            } else if (dir == "right") {
                this.rotat(200, 90)
            }
        } else {
            console.log("回転不可")
        }
    }

    falling() {
        //初回処理

        //移動可能かチェックする（最大値返却）
        let check = this.blockCheck(
            this.position.x,
            this.position.y + 1
        )

        //最大値から移動可能か判定する
        if (check <= 3) {
            this.position.y++
            this.move(fallingTime, 0, 50)
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
                this.move(fallingTime, 0, 50)
            } else {
                console.log("移動不可のため落下を終了")
                clearInterval(id)
                this.move_lock = true
                this.onBottom()
                return
            }
        }, fallingTime)
    }

    start() {
        const max = 11 // 0 ~ 10 の範囲
        let start_x;
        let check;

        //置ける場所の乱数ができるまで生成し続ける
        while (true) {
            start_x = Math.floor(Math.random() * max)
            check = this.blockCheck(start_x, 0, 0)
            this.inStageLog(start_x, 0, 0)
            console.log(check);
            if (check <= 3) { break }
        }


        this.parent_element.insertAdjacentHTML(
            "beforeend",
            block_svg_dict[this.block_type]
                .replace("{block_id}", "now_block")
                .replace("{top_num}", -100)
                .replace("{left_num}", (start_x - 1) * 50)
        )

        this.element = document.getElementById("now_block")
        this.position = { x: start_x, y: -2 }

        this.expectBlock()
        this.falling()
        // this.move(fallingTime*2, 0, 100, this.falling.bind(this))
    }

    expectBlock(time = 0) {
        this.expect_parent_element.textContent = "" //予想子要素を削除

        setTimeout(() => {

            let expect_y = 0
            let check;

            while (true) {
                check = this.blockCheck(
                    this.position.x, expect_y, this.rotat_num
                )
                if (check > 3) {
                    expect_y--
                    break
                } else {
                    expect_y++
                }
            }

            for (let v of this.getPositionDict()) {
                this.expect_parent_element.insertAdjacentHTML(
                    "beforeend",
                    `<rect x="${(v.x + this.position.x - 1) * 50}" y="${(v.y + expect_y) * 50}" `
                    + `width="50" height="50" rx="10" ry="10" fill="light${this.color}"></rect>`
                )
            }

            // console.log(expect_y);
            // this.inStageLog(this.position.x, expect_y, 0)
        }, time)
    }

    getPositionDict() { // retern List[{x, y, type}]
        return block_position_dict[this.block_type][this.rotat_num].filter(v => v.type >= 2)
    }

    onBottom() {
        //now_blockとexpectの中身を削除
        this.element.parentNode.removeChild(this.element)
        this.expect_parent_element.textContent = null

        let lock_parent_elemnt = document.getElementById("lock_svg")

        for (let v of this.getPositionDict()) {
            lock_parent_elemnt.insertAdjacentHTML(
                "beforeend",
                `<rect x="${(v.x + this.position.x - 1) * 50}" y="${(v.y + this.position.y) * 50}" `
                + `width="50" height="50" rx="10" ry="10" fill="lightred"></rect>`
            )
        }

        gm.nextBlock(this.getPositionDict().map((v) => {
            return { x: v.x + this.position.x, y: v.y + this.position.y }
        }))
    }
}