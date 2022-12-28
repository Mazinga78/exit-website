import './scss/style.scss';

  //'use strict';

  // Select all link in page
  const allLink = document.querySelectorAll('a');
  // Select Link Place into Modal
  const exitGoToBtn = document.querySelector('.exit-go-to-btn');
  // Select Timer place
  const exitTimerDisplay = document.querySelector('#exit-timer');
  // Select Timer Row
  const exitTimerText = document.querySelector('#exit-timer-text');
  // Select Modal Box
  const exitPopup = document.querySelector('.exit-popup');
  // Select Modal Overlay
  const exitOverlay = document.querySelector('.exit-overlay');
  // Select Close Modal Button
  const exitCloseBtn = document.querySelector('.exit-close');
  // Select Close Modal X
  const exitCloseBtnX = document.querySelector('.exit-close-x');
  // Select href print
  const exitHrefPrink = document.querySelector('.exit-href-print');
  
  // Close Popup on click Outside Modal Box
  function exitCloseOverlay(data) {
    exitOverlay.addEventListener('click', function () {
      clearInterval(data);
      exitTimerDisplay.textContent = '10';
      exitOverlay.classList.add('exit-hidden');
      exitPopup.classList.add('exit-hidden');
    });
  }
  
  // Click Close Modal Button Function
  function exitClosePopupBtn(data) {
    exitCloseBtn.addEventListener('click', function () {
      clearInterval(data);
      exitTimerDisplay.textContent = '10';
      exitOverlay.classList.add('exit-hidden');
      exitPopup.classList.add('exit-hidden');
    });
  }
  
  // Click Close Modal Button Function
  function exitClosePopupBtnX(data) {
    exitCloseBtnX.addEventListener('click', function () {
      clearInterval(data);
      exitTimerDisplay.textContent = '10';
      exitOverlay.classList.add('exit-hidden');
      exitPopup.classList.add('exit-hidden');
    });
  }
  
  // Click Go to External Link Confirm Button Function
  function exitConfirmLink(intervallo, allLink) {
    exitGoToBtn.addEventListener('click', function () {
      clearInterval(intervallo);
      exitTimerText.textContent = 'Caricamento....';
      window.location.href = allLink;
    });
  }
  
  // Stop Timer Function
  function exitStopTimer(display, intervallo) {
    clearInterval(intervallo);
    exitTimerText.textContent = 'Caricamento....';
  }
  
  // Countdown Function
  function exitStartTimer(duration, display, allLink) {
    exitTimerDisplay.textContent = '10';
  
    var timer = duration,
      seconds;
  
    let intervallo = setInterval(function () {
      seconds = parseInt(timer % 60, 10);
  
      // Put 0 berfore numbers < 10
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      // Print Countdown
      display.textContent = seconds;
  
      // Actions When cycle is running
      if (--timer < 0) {
        // Set timer == duration
        timer = duration;
        // Go to external link without finish circle
        exitConfirmLink(intervallo, allLink);
      }
  
      // Close Modal Button on click and reset timer
      exitClosePopupBtn(intervallo);
  
      // Close Modal Button on click and reset timer
      exitClosePopupBtnX(intervallo);
  
      // Close Modal Overlay on click and reset timer
      exitCloseOverlay(intervallo);
  
      // Go to external Link on
      exitGoToBtn.addEventListener('click', function () {
        exitStopTimer(display, intervallo);
        window.location.href = allLink;
      });
  
      // Action When loop is finished
      if (seconds == '00') {
        exitStopTimer(display, intervallo);
        window.location.href = allLink;
      }
    }, 1000);
  }
  
  // For Loop through all page link to check which is external
  for (let i = 0; i < allLink.length; i++) {
    // Take the one that is clicked
    allLink[i].addEventListener('click', function (e) {
      // Stop link function
      e.preventDefault();
      // Set external link rules
      const isExternalLink = (url) => {
        const tmp = document.createElement('a');
        tmp.href = url;
        return tmp.host !== window.location.host;
      };
  
      // Set link href on click
      let hreflink = this.href;

      let classLink = e.target.className;

      // Actions when is external link
      if (isExternalLink(hreflink) && (!classLink.includes("noExitNotifier"))) {
        // Set external link to Confirm Button
        exitGoToBtn.href = hreflink;
        // Print link 
        exitHrefPrink.textContent = hreflink;
        // Show Overlay
        exitOverlay.classList.remove('exit-hidden');
        // Show Modal Box
        exitPopup.classList.remove('exit-hidden');
        // Start Timer
        exitStartTimer(10, exitTimerDisplay, hreflink);
      } else {
        // Go Directly To internal link
        window.location.href = hreflink;
      }
    });
  }
  
if (module.hot) {
  module.hot.accept();
}

