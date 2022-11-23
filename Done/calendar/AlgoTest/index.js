var app = document.getElementById("app");
random = Math.random()*1000;
app.innerHTML = random;

function minSumOfLengths(arr, target) {
    let hmap = new Map();
    let sum = 0, lsize = Number.MAX_VALUE, result = Number.MAX_VALUE;
    hmap.set(0, -1);
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i];
        hmap.set(sum, i);
    }
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(hmap.get(sum -target) != null) {
            lsize = Math.min(lsize, i - hmap.get(sum -target))
        }

        if(hmap.get(sum + target) != null && lsize < Number.MAX_VALUE) {
            result = Math.min(result, hmap.get(sum + target) -i + lsize)
        }
    }

    return result == Number.MAX_VALUE ? -1 : result;
}

// console.log(minSumOfLengths([4,3,2,6,2,3,4], 6));
console.log(minSumOfLengths([7,3,4,7], 7));
