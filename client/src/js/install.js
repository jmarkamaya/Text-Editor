const btnInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  btnInstall.classList.toggle('hidden', false);
});
btnInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  btnInstall.classList.toggle('hidden', true);
});
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});