import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
function Termes() {
  const [checked, setChecked] = useState(true);
  const handleClick = () => setChecked(!checked);
  const alertSubmit = () => {
    if (checked) {
      alert("Thanks for agreeing, enjoy your stay here");
    } else {
      alert("Error");
    }
  };
  return (
    <>
      <Layout pageTitle="Termes">
        <h1>Termes of use</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div>
          <input
            type="checkbox"
            id="termes"
            name="termes"
            onChange={handleClick}
            checked={checked}
          />
          <label>I accept the termes</label>
          <div>{""}</div>
          <button type="submit" onClick={alertSubmit}>
            OK
          </button>
        </div>
      </Layout>
    </>
  );
}

export default Termes;
