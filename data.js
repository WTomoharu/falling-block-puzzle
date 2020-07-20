"use strict";

const rotat_dict = {
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
    </svg>`,
    "J":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "S":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "Z":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
    "O":
        `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="100" height="100">
    <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
    </svg>`,
}

//角度ごとのブロック位置の情報を記述
const block_position_dict = {
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
            `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="100" height="100">
            <rect x="0" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            </svg>`,
    },
    "T": {
        "pattern": [
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
        "svg":
            `<svg id="{block_id}" style="position: absolute; top: 0; left: 0;" width="150" height="150">
            <rect x="50" y="0" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            <rect x="0" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            <rect x="100" y="50" width="50" height="50" rx="10" ry="10" fill="green"></rect>
            </svg>`,
    }

}