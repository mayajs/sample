import React from "react";

interface ICssStyles {
  background: string;
  color: string;
  textAlign: "center";
  padding: string;
}

const styles: ICssStyles = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default function Header() {
  return (
    <header style={styles}>
      <h1>TodoList</h1>
    </header>
  );
}
