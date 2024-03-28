import React, { useState } from 'react';
import './BmiCalculator.css';
import trainer from '../../assets/trainer.png';
import rightArrow from '../../assets/rightArrow.png'

function BmiCalculator() {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [units, setUnits] = useState('Metric');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = () => {
        if (height && weight && age) {
            let bmi = 0;

            if (units === 'Metric') {
                bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            } else if (units === 'U.S. (Imperial)') {
                bmi = (703 * weight / (height * height)).toFixed(2);
            }
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'Overweight';
            } else {
                message = 'Obese';
            }

            setBmiMessage(message);
        }
    };

    const resetValues = () => {
        setAge('');
        setGender('male');
        setUnits('Metric');
        setHeight('');
        setWeight('');
        setBmiValue('');
        setBmiMessage('');
    };

    return (
        <div className='BmiCalculator'>
            <div className="left-container">
              <div className='stroke-text title'>Calculate</div>
              <div className='title'>Your Body</div>

                <div className='btn age_gender'>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className='btn units'>
                    <label>Units:</label>
                    <select value={units} onChange={(e) => setUnits(e.target.value)}>
                        <option value="Metric">Metric</option>
                        <option value="U.S. (Imperial)">U.S. (Imperial)</option>
                    </select>
                </div>
                <div className='btn height'>
                    <label>Height ({units === 'Metric' ? 'cm' : 'feet/inches'}):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
                </div>

                <div className='btn weight'>
                    <label>Weight ({units === 'Metric' ? 'kg' : 'lbs'}):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div className='btn calculate'>
                    <button onClick={calculateBmi}>Calculate BMI
                        <img src={rightArrow} alt=''/>
                    </button>
                    <button onClick={resetValues}>Reset</button>
                </div>

                <div className="result">
                    <p><strong>BMI Value:</strong> {bmiValue}</p>
                    <p><strong>Result:</strong> {bmiMessage}</p>
                </div>
        </div>
        <div className="right-container">
            <img src={trainer} alt=''/>
        </div>
    </div>
    );
};

export default BmiCalculator