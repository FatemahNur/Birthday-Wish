let backgroundMusic; // Declare a global variable to hold the background music instance

// Turn on the Light
document.getElementById('light-btn').addEventListener('click', () => {
  document.body.style.background = 'linear-gradient(to bottom, #ffeb3b, #f44336)';
  document.getElementById('light-btn').style.display = 'none';
  document.getElementById('music-btn').style.display = 'inline-block';
});

// Hit the Music
document.getElementById('music-btn').addEventListener('click', () => {
  backgroundMusic = new Audio('happy_birthday_song.mp3'); // Add your music file
  backgroundMusic.loop = true; // Loop the background music
  backgroundMusic.play();
  document.getElementById('music-btn').style.display = 'none';
  document.getElementById('decoration-btn').style.display = 'inline-block';
});

// Birthday Decoration with enhanced celebration
document.getElementById('decoration-btn').addEventListener('click', () => {
  const stage = document.getElementById('stage');
  stage.innerHTML = `
    <div class="celebration-title">
      🎉 Happy Birthday To The Most Hardworking Person 🎉
    </div>
  `;
  
  // Add fireworks
  createFireworks();
  
  document.getElementById('decoration-btn').style.display = 'none';
  document.getElementById('balloon-btn').style.display = 'inline-block';
});

// Function to create fireworks
function createFireworks() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  
  setInterval(() => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(firework);
    
    // Remove firework after animation
    setTimeout(() => {
      firework.remove();
    }, 1000);
  }, 300);
}

// Balloons with original function plus name letters
document.getElementById('balloon-btn').addEventListener('click', () => {
  const stage = document.getElementById('stage');
  const colors = ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png']; // Balloon images

  // Original balloon code for left side
  for (let i = 0; i < 3; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloons';
    balloon.style.left = `${5 + i * 10}vw`; // Left side positioning
    balloon.style.top = `${50 + i * 10}px`; // Adjust spacing
    balloon.innerHTML = `<img src="${colors[i]}" alt="Balloon">`;
    stage.appendChild(balloon);
  }

  // Original balloon code for right side
  for (let i = 3; i < 6; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloons';
    balloon.style.right = `${5 + (i - 3) * 10}vw`; // Right side positioning
    balloon.style.top = `${50 + (i - 3) * 10}px`; // Adjust spacing
    balloon.innerHTML = `<img src="${colors[i]}" alt="Balloon">`;
    stage.appendChild(balloon);
  }

  // Add YOUSUF balloons in the middle
  const name = 'YOUSUF';
  const letters = name.split('');
  const middleStart = window.innerWidth / 2 - (letters.length * 30);
  
  letters.forEach((letter, index) => {
    const balloon = document.createElement('div');
    balloon.className = 'balloons';
    balloon.style.left = `${middleStart + (index * 60)}px`;
    balloon.style.top = '150px';
    balloon.style.animationDelay = `${index * 0.2}s`;
    
    const balloonImg = document.createElement('img');
    balloonImg.src = colors[index % colors.length];
    balloonImg.alt = 'Balloon';
    balloon.appendChild(balloonImg);
    
    const letterDiv = document.createElement('div');
    letterDiv.className = 'balloon-text';
    letterDiv.textContent = letter;
    balloon.appendChild(letterDiv);
    
    stage.appendChild(balloon);
  });

  displayBlinkingBackgroundImages(); // Trigger blinking images in the background
  startConfetti(); // Trigger confetti
  document.getElementById('balloon-btn').style.display = 'none';
  document.getElementById('cake-btn').style.display = 'inline-block';
});

// Show Images in the Background with Enhanced Checkered Effect
function displayBlinkingBackgroundImages() {
  createTwinklingLights(); // Add twinkling lights first

  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];
  let index = 0;

  // Create a container for the background
  const bgContainer = document.createElement('div');
  bgContainer.id = 'background-container';
  bgContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 15px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.1);
  `;
  document.body.appendChild(bgContainer);

  // Create 16 cells for the checkered pattern
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'bg-cell';
    
    // Create an img element instead of using background-image
    const img = document.createElement('img');
    img.src = images[index % images.length];
    img.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.5s ease-in-out;
      opacity: 0.7;
    `;
    cell.appendChild(img);
    bgContainer.appendChild(cell);
  }

  setInterval(() => {
    const cells = document.querySelectorAll('.bg-cell img');
    index = (index + 1) % images.length;
    
    cells.forEach((img, i) => {
      // Create checkerboard pattern by alternating cells
      if ((Math.floor(i / 4) + (i % 4)) % 2 === 0) {
        img.src = images[index];
        img.style.transform = 'scale(0.95)';
        img.style.opacity = '0.9';
      } else {
        img.src = images[(index + 1) % images.length];
        img.style.transform = 'scale(0.85)';
        img.style.opacity = '0.7';
      }
    });
  }, 3000); // Change every 3 seconds
}

