const str = "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Ram Hare Ram Rama  Hare Hare"

const obj = [];

for (const x of str) {
    if (obj[x]) {
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }

}
console.log(obj)