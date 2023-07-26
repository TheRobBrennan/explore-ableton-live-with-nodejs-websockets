# Welcome

This project will explore working with [Node.js](https://nodejs.org/en) and [Ableton Live](https://www.ableton.com/en/live/) - inspired by the work at [https://ricardomatias.net/ableton-live/#md:ableton-live](https://ricardomatias.net/ableton-live/#md:ableton-live).

## Getting started

Requirements for this project include:

- Node.js
- Ableton Live 11
- Max for Live

Assuming you have the minimum requirements for this to run on your machine, all you need to do is:

- Clone the repo
- Navigate to the appropriate directory on your machine
- Install the packages using `npm i' or your preferred package manager
- Drag and drop the `external/LiveAPI.amxd` Max for Live device to any track in an open Ableton Live project

  - If you're on macOS, a helper script "open:device" has been created to make incorporating this Live device even more effortless.

  ```sh
  % npm run open:device
  ```

- Enjoy
