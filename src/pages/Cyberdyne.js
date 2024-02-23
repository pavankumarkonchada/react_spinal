import React, { useState } from "react";
import Health from "../assets/Brain.jpg";
import "../styles/Monoplegia.css";

function Cyberdyne() {
  const [isDiabetic, setIsDiabetic] = useState("");

  const handleDiabeticChange = (event) => {
    setIsDiabetic(event.target.value);
  };

  return (
    <div className="Cyberdyne">
      <div className="BannerTop" style={{ backgroundImage: `url(${Health})` }}></div>

      <div className="Input_Area">
      <h2 style={{ textAlign: "center",textDecoration:"Underline" }}>Please Fill Out The Details</h2>

        {/* Personal Info */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{color:'white'}}>Personal Info</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" />
                </td>
                <td>
                  <label htmlFor="dob">DOB</label>
                  <input id="dob" type="date" />
                </td>
                <td>
                  <label htmlFor="sex">Sex</label>
                  <div>
                  <select id="sex"  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select></div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date">Date</label>
                  <input id="date" type="date" />
                </td>
                <td>
                  <label htmlFor="time">Time</label>
                  <input id="time" type="time" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diseases Enquiry */}
        <div style={{ marginBottom: "20px" }}>
          <h3>Diseases Enquiry</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="diabetic">Diabetic</label>
                  <input id="diabetic" type="text" value={isDiabetic} onChange={handleDiabeticChange} />
                </td>
                <td>
                  <label htmlFor="geneticDiseases">Genetic Diseases</label>
                  <input id="geneticDiseases" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="existingDiseases">Existing Diseases</label>
                  <input id="existingDiseases" type="text" />
                </td>
                <td>
                  <label htmlFor="therapist">Treatment</label>
                  <input id="therapist" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="testDuration">Test Duration</label>
                  <input id="testDuration" type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Center Pressure Parameter Details */}
        {/* <div>
          <h3>Center Pressure Parameter Details</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="distance">Distance</label>
                </td>
                <td>
                  <label htmlFor="m1">M1</label>
                  <input id="distanceM1" type="number" />
                </td>
                <td>
                  <label htmlFor="m2">M2</label>
                  <input id="distanceM2" type="number" />
                </td>
                <td>
                  <label htmlFor="m3">M3</label>
                  <input id="distanceM3" type="number" />
                </td>
                <td>
                  <label htmlFor="m4">M4</label>
                  <input id="distanceM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="medialLateralDisplacement">Medial-Lateral Displacement</label>
                </td>
                <td>

                  <input id="medialLateralDisplacementM1" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM2" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM3" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="anteriorPosteriorDisplacement">Anterior-Posterior Displacement</label>
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM1" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM2" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM3" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="swayArea">Sway Area</label>
                </td>
                <td>

                  <input id="swayAreaM1" type="number" />
                </td>
                <td>

                  <input id="swayAreaM2" type="number" />
                </td>
                <td>

                  <input id="swayAreaM3" type="number" />
                </td>
                <td>

                  <input id="swayAreaM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="averageVelocity">Average Velocity</label>
                </td>
                <td>
                  
                  <input id="averageVelocityM1" type="number" />
                </td>
                <td>
                  
                  <input id="averageVelocityM2" type="number" />
                </td>
                <td>
                 
                  <input id="averageVelocityM3" type="number" />
                </td>
                <td>

                  <input id="averageVelocityM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="weightDistribution">Weight Distribution</label>
                </td>
                <td>
                  
                  <input id="weightDistributionM1" type="number" />
                </td>
                <td>
                 
                  <input id="weightDistributionM2" type="number" />
                </td>
                <td>

                  <input id="weightDistributionM3" type="number" />
                </td>
                <td>
                  
                  <input id="weightDistributionM4" type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Cyberdyne;
