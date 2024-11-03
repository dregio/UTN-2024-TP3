import { useRouteError } from "react-router-dom";
import React from 'react'

function Error() {
  const error = useRouteError();
  console.error({ error });
  return (
    <div>
      <h1> Error </h1>
      <p> Ha ocurrido un error. Se ha notificado a nuestros ingenieros, que ya están trabajando en ello. </p>
      <p> Mensaje: {error.statusText || error.message} </p>
      {error.status ? <p> Tipo de error: {error.status} </p> : ''}
    </div>
  );
}

export default Error;
