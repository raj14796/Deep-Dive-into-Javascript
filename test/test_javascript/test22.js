const arr = [
    { id: "EMP001", name: "Name 1", group: "G1" },
    { id: "EMP002", name: "Name 2", group: "G2" },
    { id: "EMP003", name: "Name 3", group: "G2" },
    { id: "EMP004", name: "Name 4", group: "G1" },
]

// --- Expected Output ---

// {
//   "G1":[
//       { id:"EMP001", name:"Name 1"},
//       { id:"EMP004", name:"Name 4"}
//   ],
//   "G2":[
//       {  id:"EMP002", name:"Name 2"},
//       {  id:"EMP003", name:"Name 3"}
//   ]
// }
// }

const answer = arr.reduce((acc, curr) => {
    if (acc[curr.group]) {
        acc[curr.group].push({ id: curr.id, name: curr.name });
    }
    else {
        acc[curr.group] = [{ id: curr.id, name: curr.name }];
    }
    return acc;
}, {})

console.log('answer: ', answer);