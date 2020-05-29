import M from "materialize-css/dist/js/materialize.min.js";

function chooseAvatar() {
  // Choose the picture and set it as an avatar
  // Get the imgs
  let avatarImgs = document.getElementsByClassName("avatar-img");
  let modal = document.getElementById("modal1");

  for (let i = 0; i < avatarImgs.length; i++) {
    avatarImgs[i].addEventListener("click", function chooseImg() {
      let plusIcon = document.getElementsByClassName("img-icon")[0];
      let mainAvatar = document.getElementsByClassName("main-avatar")[0];
      plusIcon.style.display = "none";
      mainAvatar.style.filter = "unset";
      mainAvatar.src = avatarImgs[i].src;
      var instance = M.Modal.getInstance(modal);
      instance.close();
      return mainAvatar.src;
    });
  }
}

export default chooseAvatar;
