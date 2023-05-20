// Write a helper function getInitials(String name) to return initials from a name .

// Initials are of two letters (max)
// Initials contain only alphabets (no special characters, no numbers)
// Initials will be first legit alphabet of first two legit words
// In case of name with single legit word, initials will be first two legit alphabets
// Examples:

// Sales & Marketing = SM
// Gabit = Ga
// 1Hello 2How = HH
// %%%% 123 Self hi = Sh
// 123Ping123 = Pi
// Sales & = Sa
// N = N


function fn(fullName) {
    const reg = new RegExp("^[A-Za-z]+$");
    const arr = fullName.split(" ");
     console.log(arr)
    if(arr.length === 1) {
        return arr[0][0]+arr[0][1];
    }
   
    else if(arr.length > 1) {
        let str='';
        let count = 0;
        let index = null;
        while(count<arr.length) {
            if(reg.test(arr[count][0])) {
                console.log('here', str, arr[count][0])
                index = count;
                str+=arr[count][0];
                if(str.length==2) {
                    return str;
                }
            }
            count++;
        }
        if(str.length === 1){
            return str+arr[index][1];
        }
    }
    else {
        return null;
    }
}
console.log(fn(' %%%% 123 Self hi'))