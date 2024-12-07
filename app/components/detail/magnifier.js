import React, { useState } from 'react';

function ImageMagnifier({
    showMagnifier,
    setShowMagnifier,
    selectedImage,
    magnifierHeight = 180,
    magnifierWidth = 180,
    zoomLevel = 1.2
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            <img
                src={selectedImage}
                className='w-full h-[50rem] object-contain relative z-0'
                onMouseEnter={(e) => {
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onMouseLeave={() => setShowMagnifier(false)}
                alt="Magnified"
            />
            {showMagnifier && (
                <div
                    style={{
                        position: "absolute",
                        pointerEvents: "none",
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${selectedImage}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                        zIndex: 20
                    }}
                ></div>
            )}
        </div>
    );
}

export default ImageMagnifier;
