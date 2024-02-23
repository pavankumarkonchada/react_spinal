import React, { useState } from "react";
import Health from "../assets/Brain.jpg";
import "../styles/Monoplegia.css";

function Plabo() {
  const [isDiabetic, setIsDiabetic] = useState("");

  const handleDiabeticChange = (event) => {
    setIsDiabetic(event.target.value);
  };

  return (
    <div className="Cyberdyne">
      <div className="BannerTop" style={{ backgroundImage: `url(${Health})` }}></div>

      <div className="Input_Area">
      <h2 style={{ textAlign: "center" }}>Please Fill Out The Details</h2>

        {/* Personal Info */}
        <div style={{ marginBottom: "20px" }}>
          <h3>Personal Info</h3>
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
                  <label htmlFor="date">Date</label>
                  <input id="date" type="date" />
                </td>
                <td>
                  <label htmlFor="time">Time</label>
                  <input id="time" type="time" />
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
                  <input id="diabetic" type="text"  />
                </td>
                <td>
                  <label htmlFor="geneticDiseases">Genetic Diseases</label>
                  <input id="geneticDiseases" type="text" />
                </td>
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
                <td>
                  <label htmlFor="Steps">Number Of Evaluated Steps</label>
                  <input id="Steps" type="text" />
                </td>
                <td>
                  <label htmlFor="Distance">Distance</label>
                  <input id="Distance" type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Center Pressure Parameter Details */}

<div>
  <h3>Center Pressure Parameter Details</h3>
  <table style={{ width: "100%" }}>
    <tbody>
      <tr>
        <td>
          <label htmlFor="Velocity">Gait velocity</label>
        </td>
        <td>
          <label htmlFor="Mean">Mean</label>
          <input id="velocityMean" type="number" />
        </td>
        <td>
          <label htmlFor="deviation">Standard deviation</label>
          <input id="velocitydeviation" type="number" />
        </td>
        <td>
          <label htmlFor="Maxinum">Maxinum</label>
          <input id="velocityMaximum" type="number" />
        </td>
        <td>
          <label htmlFor="Minimum">Minimum</label>
          <input id="velocityMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="cadence">Cadence</label>
        </td>
        <td>
          <input id="cadenceMean" type="number" />
        </td>
        <td>
          <input id="cadencedeviation" type="number" />
        </td>
        <td>
          <input id="cadenceMaximum" type="number" />
        </td>
        <td>
          <input id="cadenceMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="strideLength">Stride Length</label>
        </td>
        <td>
          <input id="strideLengthMean" type="number" />
        </td>
        <td>
          <input id="strideLengthDeviation" type="number" />
        </td>
        <td>
          <input id="strideLengthMaximum" type="number" />
        </td>
        <td>
          <input id="strideLengthMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="cycleDuration">Cycle Duration</label>
        </td>
        <td>
          <input id="cycleDurationMean" type="number" />
        </td>
        <td>
          <input id="cycleDurationDeviation" type="number" />
        </td>
        <td>
          <input id="cycleDurationMaximum" type="number" />
        </td>
        <td>
          <input id="cycleDurationMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="stancePhase">Stance Phase</label>
        </td>
        <td>
          <input id="stancePhaseMean" type="number" />
        </td>
        <td>
          <input id="stancePhaseDeviation" type="number" />
        </td>
        <td>
          <input id="stancePhaseMaximum" type="number" />
        </td>
        <td>
          <input id="stancePhaseMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="loadingResponse">Loading Response</label>
        </td>
        <td>
          <input id="loadingResponseMean" type="number" />
        </td>
        <td>
          <input id="loadingResponseDeviation" type="number" />
        </td>
        <td>
          <input id="loadingResponseMaximum" type="number" />
        </td>
        <td>
          <input id="loadingResponseMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="singleSupport">Single Support</label>
        </td>
        <td>
          <input id="singleSupportMean" type="number" />
        </td>
        <td>
          <input id="singleSupportDeviation" type="number" />
        </td>
        <td>
          <input id="singleSupportMaximum" type="number" />
        </td>
        <td>
          <input id="singleSupportMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="preSwing">Pre Swing</label>
        </td>
        <td>
          <input id="preSwingMean" type="number" />
        </td>
        <td>
          <input id="preSwingDeviation" type="number" />
        </td>
        <td>
          <input id="preSwingMaximum" type="number" />
        </td>
        <td>
          <input id="preSwingMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="swingPhase">Swing Phase</label>
        </td>
        <td>
          <input id="swingPhaseMean" type="number" />
        </td>
        <td>
          <input id="swingPhaseDeviation" type="number" />
        </td>
        <td>
          <input id="swingPhaseMaximum" type="number" />
        </td>
        <td>
          <input id="swingPhaseMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="doubleSupport">Double Support</label>
        </td>
        <td>
          <input id="doubleSupportMean" type="number" />
        </td>
        <td>
          <input id="doubleSupportDeviation" type="number" />
        </td>
        <td>
          <input id="doubleSupportMaximum" type="number" />
        </td>
        <td>
          <input id="doubleSupportMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="angleSagittalMaximum">Angle Foot/Floor Maximum Sagittal</label>
        </td>
        <td>
          <input id="angleSagittalMaximumMean" type="number" />
        </td>
        <td>
          <input id="angleSagittalMaximumDeviation" type="number" />
        </td>
        <td>
          <input id="angleSagittalMaximumMaximum" type="number" />
        </td>
        <td>
          <input id="angleSagittalMaximumMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="angleSagittalMinimum">Angle Foot/Floor Minimum Sagittal</label>
        </td>
        <td>
          <input id="angleSagittalMinimumMean" type="number" />
        </td>
        <td>
          <input id="angleSagittalMinimumDeviation" type="number" />
        </td>
        <td>
          <input id="angleSagittalMinimumMaximum" type="number" />
        </td>
        <td>
          <input id="angleSagittalMinimumMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="angleFrontalMaximum">Angle Foot/Floor Maximum Frontal</label>
        </td>
        <td>
          <input id="angleFrontalMaximumMean" type="number" />
        </td>
        <td>
          <input id="angleFrontalMaximumDeviation" type="number" />
        </td>
        <td>
          <input id="angleFrontalMaximumMaximum" type="number" />
        </td>
        <td>
          <input id="angleFrontalMaximumMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="angleFrontalMinimum">Angle Foot/Floor Minimum Frontal</label>
        </td>
        <td>
          <input id="angleFrontalMinimumMean" type="number" />
        </td>
        <td>
          <input id="angleFrontalMinimumDeviation" type="number" />
        </td>
        <td>
          <input id="angleFrontalMinimumMaximum" type="number" />
        </td>
        <td>
          <input id="angleFrontalMinimumMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="verticalLiftMaximum">Vertical Lift Maximum</label>
        </td>
        <td>
          <input id="verticalLiftMaximumMean" type="number" />
        </td>
        <td>
          <input id="verticalLiftMaximumDeviation" type="number" />
        </td>
        <td>
          <input id="verticalLiftMaximumMaximum" type="number" />
        </td>
        <td>
          <input id="verticalLiftMaximumMinimum" type="number" />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="lateralDeviationMaximum">Lateral Deviation Maximum</label>
        </td>
        <td>
          <input id="lateralDeviationMaximumMean" type="number" />
        </td>
        <td>
          <input id="lateralDeviationMaximumDeviation" type="number" />
        </td>
        <td>
          <input id="lateralDeviationMaximumMaximum" type="number" />
        </td>
        <td>
          <input id="lateralDeviationMaximumMinimum" type="number" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
{/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Plabo;
