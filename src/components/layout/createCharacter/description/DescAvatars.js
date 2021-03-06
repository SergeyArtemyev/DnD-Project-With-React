import React, { useEffect, useState, useContext } from "react";
import chooseAvatar from "../../../../js/chooseAvatar";
import BackgroundContext from "../../../../context/Background/backgroundContext";

const DescAvatars = () => {
  const backgroundContext = useContext(BackgroundContext);
  const { getAvatar } = backgroundContext;
  const [mainAvatar, setMainAvatar] = useState(require("../../../../img/avatars/avatar.png"));
  useEffect(() => {
    chooseAvatar();
    getAvatar(mainAvatar);
    // eslint-disable-next-line
  }, [mainAvatar]);

  const onClick = () => {
    let avatar = document.querySelector(".main-avatar").src;
    setMainAvatar(avatar);
  };

  return (
    <div className="row">
      <div className="col m6 offset-m3 s10 offset-s2 ">
        <div className="row">
          {/* Modal Trigger */}
          <a className="modal-trigger avatar col l2 m3 s3" href="#modal1">
            <img className="main-avatar" src={mainAvatar} alt="avatar" />
            <i className="material-icons img-icon">add</i>
            <input
              name="avatar"
              type="text"
              value={mainAvatar}
              style={{ visibility: "hidden" }}
              readOnly
            ></input>
          </a>
          <div className="input-field col l9 m9 s8">
            <input
              placeholder="Write your name"
              id="char_name"
              name="charName"
              type="text"
              className="validate"
            />
            <label htmlFor="char_name">Character Name</label>
          </div>
        </div>
      </div>

      {/* Modal Structure */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="center-align">Choose Your Avatar</h4>
          </div>
          <div className="modal-body">
            {/* Human row  */}
            <div className="row mb-1">
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/human/human1.png")}
                  alt="human avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/human/human2.jpeg")}
                  alt="human avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/human/human3.jpeg")}
                  alt="human avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/human/human4.jpeg")}
                  alt="human avatar"
                />
              </div>
            </div>
            {/* Elf row */}
            <div className="row mb-1">
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/elf/elf1.png")}
                  alt="elf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/elf/elf2.png")}
                  alt="elf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/elf/elf3.jpeg")}
                  alt="elf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/elf/elf4.jpeg")}
                  alt="elf avatar"
                />
              </div>
            </div>
            {/* Halfling row */}
            <div className="row mb-1">
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/halfling/halfling1.jpeg")}
                  alt="halfling avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/halfling/halfling2.png")}
                  alt="halfling avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/halfling/halfling3.png")}
                  alt="halfling avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/halfling/halfling4.jpeg")}
                  alt="halfling avatar"
                />
              </div>
            </div>
            {/* Halfling row */}
            <div className="row mb-1">
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/dwarf/dwarf1.png")}
                  alt="dwarf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/dwarf/dwarf2.png")}
                  alt="dwarf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/dwarf/dwarf3.png")}
                  alt="dwarf avatar"
                />
              </div>
              <div className="col s3">
                <img
                  onClick={onClick}
                  className="avatar-img"
                  src={require("../../../../img/avatars/dwarf/dwarf4.png")}
                  alt="dwarf avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescAvatars;
