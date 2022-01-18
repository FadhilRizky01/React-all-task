import React, { useState } from "react";

const FunctionalComponent = () => {
  const [hitung, setHitung] = useState(0);
  return (
    <div>
      <h3>Komponen ini dibuat dengan Functional Komponen </h3>
      <p>You clicked {hitung} times</p>
      <button onClick={() => setHitung(hitung + 1)}>Click ME</button>
      <p></p>
    </div>
  );
};

export default FunctionalComponent;
