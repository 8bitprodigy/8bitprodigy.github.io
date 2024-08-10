function changeVideoSrc(target_video, new_video){
  var video_element = document.getElementById(target_video);
  video_element.src = 'videos/' + new_video + '.mp4';
  video_element.load();
}

function changeImgSrc(target_img, new_img){
  var img_element = document.getElementById(target_img);
  img_element.src = new_img;
  img_element.load();
}
