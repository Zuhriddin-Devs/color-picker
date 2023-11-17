document.addEventListener('DOMContentLoaded', function () {
    const elColorPicker = document.querySelector('#js-color-picker');
    const elColorCode = document.querySelector('#js-color-code');
    const elCopyButton = document.querySelector('#js-copy-btn');
    const elBody = document.querySelector('body');

    elColorPicker.addEventListener('input', function () {
        const selectedValue = elColorPicker.value;
        elBody.style.backgroundColor = selectedValue;
        elColorCode.innerText = selectedValue;
    });

    elCopyButton.addEventListener('click', function () {
        const range = document.createRange();
        range.selectNode(elColorCode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert(`Copied Successfully: ${elColorCode.textContent} HEX`);
    });
});