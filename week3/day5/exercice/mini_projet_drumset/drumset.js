const drumSounds = {
    65: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/boom.wav",     // A
    83: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/clap.wav",     // S
    68: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/hihat.wav",    // D
    70: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/kick.wav",     // F
    71: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/openhat.wav",  // G
    72: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/ride.wav",     // H
    74: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/snare.wav",    // J
    75: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/tink.wav",     // K
    76: "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/tom.wav"       // L
  };
  
  /* 3. Tableau des codes acceptés */
  const allowedKeys = Object.keys(drumSounds).map(Number);
  
  /* 4. Génération (one-shot) des balises <audio> */
  for (const [key, src] of Object.entries(drumSounds)) {
    const audio = document.createElement('audio');
    audio.dataset.key = key;
    audio.src = src;
    audio.preload = 'auto';
    document.body.appendChild(audio);
  }
  
  /* 5. Jouer au clavier */
  window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if (!allowedKeys.includes(keyCode)) return;
    event.preventDefault();
    playAudio(keyCode);
  });
  
  /* 6. Jouer à la souris / au toucher */
  const drums = document.getElementsByClassName("drum");
  for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function () {
      playAudio(Number(this.dataset.key));
    });
  }
  
  /* 7. Fonction utilitaire */
  function playAudio(keyCode) {
    const note = document.querySelector(`audio[data-key='${keyCode}']`);
    const drum = document.querySelector(`.drum[data-key='${keyCode}']`);
    if (!note) return;
  
    note.currentTime = 0; // restart
    note.play();
  
    drum.classList.add("playing");
    setTimeout(() => drum.classList.remove("playing"), 100);
  }