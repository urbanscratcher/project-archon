import { ImageProps } from "next/image";
import ImageWrap from "./ImageWrap";

// parent style should be relative
function ImageOverlayed({
  src,
  alt,
  className,
  overlayStyle,
  ...props
}: ImageProps & {
  className?: string;
  overlayStyle?: string;
}) {
  return (
    <>
      <div
        role="presentation"
        className={`-z-5 absolute inset-0 ${overlayStyle || "bg-gradient-to-tl from-y-700 to-black opacity-70"}`}
      ></div>
      <ImageWrap
        src={src}
        fill
        alt={alt}
        className={`absolute inset-0 -z-10 object-cover ${className || ""}`}
        {...props}
      />
    </>
  );
}

export default ImageOverlayed;
