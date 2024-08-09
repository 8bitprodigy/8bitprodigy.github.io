function changeVideoSrc(target_video, new_video){
  var video_element = document.getElementById(target_video)
  video_element.src = 'videos/' + new_video + '.mp4';
  video_element.load();
}
