const vscodeTabs = document.querySelectorAll('.vscode-tab');
const editor = document.getElementById('editor');
const resultFrame = document.getElementById('result');

// Начальные значения
let htmlCode = `<div class="card">
  <h1>Anton Ptah</h1>
  <h2>Frontend-developer</h2>
  <h3>The site is still under development! This is a very early version — and not a pretty one yet. Sorry about that!</h3>
  <ul>
    <li>Email: <a href="mailto:anton@ptah.lol">anton@ptah.lol</a></li>
    <li>Telegram: <a href="https://t.me/ptah_9" target="_blank"
>@Ptah_9</a></li>
  </ul>
</div>`;
let cssCode = `body { background: #f4f4f4; }
.card {
  font-family: consolas;
  background: #fff;
  max-width: 350px;
  margin: 60px auto;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
}
.card h1 { margin-top: 0; font-size: 2em; color: #333; }
.card ul { list-style: none; padding: 0; }
.card li { margin: 12px 0; font-size: 1.1em; }
.card a { color: #0077cc; text-decoration: none; }
.card h3 { color: red; }
`;

let currentTab = 'html';

// Функция обновления предпросмотра
function updatePreview() {
    const doc = `
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<style>${cssCode}</style>
</head>
<body>
${htmlCode}
</body>
</html>
    `;
    resultFrame.srcdoc = doc;
}

// Функция обновления textarea при переключении вкладок
function updateEditor() {
    if (currentTab === 'html') {
        editor.value = htmlCode;
    } else {
        editor.value = cssCode;
    }
}

// Слушатель ввода
editor.addEventListener('input', () => {
    if (currentTab === 'html') {
        htmlCode = editor.value;
    } else {
        cssCode = editor.value;
    }
    updatePreview();
});

// Слушатель вкладок
vscodeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        vscodeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTab = tab.dataset.tab;
        updateEditor();
    });
});

// Инициализация
updateEditor();
updatePreview();