import React, { useEffect, useState } from 'react';

interface CarouselProps {
    images: Array<string>;
    children?: React.ReactNode;
    className?: string;
    timing?: number;
}

function cx(...name: unknown[]) {
    return name.filter(Boolean).map(String).join(' ') || undefined;
}

/**
 * This carousel simply show next image after timming (ms) pass with fading out effect.
 *
 * @param {string[]}        images    - required - The list of image URLs
 * @param {string}          className - option   - Css class
 * @param {timming}         number    - option   - Show-time of each image (ms). Default is 3000ms
 * @param {React.ReactNode} children  - option   - ReactNode 
 */
function Carousel({ images, children, className, timing = 3000 }: CarouselProps) {
    const [imageIndices, setIndices] = useState([0, 0]); // [previous, current]

    useEffect(() => {
        const id = setTimeout(() => {
            const [_, current] = imageIndices;
            if (current + 1 >= images.length) {
                setIndices([current, 0]);
            } else {
                setIndices([current, current + 1]);
            }
        }, timing);
        return () => {
            clearTimeout(id);
        };
    }, [imageIndices, timing, images.length]);

    const foto = (images[0])
    console.log(images[0])

    return (
        <div className={cx('relative', className)}>
            {images.map((image, i) => (
                <img
                    key={image}
                    src={foto}
                    // style={{ backgroundImage: `url(${image})` }}
                    className={cx(
                        'z-0 w-full h-full absolute top-0 left-0 bg-cover bg-center',
                        i == imageIndices[0] && 'z-20 opacity-0 transition-opacity ease-in-out duration-1000',
                        i == imageIndices[1] && 'z-10',
                    )}
                />
            ))}
            {children}
        </div>
    );
}

export default Carousel;
