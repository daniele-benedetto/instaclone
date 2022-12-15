import React from 'react';

const ObjDebug = ({values}) => {
  return (
    <pre>
      <code>
        {JSON.stringify(values, undefined, 2)}
      </code>
    </pre>
  );
}

export default ObjDebug;
