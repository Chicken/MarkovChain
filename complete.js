let [ source = "./data/model.json", amount, ...comp ] = process.argv.slice(2);

const model = require(`./${source}`);

function wRandom(arr) {
    let wArr = [];
    for(let item of arr) for(let i = 0; i < item.weight; i++) wArr.push(item.value); 
    return wArr[Math.floor(Math.random() * wArr.length)];
}

let start = Date.now();

let first = comp.pop();
let sentences = [];

if(model.findIndex(n => n.value == first) == -1) {
    console.log("Can't autocomplete. (Never seen this start)");
    process.exit();
}

for(let i = 0; i < amount; i++) {
    let sentence = [];

    let next = first;
    while (next != null) {
        sentence.push(next);
        next = wRandom(model[model.findIndex(n => n.value === next)].next);
    }

    let text = comp.concat(sentence).join(" ");
    if(sentences.includes(text) || text == first) {
        amount++;
    } else {
        sentences.push(text);
    }
}

console.log(sentences.map((v,i) => `${i+1}. ${v}`).join("\n") + `\nGenerated in ${Date.now() - start}ms.`);
