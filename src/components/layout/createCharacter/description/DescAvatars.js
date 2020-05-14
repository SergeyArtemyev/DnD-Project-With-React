import React from "react";

const DescAvatars = () => {
  return (
    <div className="row">
      <div className="col s4 offset-s4">
        <div className="row">
          {/* Modal Trigger */}
          <a className="modal-trigger avatar col s3" href="#modal1">
            <img src={require("../../../../img/avatars/avatar.png")} alt="avatar" />
            <i className="material-icons img-icon">add</i>
          </a>
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
                      className="avatar-img"
                      src={require("../../../../img/avatars/human/human1.png")}
                      alt="human avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/human/human2.jpeg")}
                      alt="human avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/human/human3.jpeg")}
                      alt="human avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
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
                      className="avatar-img"
                      src={require("../../../../img/avatars/elf/elf1.png")}
                      alt="elf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/elf/elf2.png")}
                      alt="elf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/elf/elf3.jpeg")}
                      alt="elf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
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
                      className="avatar-img"
                      src={require("../../../../img/avatars/halfling/halfling1.jpeg")}
                      alt="halfling avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/halfling/halfling2.png")}
                      alt="halfling avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/halfling/halfling3.png")}
                      alt="halfling avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
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
                      className="avatar-img"
                      src={require("../../../../img/avatars/dwarf/dwarf1.png")}
                      alt="dwarf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/dwarf/dwarf2.png")}
                      alt="dwarf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/dwarf/dwarf3.png")}
                      alt="dwarf avatar"
                    />
                  </div>
                  <div className="col s3">
                    <img
                      className="avatar-img"
                      src={require("../../../../img/avatars/dwarf/dwarf4.png")}
                      alt="dwarf avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-field col s9">
            <input placeholder="Write your name" id="char_name" type="text" className="validate" />
            <label htmlFor="char_name">Character Name</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescAvatars;
