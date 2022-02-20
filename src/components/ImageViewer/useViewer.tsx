import { useState, useEffect } from "react";

const ESCAPE_KEY_CODE = 27;
export const useViewer = () => {
  const [show, setShow] = useState(false);

  const showViewer = () => {
    setShow(true);
  };

  const dontClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const closeViewer = () => {
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === ESCAPE_KEY_CODE) closeViewer();
    });

    if (show === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return {
    show,
    showViewer,
    dontClose,
    closeViewer,
  };
};
