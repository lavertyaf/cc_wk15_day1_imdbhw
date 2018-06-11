import React from 'react';
import Release from './Release';

const ReleasesList = (props) => {

  const releaseNodes = props.data.map(release => {
    return (
      <Release
        title={release.title}
        key={release.id}
        url={release.url}
        >
          {release.year}
        </Release>
    );
  })

  return (
    <div className="release-list">
      {releaseNodes}
    </div>
  );
}


export default ReleasesList;
