# Markov Chain

Markov chain implementation test in Node.JS <br>
I actually have no idea if this is how you are supposed to do it. <br>
But I did it anyway. <br>

# Training

Run `node train.js <dataFile> <targetFile>` to train a modelfile from datafile <br>
where each line should be a "message" or a sentence <br>

# Generating

Run `node generate.js <modelFile> <amount>` to generate random "messages" <br>
or sentences from the modelfile.

Run `node complete.js <modelFile> <amount> <...start>` to generate random "messages" <br>
or sentences from the modelfile that start with the specified sentence or word.
