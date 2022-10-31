import React from "react";

export default function Image({ src, alt, className, ...rest }) {
  return (
    <>
      <img src={src} alt={alt} className={className} {...rest} />
    </>
  );
}
