// polyfill for a browser API compatible WebSocket
if (process) {
  global.WebSocket = require("ws");
}

// Ableton Live
const { AbletonLive } = require("ableton-live");
const ABLETON_CONNECT_OPTIONS = {
  host: "127.0.0.1",
  logRequests: true,
};
const ABLETON_LIVE = new AbletonLive(ABLETON_CONNECT_OPTIONS);

const displayWelcomeMessage = () => {
  const { name, description, version } = require("./package.json");
  const WELCOME_MESSAGE = `Welcome to ${name} - v${version}\n\n${description}\n`;

  console.log(WELCOME_MESSAGE);
};
displayWelcomeMessage();

const test = async () => {
  try {
    // Connect to the Live API device in your Ableton Live set
    await ABLETON_LIVE.connect();

    const tracks = await ABLETON_LIVE.song.children("tracks");
    // console.log(tracks);
  } catch (error) {
    console.error(error);
  }
};
test();

// EXAMPLE: Load MIDI notes for the first clip of the first track
// const main = async () => {
//   try {
//     await live.connect();

//     const tracks = await live.song.children("tracks");
//     const clips = await tracks[0].getClips();
//     const notes = await clips[0].getNotes();
//     notes.forEach((note) => console.log(note.pitch));
//   } catch (error) {
//     console.error(error);
//   }
// };
// main();
