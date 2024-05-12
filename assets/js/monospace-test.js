const chooseSelect = document.getElementById('fontselect');
const previewElement = document.getElementById('fontpreview');

// 字体列表
const fonts = [
  "Cascadia Code",
  "Consolas",
  "Courier New",
  "DejaVu Sans Mono",
  "Droid Sans Mono",
  "Fira Code",
  "Hack",
  "Inconsolata",
  "Intel One Mono",
  "JetBrains Mono",
  "Lucida Console",
  "Menlo",
  "Monaco",
  "Monalisa",
  "Noto Sans Mono",
  "Noto Sans Mono CJK SC",
  "PT Mono",
  "Roboto Mono",
  "SF Mono",
  "Source Code Pro",
  "Source Han Mono SC",
  "Source Han Sans HW SC",
  "Sarasa Mono SC",
  "Iosevka",
  "Ubuntu Mono",
  "Ubuntu Sans Mono",
  "Wenquanyi Micro Hei Mono"
];

// 将字体按字母顺序排序
fonts.sort();

// 填充下拉选框
for (const font of fonts) {
  const option = document.createElement('option');
  option.value = font;
  option.textContent = font;
  chooseSelect.appendChild(option);
}

// 监听下拉选框变化
chooseSelect.addEventListener('change', function() {
  const selectedFont = this.value;
  previewElement.style.fontFamily = `${selectedFont}, monospace`;
});