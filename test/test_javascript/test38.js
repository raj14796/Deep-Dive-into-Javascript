function fn() {
    var x = 5;
    let obj = {
        x: 2,
        getX: function () {
            console.log(this)
        }
    }

    let y = obj.getX;
    y()
}
fn()