class MyAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList: Float32Array[][], outputList: Float32Array[][], parameters: any) {
    const firstInput = inputList[0];
    const firstInputFirstChannel = firstInput[0];
    const firstChannelByteCount = firstInputFirstChannel.length;
    const firstByteOfFirstChannel = firstInputFirstChannel[0];
    console.log("FIRST BYTE:", firstChannelByteCount, firstByteOfFirstChannel);

    // Using the inputs (or not, as needed),
    // write the output into each of the outputs
    // …
    return true;
  }
}

registerProcessor("my-audio-processor", MyAudioProcessor);