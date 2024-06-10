"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

function ImageWrap({ src, ...props }: ImageProps) {
  const [source, setSource] = useState(src);

  return (
    <Image
      className="bg-g-200"
      src={source}
      {...props}
      alt={props.alt}
      onError={() =>
        setSource(
          "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709296466/thumbnails/default_qngnrr4fipb41powwn4u.jpg",
        )
      }
    />
  );
}

export default ImageWrap;
