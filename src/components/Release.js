import React from 'react';

const Release = (props) => {
  return (
    <div className="release">
      <a href={props.url}>
        <h1 className="release-title">
          {props.title}
        </h1>
        {props.children}
      </a>

    </div>
  );
}


export default Release;
