import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState();

  const handleSubmit = (event: any) => {
    const url = "url-to-login";

    axios
      .post(url, values)
      .then((response) => {
        // 200 więc zrób coś z response
      })
      .catch((error) => {
        console.log(error);
        // jakiś redirect czy coś
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" />
      </label>
      <button type="submit" value="Wyślij" />
    </form>
  );
};

export default Form;
