import Image from 'next/image';

import React, { useState } from "react";

import styles from "../styles/Gallery.module.css";

export default function Gallery(props) {

    // onClick method changes the main image to the thumbnail clicked
    let [main, setImage] = useState(props.images[1]);

    return (
        <section className={styles.gallery}>

            <div>
                <Image src={main} alt="Pic" />
            </div>

            <div className={styles.thumbnails}>
                {props.images.map((image) => (
                    <div className={styles.thumbnail} onClick={() => setImage(image)}>
                        <Image src={image} alt="Pic"/>
                    </div>
                ))}
            </div>

        </section>
    );

}