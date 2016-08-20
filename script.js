let audioContext = new AudioContext();

fetch('itsgonnarain.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => console.log('Decoded', audioBuffer))
  .catch(e => console.error(e));
