import React, { useState } from 'react';

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
        setImages(images.filter(image => image !== imageName));
    };

    return (
        <div>
            <h1>Manage Images</h1>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <button onClick={handleUpload}>Upload</button>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        {image}
                        <button onClick={() => handleDelete(image)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageImages;
