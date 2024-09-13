const initCopyBlocks = () => {
  const copyBlocks = document.querySelectorAll('.js-copy');

  copyBlocks.forEach((item, i) => {
    item.addEventListener('click', (ev) => {
      copyTextToClipboard(item.dataset.copyContent)
      const copyBlockAnim = document.createElement('span');
      const copyTextAnim = document.createTextNode('[copy]');
      
      copyBlockAnim.appendChild(copyTextAnim);
      copyBlockAnim.className = 'copy__anim';

      item.appendChild(copyBlockAnim);

      setTimeout(() => {
        item.removeChild(copyBlockAnim)
      }, 550);
    })
  });
};

const heart = ['❤', '🩷', '🧡', '💛', '💚', '💙', '🩵', '💜', '🖤', '🩶', '🤎'];

function changeUrlAnim() {
  var s = '', i, m;

  for (i = 0; i < 10; i++) {
      m = Math.floor(heart.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2));
      s += heart[m];
  }

  location.replace(`#${s}`);

  setTimeout(changeUrlAnim, 150);
}

const clock = ['🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕙', '🕦', '🕚', '🕧', '🕛'];
titleI = 0;

function title() {
  if (titleI >= clock.length - 1) {
    titleI = 0
  } else {
    titleI++
  }
  document.querySelector('title').innerHTML = `rmnv.dev ${clock[titleI]} - Alexey Romanov Frontend developer`;

  setTimeout(title, 300);
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  textArea.className = 'copy__hidden';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

const init = () => {
  initCopyBlocks();
  changeUrlAnim();
  title();
};

init();