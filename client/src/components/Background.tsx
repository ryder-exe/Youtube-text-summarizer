import { useEffect, useRef } from "react";
import "../stylesheet/background.css";

function Background() {
  const blobRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // const cursor = document.querySelector('.blob') as HTMLElement;
    const cursor = blobRef.current;
    const updateCursorPosition = (e: MouseEvent) => {
      if (cursor) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(calc(${x}px - 120%), calc(${y}px - 120%), 0)`;
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="blobbody">
      <div ref={blobRef} className="blob"></div>
    </div>
  );
}

export default Background;
