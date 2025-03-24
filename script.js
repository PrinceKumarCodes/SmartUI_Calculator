let clickSound = new Audio("/Image/notification.mp3");
confetti_effect();
bottom_confetti_effect();
// Sound play for clicking on a button

function toggleShadow(boxId, shadowId) {
  var buttonShadow = document.getElementById(shadowId);
  buttonShadow.classList.add("shadow1");
  clickSound.play();
  buttonShadow.classList.remove("shadow2");
  setTimeout(() => {
    buttonShadow.classList.add("shadow2");
  }, 300);
}

for (let i = 1; i <= 20; i++) {
  document
    .getElementById(`singlebox${i}`)
    .addEventListener("click", function () {
      toggleShadow(`singlebox${i}`, `btnshadow${i}`);
    });
}

//audio play when i will click

function togglePlay(video) {
  var audio = document.getElementsByTagName("audio")[0];
  if (audio) {
    if (audio.paused) {
      audio.play();
      document.getElementById("button").src = "/audio.mp4";
    } else {
      audio.pause();
      document.getElementById("button").src = "audio.mp4";
    }
  }
}

//Add confetti_effect
function confetti_effect() {
  var end = Date.now() + 10 * 1000; // Run for 7 seconds
  var colors = [
    "#00BFFF",
    "#39FF14",
    "#FF69B4",
    "#FF4500",
    "#32CD32",
    "#DC143C",
  ];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

//Add bottom confetti efect
function bottom_confetti_effect() {
  var count = 500;
  var defaults = {
    origin: { y: 1.1 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
