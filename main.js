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

function changeUrlAnim() {
  const run = '🏃';
  const runBack = '🏃‍➡';
  const gap = '-'
  const maxLen = 20;

  let gapLen = maxLen;
  let isBack = false;
  const interval = setInterval(() => {
    if (gapLen < 0) {
      isBack = true;
      gapLen++;
    } else if (gapLen > maxLen) {
      isBack = false;
      gapLen--;
    }

    const emoji = isBack ? runBack : run;
    urlHash = gap.repeat(gapLen) + emoji + gap.repeat(maxLen - gapLen);
    location.replace(`#${urlHash}`);
    isBack ? gapLen++ : gapLen--;
  }, 100)
}

// const clock = ['🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕙', '🕦', '🕚', '🕧', '🕛'];
// titleI = 0;

// function title() {
//   if (titleI >= clock.length - 1) {
//     titleI = 0
//   } else {
//     titleI++
//   }
//   document.querySelector('title').innerHTML = `rmnv.dev ${clock[titleI]} - Alexey Romanov Backend Go Developer`;

//   setTimeout(title, 300);
// }

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
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: Copying to clipboard was successful!');
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}

const init = () => {
  initCopyBlocks();
  changeUrlAnim();

  const gopher =
    '           ´.-::::::-.´\n' +
    '      .:-::::::::::::::-:.\n' +
    '      ´_:::    ::    :::_´\n' +
    '       .:( ^   :: ^   ):.\n' +
    '       ´:::   (..)   :::.\n' +
    '       ´:::::::UU:::::::´\n' +
    '       .::::::::::::::::.\n' +
    '       O::::::::::::::::O\n' +
    '       -::::::::::::::::-\n' +
    '       ´::::::::::::::::´\n' +
    '        .::::::::::::::.\n' +
    '          oO:::::::Oo';

  console.log(gopher)
  console.log('ʕ◔ϖ◔ʔ')
};

init();
