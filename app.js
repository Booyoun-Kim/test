const actionButton = document.getElementById('actionButton');

actionButton.addEventListener('click', () => {
    alert("Good11");
});

// window.Telegram.WebApp

// getCSSVariable('--tg-theme-bg-color')
// window.getComputedStyle(document.documentElement).getPropertyValue('--tg-theme-bg-color');
function getCSSVariable(variable) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
}

// #consoleMessage 에 텍스트 추가
function appendConsoleMessage(message) {
    const consoleMessage = document.getElementById('consoleMessage');
    consoleMessage.innerHTML += message + '<br>';
}

let themeBgColor = getCSSVariable('--tg-theme-bg-color');
let themeSecondaryBgColor = getCSSVariable('--tg-theme-secondary-bg-color');

appendConsoleMessage("테스트111");
appendConsoleMessage(themeBgColor);
appendConsoleMessage(themeSecondaryBgColor);

// html 배경에 var(--tg-theme-secondary-bg-color) 색상 적용
document.documentElement.style.backgroundColor = themeSecondaryBgColor;

// window.Telegram.WebApp MainButton
window.Telegram.WebApp.MainButton.text = "테스트 버튼12345";
window.Telegram.WebApp.MainButton.show();

window.Telegram.WebApp.isExpanded = true;