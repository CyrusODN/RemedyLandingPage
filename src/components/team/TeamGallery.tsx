import React from "react";
import TeamGallerySlider from "./TeamGallerySlider";

export default function TeamGallery({ selectedMember, setSelectedMember }) {
  return (
    <div className="px-8">
      <TeamGallerySlider
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </div>
  );
}
