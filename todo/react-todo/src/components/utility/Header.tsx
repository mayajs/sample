import React, { CSSProperties } from "react";

const styles: CSSProperties = {
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
