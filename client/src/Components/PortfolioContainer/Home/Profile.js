import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com/account/about/?hl=en-US">
              <i className="fa fa-google-plus-circle"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/login">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
