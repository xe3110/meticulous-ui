const downloadFile = (url, filename) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || url.split('/').pop() || 'download';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default downloadFile;
