import React, { useState } from "react";
import "./WorkDetails.css";
import Creatable from "react-select/creatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const roles = [
  { label: "gardening", value: 1 },
  { label: "Carpentry", value: 2 },
  { label: "electricity", value: 3 },
  { label: "plumbing", value: 4 },
  { label: "tapestry", value: 5 },
  { label: "plastering", value: 6 },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
};

const WorkDetails = (props) => {
  const [name, setName] = useState("");
  const [roleValue, setRoleValue] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [tagValue, setTagValue] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (field, value) => {
    switch (field) {
      case "roles":
        setRoleValue(value);
        break;

      case "tags":
        setTagValue(value);
        break;

      default:
        break;
    }
  };

  const handleKeyDown = (event) => {
    if (!tagInputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setTagValue([...tagValue, createOption(tagInputValue)]);
        setTagInputValue("");
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleInputChange = (value) => {
    setTagInputValue(value);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("/api/v1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setImageUrl(data.imageUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/v1/addWork', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category })
    })
      .then(response => response.json())
      .then(data => {
        // Show the success message to the user
        alert('Work added successfully!');
        // Navigate back to the profile page
        props.history.push('/profile');
      })
      .catch(error => console.error(error));
  };
  return (
    <div className="workpage-container">
      <h1 className="worktitle">Add Work</h1>
      <h2 className="worksubtitle">Submit your work here</h2>
      <div className="workform-container">
        <div>
          <label className="worklabel">Name</label>
          <input
            type="text"
            className="workinput"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label className="worklabel">Category</label>
          <Creatable
            isClearable
            isMulti
            onChange={(value) => handleChange("roles", value)}
            options={roles}
            value={roleValue}
            styles={customStyles}
          />
        </div>
      <div className="exception" >
      <label htmlFor="image-upload" className="worklabel">
        <i className="fas fa-upload"   >
        <FontAwesomeIcon icon={faCamera} className='camera-icon'/>
        </i>
          Upload image    
 </label>
          <input
        type="file"
        id="image-upload"
        accept="image/*"
        className="workinput" 

        onChange={handleFileSelect}

      />
       {imageUrl && (
    <img src={imageUrl} alt="Preview" className="image-preview" onChange={handleFileUpload} />
  )}
        
      </div>

      <div >
        <label className="worklabel">Tag(s)</label>
        <Creatable
          isClearable
          isMulti
          components={
            { DropdownIndicator: null }
          }
          inputValue={tagInputValue}
          menuIsOpen={false}
          onChange={(value) => handleChange('tags', value)}
          placeholder='Type something and press enter...'
          onKeyDown={handleKeyDown}
          onInputChange={handleInputChange}
          value={tagValue}
        />
      </div>

      

      <div >
        <button className="worksubmitbutton" onChange={handleSubmit}>Submit</button>
      </div>
    </div>
  </div>


)
}

  export default WorkDetails;

