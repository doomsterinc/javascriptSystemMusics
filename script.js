let audioContext = new AudioContext();

function startLoop(audioBuffer) {
  let sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = 2.98;
  sourceNode.loopEnd = 3.80;
  sourceNode.connect(audioContext.destination);
  sourceNode.start(0, 2.98);
}

fetch('itsgonnarain.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    startLoop(audioBuffer);
    startLoop(audioBuffer);
  })
  .catch(e => console.error(e));
