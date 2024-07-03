const actionButton = document.getElementById('actionButton');
actionButton.addEventListener('click', () => {
    window.Telegram.WebApp.impactOccurred("medium");
    window.Telegram.WebApp.showAlert("Good22");
    // alert("Good11");
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

// function darkenColor: 색상 어둡게 만들기
function darkenColor(color, percent) {
    let num = parseInt(color.slice(1), 16);
    let amt = Math.round(2.55 * percent);
    let R = (num >> 16) + amt;
    let B = (num >> 8 & 0x00FF) + amt;
    let G = (num & 0x0000FF) + amt;

    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}

if (themeBgColor === themeSecondaryBgColor || themeBgColor !== undefined) {
    // document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', darkenColor(themeBgColor, 2.3))
    document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', darkenColor(themeBgColor, 10));
}

// html 배경에 var(--tg-theme-secondary-bg-color) 색상 적용
document.documentElement.style.backgroundColor = themeSecondaryBgColor;

// window.Telegram.WebApp MainButton
window.Telegram.WebApp.MainButton.text = "테스트 버튼6789";
window.Telegram.WebApp.MainButton.show();

const scanButton = document.getElementById('scanButton');
scanButton.addEventListener('click', () => {
    window.Telegram.WebApp.showScanQrPopup("test9870", function() {
        appendConsoleMessage("scan qr popup");

        // 5초 후에 닫기
        setTimeout(() => {
            window.Telegram.WebApp.closeScanQrPopup();
        }, 5000);
    });
});

const klipLinkButton = document.getElementById('klipLinkButton');
klipLinkButton.addEventListener('click', () => {
    // window.Telegram.WebApp.openLink("kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=b4266533-a290-4fae-b3d6-64454c169812");
    window.Telegram.WebApp.openLink("https://klipwallet.com/?target=/a2a?request_key=b4266533-a290-4fae-b3d6-64454c169812");
});

window.Telegram.WebApp.expand();