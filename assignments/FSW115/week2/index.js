console.log(document)

const api = [
    {
        "id": 147646,
        "answer": "a whole note",
        "question": "A note equivalent in duration to 4 quarter notes",
        "value": 1000,
        "airdate": "2014-05-02T12:00:00.000Z",
        "created_at": "2015-01-22T02:34:32.209Z",
        "updated_at": "2015-01-22T02:34:32.209Z",
        "category_id": 17045,
        "game_id": 4488,
        "invalid_count": null,
        "category": {
            "id": 17045,
            "title": "like, totally",
            "created_at": "2015-01-18T18:11:00.759Z",
            "updated_at": "2015-01-18T18:11:00.759Z",
            "clues_count": 10
        }
    }
]
document.getElementById("body")
document.body.append(api)