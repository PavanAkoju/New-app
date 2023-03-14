import React from 'react';

function DownloadButton(props) {
  const handleClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = props.fileUrl;
    downloadLink.download = props.fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleClick}>
      Download 
    </button>
  );
}

export default DownloadButton;
