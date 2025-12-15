chrome.storage.sync.get(["enabled"], data => {
  if (data.enabled === false) return;

  function unmute(video) {
    video.muted = false;
    video.volume = 1;
  }

  const observer = new MutationObserver(() => {
    document.querySelectorAll("video").forEach(unmute);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
