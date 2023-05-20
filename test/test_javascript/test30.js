const arr = [
    {
        "name": "Test 1",
        "id": "test1",
        "val": 123
    },
    {
        "name": "Test 2",
        "id": "test2",
        "val": 673
    },
    {
        "name": "Test 3",
        "id": "test3",
        "val": 45
    },
    {
        "name": "Test 4",
        "id": "test4",
        "val": 673
    },
    {
        "name": "Test 5",
        "id": "test5",
        "val": 45
    },
    {
        "name": "Test 6",
        "id": "test6",
        "val": 123
    }
]

// output 

const obj = arr.reduce((acc, curr) => {
    if (!acc[curr.val]) {
        acc[curr.val] = []
    }
    acc[curr.val].push(curr)
    return acc;
}, {})
console.log(obj)