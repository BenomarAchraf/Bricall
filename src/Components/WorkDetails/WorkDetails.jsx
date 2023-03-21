import React, { useState } from "react";
import axios from 'axios';
import './WorkDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


export default function WorkDetails() {
    const [imagePath, setImagePath] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigateTo = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleCategoryChange = (e) => {
        setCategory(e.target.value);
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      };
    
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = new FormData();
        data.append("name", name);
        data.append("category", category);
        data.append("image", image);
        data.append("description", description);
    
        axios.post("http://localhost:8080/works", data)
          .then(() => {
            // Rediriger vers la page de profil de l'utilisateur
            navigateTo.push("/profile");
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <div className="workpage-container">
    <h1 className="worktitle">Add Work</h1>
    <h2 className="worksubtitle">Submit your work here</h2>
    <div className="workform-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='worklabel'>Name</label>
        <input className='workinput' type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        <label htmlFor="category" className='worklabel'>Category</label>
        <input className='workinput' type="text" id="category" name="category" value={category} onChange={handleCategoryChange} />
        <div>
          <label htmlFor="image" className='worklabel'>
            Upload image
            <FontAwesomeIcon icon={faCamera} className='camera-icon'/>
          </label>
          <input className='workinput' type="file" id="image" onChange={handleImageUpload} name="image" accept="image/*" />
          {image && <img className='workinput image-preview' src={image} alt="Preview" />}
        </div>
        <label htmlFor="description" className='worklabel'>Description</label>
        <textarea id="description" name="description" className='workinput1' value={description} onChange={handleDescriptionChange}></textarea>
        <button type="submit" className='worksubmit'> Submit </button>
      </form>
    </div>
  </div>
  );
  }
