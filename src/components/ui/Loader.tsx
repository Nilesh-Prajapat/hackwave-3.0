import React from "react";

const dotStyle: React.CSSProperties = {
  display: "inline-block",
  width: 18,
  height: 18,
  margin: "0 6px",
  borderRadius: "50%",
  background: "#F52222",
  animation: "bounce 0.8s infinite alternate ease-in-out",
};

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fcf2e8",
      zIndex: 9999,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
    }}
  >
    <style>{`
      @keyframes bounce {
        0% { transform: translateY(0); opacity: 0.5; }
        100% { transform: translateY(-24px); opacity: 1; }
      }
    `}</style>
    <span style={{ ...dotStyle, background: "#F52222", animationDelay: "0s" }} />
    <span
      style={{ ...dotStyle, background: "#141414", animationDelay: "0.2s" }}
    />
    <span
      style={{ ...dotStyle, background: "#F52222", animationDelay: "0.4s" }}
    />
  </div>
);

export default Loader;
