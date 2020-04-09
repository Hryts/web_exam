const CORRECT_FREQS = [329.63, 246.94, 196.00, 146.83, 110, 82.41];
const SMALL_DIFF = .03;

function tune(arr){
    let     res = [];
    for (let idx = 0; idx < arr.length; idx++) {
        let current_freq = arr[idx];
        let correct_freq = CORRECT_FREQS[idx];
        if (current_freq === 0){
            res.push(" - ")
        } else if (current_freq === correct_freq) {
            res.push("OK")
        } else {
            let diff = Math.sign(Math.floor(Math.abs(current_freq/correct_freq - 1) / SMALL_DIFF));
            res.push(current_freq < correct_freq ? ">" + ">".repeat(diff) + "•" : "•" + "<" + "<".repeat(diff))
        }
    }
    return res;
}

console.log(
    tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41])
)