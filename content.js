document.addEventListener("keydown", function (event) {
  const video = document.querySelector("video");
  if (!video) return;

  if (event.key === "]") {
    video.playbackRate = Math.min(video.playbackRate + 0.5, 16);
  } else if (event.key === "[") {
    video.playbackRate = Math.max(video.playbackRate - 0.5, 0.1);
  } else if (event.key === "e") {
    // Find and click the Like button
    const likeButton = document.querySelector('.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start');
    if (likeButton) {
      likeButton.click();
    }
  }
});

