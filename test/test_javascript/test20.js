// Deep Copy of an object

const obj = {
    a: 'ravi',
    b: [1, 2, 3, 4],
    c: function () {
        console.log('function c');
    },
    d: {
        da: 'da',
        db: {
            dba: 'dba',
            dbb: {
                dbba: 'dbba',
                dbbb: {
                    dbbba: 'dbbba'
                }
            }
        }
    }
}

const obj2 = {};
deepCopy(obj, obj2);
obj.d.db.dba = 'raj'
console.log(obj.d.db.dba)
console.log(obj2.d.db.dba);
console.log(obj)
console.log(obj2)


function deepCopy(object1, copyObject1) {
    for (const [key, value] of Object.entries(object1)) {
        if (typeof value === 'object' && !value.length && !value.call) {
            copyObject1[key] = {};
            deepCopy(value, copyObject1[key])
        }
        else {
            copyObject1[key] = value;
        }
    }
}

