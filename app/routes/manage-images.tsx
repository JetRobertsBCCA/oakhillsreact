import React, { useState } from 'react';
import styles from './manage-images.module.scss';

const ManageImages = () => {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<string[]>([]);

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                const imageName = file.name;
                // Save the image data to the local images folder
                // This part is conceptual; actual file writing needs server-side logic
                setImages([...images, imageName]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = (imageName: string) => {
        // Remove the image from the local images folder
        // This part is conceptual; actual file deletion needs server-side logic
        setImages(images.filter((image) => image !== imageName));
    };

    return (
        <div className={styles.div1}>
            <h1 className={styles.header1}>Manage Images</h1>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className={styles.input1}
            />
            <button onClick={handleUpload} className={styles.button1}>
                Upload Image!!!
            </button>
            <ul className={styles.ul1}>
                {images.map((image, index) => (
                    <li key={index}>
                        {image}
                        <button onClick={() => handleDelete(image)} className={styles.button2}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageImages;
