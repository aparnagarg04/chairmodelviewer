import React from 'react';

const ModelButton = ({ onClick, modelName }) => {
  return (
    <button className="model-button" onClick={() => onClick(modelName)}>
      {modelName}
    </button>
  );
};

export default ModelButton;
