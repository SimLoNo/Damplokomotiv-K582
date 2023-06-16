$(document).ready(function() {
    // Adjust the video dimensions on page load
    adjustVideoSize();
  
    // Adjust the video dimensions on window resize
    $(window).on('resize', adjustVideoSize);
  });
  
  function adjustVideoSize() {
    var video = $('#video-background video');
    var videoContainer = $('#video-background');
  
    // Calculate the video dimensions
    var videoRatio = video.width() / video.height();
    var windowRatio = $(window).width() / $(window).height();
    var videoWidth, videoHeight;
  
    if (windowRatio > videoRatio) {
      videoWidth = $(window).width();
      videoHeight = videoWidth / videoRatio;
    } else {
      videoHeight = $(window).height();
      videoWidth = videoHeight * videoRatio;
    }
  
    // Apply the dimensions to the video container
    videoContainer.css({
      width: videoWidth,
      height: videoHeight
    });
  }
  