function createTwinklingLights() {
  const lightContainer = document.createElement('div');
  lightContainer.id = 'light-container';
  document.body.appendChild(lightContainer);

  const lightImages = ['bulb.png', 'bulb_blue.png', 'bulb_green.png'];
  const numberOfLights = 30;

  for (let i = 0; i < numberOfLights; i++) {
    const light = document.createElement('img');
    light.src = lightImages[Math.floor(Math.random() * lightImages.length)];
    light.className = 'twinkling-light';
    light.style.cssText = `
      position: fixed;
      width: 30px;
      height: 30px;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      animation: twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s;
      opacity: 0.7;
      z-index: 0;
    `;
    lightContainer.appendChild(light);
  }
}

// Display Birthday Cake
document.getElementById('cake-btn').addEventListener('click', () => {
  const stage = document.getElementById('stage');
  
  // Clear any existing content in stage
  stage.innerHTML = '';
  
  // Add cake with simple animation
  const cakeHTML = `
    <div style="margin: 20px auto; text-align: center;">
      <img src="cake128.png" alt="Birthday Cake" 
           style="width: 200px; 
                  animation: cakeFloat 3s ease-in-out infinite;">
    </div>
  `;
  
  stage.innerHTML = cakeHTML;
   
  // Stop background music if playing
  if (backgroundMusic) {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  }

  // Play birthday song
  const birthdaySong = new Audio('hbd.mp3');
  birthdaySong.play();

  // Hide cake button and show message button
  document.getElementById('cake-btn').style.display = 'none';
  document.getElementById('message-btn').style.display = 'inline-block';
});

// Message display and heart button reveal
document.getElementById('message-btn').addEventListener('click', () => {
  // Hide the message button after click
  document.getElementById('message-btn').style.display = 'none';
  
  const stage = document.getElementById('stage');
  stage.innerHTML = '';

  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  stage.appendChild(messageDiv);

  const message = "Dear Yousuf, this year birthday celebration will be different for ya as you had set new journey for betterment but no worries your loved ones are always in your memories, heart and around you. I know that you have been working hard, being patient constantly, not bothering how hurt and depressed inside (MAY ALLAH SEND SO MUCH HAPPINESS THAT YOU FORGET ALL THE TIMES YOU HAVE EVER BEEN HURT) i am sure you tried to show the smile to your loved ones so that they don't feel that extra tension and burden. I had make you go through i suppose and I am sorry for it but i won't say much about these things on your birthday 🙂‍↕️. Let's just talk about you how amazing you are even though sometimes you might have doubt yourself a lot on some part of your life. I might end up writing essay 😱🤪. Anyway, Joke apart 👻, You are the voice and kindest heart that bring help and smile in many people's life. And this time, you have to be kind to yourself because life is like a book. It has many chapters with various emotions and phases so absorb what is useful and discard what is not. You are always in my prayers no matter what we become! 💝";

  let index = 0;
  const typing = setInterval(() => {
    if (index < message.length) {
      messageDiv.innerHTML += message[index];
      index++;
      messageDiv.scrollTop = messageDiv.scrollHeight;
    } else {
      clearInterval(typing);
      // Show heart button immediately after message completes
      const heartBtn = document.getElementById('heart-btn');
      heartBtn.style.display = 'inline-block';
      heartBtn.style.opacity = '0';
      // Fade in animation
      setTimeout(() => {
        heartBtn.style.transition = 'opacity 1s ease-in-out';
        heartBtn.style.opacity = '1';
      }, 100);
    }
  }, 50);
});

// Heart Animation
document.getElementById('heart-btn').addEventListener('click', function() {
  // Create multiple hearts with staggered timing
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 200);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  
  // Random starting position across the width of the screen
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '0';
  
  // Random size variation
  const size = 1 + Math.random() * 1.5;
  heart.style.fontSize = size + 'rem';
  
  // Add to body
  document.body.appendChild(heart);
  
  // Remove after animation
  heart.addEventListener('animationend', function() {
    heart.remove();
  });
}

// Enhanced confetti
function startConfetti() {
  const confettiCanvas = document.getElementById('confetti-canvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confetti = [];
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      size: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 3 + 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 4 - 2
    });
  }

  function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confetti.forEach((piece) => {
      confettiCtx.save();
      confettiCtx.translate(piece.x, piece.y);
      confettiCtx.rotate((piece.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = piece.color;
      confettiCtx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
      confettiCtx.restore();

      piece.x += piece.speedX;
      piece.y += piece.speedY;
      piece.rotation += piece.rotationSpeed;

      if (piece.y > confettiCanvas.height) {
        piece.y = -10;
        piece.x = Math.random() * confettiCanvas.width;
      }
    });
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}
