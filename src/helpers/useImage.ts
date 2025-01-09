import { useEffect, useState } from "react";

function useImage (url: string) {
  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined);

  useEffect(() => {
    if (!url) return;

    const img = new Image();
    img.src = url;

    const onLoad = () => {
      setImage(img);
    };


    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [url]);

  return [image];
};

export default useImage;
