import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from '../styles/profile.module.css';

const ImageUpload = ({ uploadImg }) => {
  const token = process.env.NEXT_PUBLIC_CLOUDINARY_TOKEN;
  const [imgFile, setImgFile] = useState(null);
  const imageUpload = (e) => {
    let imageFile = e.target.files[0];
    let imagePreset = new FormData();
    imagePreset.append("file", imageFile);
    imagePreset.append("upload_preset", "IsellApp");
    setImgFile(imagePreset);
  };

  const postToCloude = async () => {
    try {
      if (imgFile !== null) {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${token}/image/upload`, imgFile);
        uploadImg({
          target: {
            name: "imageUrl",
            value: response.data.secure_url,
          },
        });
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    postToCloude();
  }, [imgFile]);

  return (
    <div>
      <label htmlFor="files" className={styles.file}> Select Image </label>
      <input id="files" type="file" style={{ visibility: "hidden" }} onChange={imageUpload} />
    </div>
  )
}

export default ImageUpload;