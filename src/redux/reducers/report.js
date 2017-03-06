
let report = {
    crowd: {
        id: 123,
        name: 'sadfasf'
    },
    filter: {
        tagcode: [
            [
                { "code": "10301", "text": "资讯论坛", "level": 2 }
            ],
            [
                { "code": "10301", "text": "资讯论坛", "level": 2 },
                { "code": "10304", "text": "保养维修", "level": 2 }
            ]
        ],
        fixedpros: {
            "area": [],
            "interest": [],
            "sex": [{ "code": 10002, "text": "女" }],
            "mobile": [
                { "code": 410007000000000000, "text": "酷派" },
                { "code": 410006000000000000, "text": "联想" }
            ],
            "age": []
        }
    },
    model: { "id": 11, "name": "出国英语培训" }
}

export default (state = report, action) => {
    switch (action.type) {
    case 'UPDATE_CROWD':
        return { crowd: action.crowd }
    case 'UPDATA_FILTER':
        return { filter: action.filter }
    case 'UPDATA_MODEL':
        return { model: action.model }
    default:
        return state
    }
}