import React from "react";

function Button({ href, children }) {
  return (
    <a href={href} className="button">
      {children}
    </a>
  );
}

export default Button;
