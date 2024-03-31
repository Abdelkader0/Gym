import React, { useState } from "react";
import playingArrow from "../../assets/playingArrow.png";
import BMIChart from "../../assets/BMIChart.jpeg";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./BmiCalculator.css";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
import { motion } from "framer-motion";

function BmiCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [units, setUnits] = useState("Metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const transition = {type: "spring", duration: 6};

  const calculateBmi = () => {
    if (height && weight && age) {
      let bmi = 0;

      if (units === "Metric") {
        bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      } else if (units === "U.S. (Imperial)") {
        bmi = ((703 * weight) / (height * height)).toFixed(2);
      }
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "Overweight";
      } else {
        message = "Obese";
      }

      setBmiMessage(message);
    }
  };

  const resetValues = () => {
    setAge("");
    setGender("male");
    setUnits("Metric");
    setHeight("");
    setWeight("");
    setBmiValue("");
    setBmiMessage("");
  };

  return (
    <div className="App">
      <Header />

      <div className="cal-title">
        <div>
          <span className="stroke-text">Calculate</span>
          <span> your BMI</span>
        </div>
      </div>
       <div className="bmi-container">
        <div className="left-cal">

          <div className="calculator-form">
            <motion.span
                initial= {{opacity: 0, x: -100}}
                animate= {{opacity: 1, x: 0}}
                transition= {{transition}}
                exit= {{opacity: 0, x: 100}}>
            </motion.span>
              <div className="btn age_gender">
                <label>Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="btn units">
                <label>Units:</label>
                <select value={units} onChange={(e) => setUnits(e.target.value)}>
                  <option value="Metric">Metric</option>
                  <option value="U.S. (Imperial)">U.S. (Imperial)</option>
                </select>
              </div>
              <div className="btn height">
                <label>Height ({units === "Metric" ? "cm" : "feet/inches"}):</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div className="btn weight">
                <label>Weight ({units === "Metric" ? "kg" : "lbs"}):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className="btn calculate">
                <button onClick={calculateBmi}>
                  Calculate BMI
                  <img src={playingArrow} alt="" />
                </button>
                <button onClick={resetValues}>Reset</button>
              </div>
            </div>

            <div className="calculator-result">
              <p>
                <strong>BMI Value:</strong> {bmiValue}
              </p>
              <p>
                <strong>Result:</strong> {bmiMessage}
              </p>
            </div>
        </div>

        <div className="right-cal" >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          ></motion.div>

          <div className="image-container">
            <motion.img
              className="main-image"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, x: -100 }}
              src={BMIChart}
              alt="scale"
            />
          </div>
        </div>

      </div>
     
      <Join />
      <Footer />
    </div>
  );
};

export default BmiCalculator;
