// const trips = [[2,1,5],[3,3,7]], capacity = 4
// const trips = [[2,1,5],[3,3,7]], capacity = 5
// const trips = [[2,1,3],[3,3,7]], capacity = 5
const trips = [[2,5,6],[3,1,7]], capacity = 2
// nPeople, pickup, drop

// [[2,1,5],[3,6,7]]
// [[2,1,5],[3,3,7]]
// 2 0

function fn(trips, capacity) {
    const pickup = [...trips];
    const drop = [...trips];
    pickup.sort((ele1, ele2) => {
        if (ele1[1] < ele2[1]) {
            return -1
        }
        else {
            return 1
        }
    })
    drop.sort((ele1, ele2) => {
        if (ele1[2] < ele2[2]) {
            return -1
        }
        else {
            return 1
        }
    })
    // console.log(pickup, drop)
    let counter = 0, pPointer = 0, dPointer = 0;
    const length = pickup.length;
    while(pPointer < pickup.length && dPointer < pickup.length) {
        if(pickup[pPointer][1] < drop[dPointer][2]) {
            counter += pickup[pPointer][0];
            pPointer++;
        }
        else if(pickup[pPointer][1] > drop[dPointer][2]) {
            counter -= drop[dPointer][0];
            dPointer++;
        }
        else {
            pPointer++;
            dPointer++;
        }
        if (counter > capacity) {
            return false;
        }
    }
    return true
}
console.log(fn(trips, capacity))