const form = document.querySelector('#generate-form');
const qrcode = document.querySelector('#qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;
  if (url === '') {
    alert('Please Enter a URL');
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
      setTimeout(() => {
        const saveUrl = qrcode.querySelector('img').src;
        console.log(saveUrl);
        createSaveBtn(saveUrl);
      }, 100);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};
setTimeout(() => {
  hideSpinner();
  setTimeout;
}, 1000);
const showSpinner = () => {
  document.querySelector('#spinner').classList.remove('hidden');
};
const hideSpinner = () => {
  document.querySelector('#spinner').classList.add('hidden');
};
const clearUI = () => {
  qrcode.innerHTML = '';
  const saveLink = document.querySelector('#save-link');
  if (saveLink) {
    saveLink.remove();
  }
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-red-500 hover:bg-green-500 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
};

form.addEventListener('submit', onGenerateSubmit);
