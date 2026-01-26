document.getElementById('openDemo').addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});

document.getElementById('loadSample').addEventListener('click', () => {
  document.getElementById('preview').innerHTML = '<p>示例内容已加载</p>';
});
