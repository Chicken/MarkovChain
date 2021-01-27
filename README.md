# Markov Chain

Markov chain implementation test in Node.JS <br>
I actually have no idea if this is how you are supposed to do it. <br>
But I did it anyway. <br>

# Training

Run `npm run train` or `yarn train` (or `node train.js <dataFile> <targetFile>`) to train a `model.json` from `data.txt`<br>
where each line should be a "message" or a sentence <br>

# Generating

Run `npm run generate` or `yarn generate` (or `node generate.js <modelFile> <amount>`) to generate 10 random "messages" <br>
or sentences from the `model.json` file.
