var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1);