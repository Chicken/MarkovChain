const fs = require("fs");
const [ source = "./data/data.txt", target = "./data/model.json" ] = process.argv.slice(2);

let data = fs
    .readFileSync(source, "utf-8")
    .trim()
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split("\n")
    .map(l => l.trim().split(" ").filter(Boolean));

let model = [];

for(let line of data) {
    for(let index in line) {
        let value = line[index];
        let next = line[Number(index) + 1] ?? null;
        let i = model.findIndex(n => n.value === value);
        if(i != -1) {
            if(index === "0") {
                model[i].starts = true;
                model[i].weight++;
            }
            let ni = model[i].next.findIndex(n => n.value == next);
            if(ni != -1) {
                model[i].next[ni].weight++;
            } else {
                model[i].next.push({
                    value: next,
                    weight: 1
                });
            }
        } else {
            model.push({
                value,
                weight: 1,
                starts: index === "0",
                next: [
                    {
                        value: next,
                        weight: 1
                    }
                ]
            });
        }
    }
}

fs.writeFileSync(target, JSON.stringify(model, null, 4), "utf-8");
console.log(`Model of ${source} written to ${target} succesfully!`);
