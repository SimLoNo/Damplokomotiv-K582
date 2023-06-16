window.onload = function() {
    // Adjust the video dimensions on page load
    adjustVideoSize();
  
    // Adjust the video dimensions on window resize
    window.addEventListener('resize', adjustVideoSize);
  };
  
  function adjustVideoSize() {
    var video = document.getElementById('video-background').querySelector('video');
    var videoContainer = document.getElementById('video-background');
  
    // Calculate the video dimensions
    var videoRatio = video.videoWidth / video.videoHeight;
    var windowRatio = window.innerWidth / window.innerHeight;
    var videoWidth, videoHeight;
  
    if (windowRatio > videoRatio) {
      videoWidth = window.innerWidth;
      videoHeight = videoWidth / videoRatio;
    } else {
      videoHeight = window.innerHeight;
      videoWidth = videoHeight * videoRatio;
    }
  
    // Apply the dimensions to the video container
    videoContainer.style.width = videoWidth + 'px';
    videoContainer.style.height = videoHeight + 'px';
  }
  