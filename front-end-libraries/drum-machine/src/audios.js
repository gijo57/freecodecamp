import bass from './Audio/bass.wav';
import clap from './Audio/clap.wav';
import closedhihat from './Audio/closedhihat.wav';
import kick from './Audio/kick.wav';
import openhihat from './Audio/openhihat.wav';
import ride from './Audio/ride.wav';
import snare from './Audio/snare.wav';
import synth from './Audio/synth.wav';
import tom from './Audio/tom.wav';

const audios = {
  bass,
  clap,
  closedhihat,
  kick,
  openhihat,
  ride,
  snare,
  synth,
  tom
};

const getAudio = (audio) => {
  return audios[audio];
};

export default getAudio;
