import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <h1 style={{ color: "blue", fontFamily: "'Work Sans', sans-serif" }}>
        <a href="#">{props.fullName}</a>
      </h1>
      <h1
        style={{
          color: "white",
          textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
        }}
      >
        {props.bio}
      </h1>
      <h1>{props.profession}</h1>
      {props.children}
    </>
  );
};

Profile.defaultProps = {
  fullName: "baba",
  bio: "Cool",
  profession: "Engineer",
};

Profile.propTypes = {
  fullName: String,
  bio: String,
  profession: String,
};

export default Profile;
