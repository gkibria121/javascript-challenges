// - **Challenge**: Design a media player system that supports playing audio, video, and streaming content.
// - **Task**: Create separate interfaces for each media type so that clients only depend on the interfaces relevant to their needs.
interface IAudioPlayer {
  playAudio(): void;
}
interface IVideoPlayer {
  playVideo(): void;
}

interface IStreamVideo {
  streamVideo(): void;
}

class MediaPlayer implements IAudioPlayer, IVideoPlayer, IStreamVideo {
  playAudio(): void {
    console.log("Play audio");
  }
  playVideo(): void {
    console.log("Play video");
  }
  streamVideo(): void {
    console.log("Stream video");
  }
}

class AudioPlayer implements IAudioPlayer {
  playAudio(): void {
    console.log("Play audio");
  }
}

class VideoPlayer implements IVideoPlayer {
  playVideo(): void {
    console.log("Play video");
  }
}

class StreamVideo implements IStreamVideo {
  streamVideo(): void {
    console.log("Stream video");
  }
}
