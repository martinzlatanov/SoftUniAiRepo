console.log("sync-code.js loaded");

function waitSync(ms) {
  const start = Date.now();
  const end = start + ms;
  do {console.log("Waiting...");} while (Date.now() < end);
    console.log("Waiting finished.");
  }


waitSync(2000);
console.log("End of sync-code.js");