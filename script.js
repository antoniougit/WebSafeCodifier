function encodeText() {
  try {
    const input = document.getElementById('input'),
      output = document.getElementById('output'),
      checkWeb = document.getElementById('web'),
      checkXML = document.getElementById('xml'),
      checkNbsp = document.getElementById('nbsp'),
      checkBr = document.getElementById('br'),
      checkAll = document.getElementById('all');

    let encoded = input.value;

    if (encoded.trim() === '') {
      clearTexts();
      throw new Error('Input is empty');
    }

    if (checkWeb.checked) {
      if (encoded.includes('{')) {
        encoded = encoded
          .split('PersadoCode.init(')
          .pop()
          .replace(/\)\s*$/, '');
        eval('encoded = ' + encoded);
        encoded = btoa(JSON.stringify(encoded));
      } else {
        encoded = atob(encoded);
        if (encoded.includes('\\n')) {
          encoded = JSON.parse(encoded);
        } else {
          encoded = JSON.stringify(JSON.parse(encoded), null, 2);
        }
      }
    } else {
      const xmlMap = {
        0x3c: '&lt;',
        0x3e: '&gt;',
        0x22: '&quot;',
        0x26: '&amp;',
        0x27: '&apos;',
      };

      encoded = encoded.replace(
        /([\u0000-\uD799]|[\uD800-\uDBFF][\uDC00-\uFFFF])/g,
        function (c) {
          let c1 = c.charCodeAt(0);
          if (!checkAll.checked) {
            if (c1 === 0x20) return checkNbsp.checked ? '&nbsp;' : c;
            if (c1 === 0x0a) return checkBr.checked ? '<br />' : c;
            if (checkXML.checked && xmlMap[c1]) return xmlMap[c1];
          }
          if (c1 >= 0x20 && c1 <= 0x7e) return c;
          else if (c.length === 1) return `&#x${c1.toString(16)};`;
          else if (c.length === 2 && c1 >= 0xd800 && c1 <= 0xdbff)
            return `&#x${(
              (c1 - 0xd800) * 0x400 +
              c.charCodeAt(1) -
              0xdc00 +
              0x10000
            ).toString(16)};`;
          else return '';
        }
      );
    }

    output.value = encoded;
    document.getElementById('inputCounter').textContent =
      input.value.length + ' chars';
    document.getElementById('outputCounter').textContent =
      output.value.length + ' chars';
  } catch (error) {
    clearTexts();
    if (error.message.includes('atob')) {
      alert('Invalid Standalone config');
    } else {
      alert(error.message);
    }
  }
}

function encodeOnInput() {
  encodeText();
}

function onCheckboxChange() {
  encodeText();
}

function clearTexts() {
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
  document.getElementById('inputCounter').textContent = '0 chars';
  document.getElementById('outputCounter').textContent = '0 chars';
  uncheckAllCheckboxes();
}

function uncheckAllCheckboxes() {
  const checkboxes = document.querySelectorAll('.checkbox-input');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

document
  .getElementById('input')
  .addEventListener('input', encodeOnInput, false);

const checkboxes = document.querySelectorAll('.checkbox-input');
for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', onCheckboxChange);
}

clearTexts();
