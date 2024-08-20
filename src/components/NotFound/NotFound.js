import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const err = useRouteError();

  return (<>
  <h1>{err.status} {err.statusText}</h1>
  <p>{err.data}</p>
  </>
  )
}

export default NotFound