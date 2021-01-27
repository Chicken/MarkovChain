const [ source, amount ] = process.argv.slice(2);

const model = require(`./${source}`);

function wRandom(arr) {
    let wArr = [];
    for(let item of arr) for(let i = 0; i < item.weight; i++) wArr.push(item.value); 
    return wArr[Math.floor(Math.random() * wArr.length)];
}

let sentences = [];

for(let i = 0; i < (amount ?? 1); i++) {
    let starts = model.filter(n => n.starts);

    let sentence = [];

    let next = wRandom(starts);
    while (next != null) {
        sentence.push(next);
        next = wRandom(model[model.findIndex(n => n.value === next)].next);
    }

    sentences.push(sentence.join(" "));
}

console.log(sentences.map((v,i) => `${i+1}. ${v}`).join("\n"));
