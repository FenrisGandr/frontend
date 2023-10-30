import React from "react";
import SecondOpinionSection from "./SecondOpinionSection";

function SecondOpinionCenter({ radiologists }) {
  return (
    <>
      {radiologists.map((item, _index) => {
        return (
          <SecondOpinionSection
            key={item.uid}
            picture={item.profile_image_url}
            doctorAndTitle={
              item.title + " " + item.first_name + " " + item.last_name
            }
            specialization={item.expertise}
            bio={item.bio}
          />
        );
      })}
    </>
  );
}

export default SecondOpinionCenter;
