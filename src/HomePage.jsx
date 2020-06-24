import React from "react";
import "./homepage.scss";
import DirrectoryList from "./components/directory-list/DirrectoryList.components";

export default function HomePage() {
  return (
    <div className="homepage">
      <DirrectoryList />
    </div>
  );
}
