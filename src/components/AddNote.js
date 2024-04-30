import React, { useState } from 'react';

function AddNote({ handleAddNote, container }) {
  const [textNote, settextNote] = useState('');
  const [category, setcategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (event) => {
    settextNote(event.target.value);
  };

  const handleSaveClick = () => {
    if (category && category !== 'Choose...' && textNote !== '') {
      let imageUrl = 'https://via.placeholder.com/200';
      if (selectedImage) {
        imageUrl = URL.createObjectURL(selectedImage);
      }

      handleAddNote(textNote, category, imageUrl, container);

      settextNote('');
      setcategory('');
      setSelectedImage(null);
    } else {
      alert('Please select a category and provide text for the note.');
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="form-group">
          <textarea
            className="form-control"
            value={textNote}
            placeholder="Write here"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="col-6">
        <div className="form-group">
          <label htmlFor="inputGroupSelect01">Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="Choose...">Choose...</option>
            <option value="Meat">Meat</option>
            <option value="Fish">Fish</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Salads">Salads</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Breakfast">Breakfast</option>
          </select>
        </div>

        <div>
          {selectedImage && (
            <div>
              <img
                alt="not found"
                width={'100px'}
                height={'100px'}
                src={URL.createObjectURL(selectedImage)}
              />

              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <br />
          <br />
          <input
            className="input"
            type="file"
            id="inputGroupSelect01"
            name="myImage"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
