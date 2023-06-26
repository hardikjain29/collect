import React, { useState } from 'react';

function DragAndDrop({ onFileUpload }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonData = JSON.parse(event.target.result);
        onFileUpload(jsonData);
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {!isDragOver ? (
        <h2>Drag and Drop the invoice.json file here</h2>
      ) : (
        <h2>Release to upload the file</h2>
      )}
    </div>
  );
}

export default DragAndDrop;
