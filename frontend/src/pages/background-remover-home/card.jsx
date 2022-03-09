import React, {useRef, useState, useEffect} from "react";
import styles from "./bgremover.module.css";
import UploadPicImg from "../../utils/uploadimg.svg";
import {useDropzone} from "react-dropzone";
const Axios = require('axios');

function UploadPicCard() {
  const fileInputRef = useRef();
  const [image,setImage]=useState(null);
  const [afterimage,setafterImage]=useState(null);
  const [preview,setPreview]=useState("");
  const {getRootProps, getInputProps} = useDropzone({
    accept:"image/*",
    onDrop:(file)=>{
      if(file.length>1){
        setImage(null);
        return alert("Only one file can be uploaded at once");
      }else if(file[0].size>4999999){
        setImage(null);
        return alert("File size should be less than 5mb");
      }else{
        setImage(file[0]);
      }
    },
  });

  useEffect(()=>{
    if(afterimage){
      setPreview("data:image/png;base64," + afterimage);
    }else if(image){
      const reader = new FileReader();
      reader.onloadend = () =>{
        setPreview(reader.result);
        console.log(reader.result);
        Axios.post(`${process.env.REACT_BACKEND_URL}/api/upload`,{
        image:reader.result
        }).then((response)=>{
        console.log(response.data.image);
        setafterImage(response.data.image);
      });
    }
      reader.readAsDataURL(image);
    }else{
      setPreview(null);
    }
  }, [image, afterimage]);

  return (
    <div className={styles.holder} >
    <div>
    {preview ? (
      <div className={styles.Card} >
      <img
      src={preview}
      style={{objectFit:"cover", maxWidth:"80%", maxHeight:"75%"}}
      />
      <button
      onClick={()=>{
        setImage(null);
        setafterImage(null);
      }}
      >
      Remove image
      </button>
      {afterimage && (
        <a
                  href={`data:image/png;base64,${afterimage}`}
                  download={"Image.png"}
                  className={styles.downloadButton}
                  style={{ textDecoration: "none" }}
                >
                  Download Image
                </a>
      )
      }
      </div>
    ):(
      <div className={styles.Card} {...getRootProps()}>
      <img className={styles.uploadpicimg} src={UploadPicImg} />
      <p className={styles.cardtext}>File should be png, jpg and less than 5mb</p>
      <button type="submit" name="button"
      onClick={
        (event)=>{
          event.preventDefault();
          fileInputRef.current.click();
        }
      }>Upload Image<span>  &#8594;</span></button>
      <input type="file" style={{display:"none"}} ref={fileInputRef}
      accept="image/*"
      {...getInputProps()}
      onChange={
        (event) =>{
          const file=event.target.files[0];
          if(file){
            if(!file.type.includes("image")){
              setImage(null);
              return alert("File format must be .jpeg, .png, .jpg");
            }else if(file.size>4999999){
              setImage(null);
              return alert("File size should be less than 5mb");
            }else{
              setImage(file);
            }
          }else {
            setImage(null);
          }
        }
      }
       />
        <p className={styles.cardtext}>Or drop a file</p>

    </div>
  )}
    </div>
    </div>
  );
}

export default UploadPicCard;
