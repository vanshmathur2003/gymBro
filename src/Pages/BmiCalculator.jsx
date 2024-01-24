import  { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue !== 0) {
      const bmiResult = weightValue / Math.pow(heightValue / 100, 2);
      setBmi(bmiResult.toFixed(2));

      // Determine BMI category
      if (bmiResult < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        setBmiCategory('Healthy');
      } else {
        setBmiCategory('Overweight');
      }
    } else {
      setBmi(null);
      setBmiCategory('');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bg-white text-black min-h-screen flex justify-center items-center">
      <div className="border p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">BMI Calculator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-600"
          />
        </div>

        <button
          onClick={calculateBmi}
          className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:border-orange-700"
        >
          Calculate BMI
        </button>

        {bmi !== null && (
          <div className="mt-6">
            <p className="text-lg font-semibold">Your BMI is {bmi}</p>
            <p className="mt-2">Your Category is {bmiCategory}</p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BmiCalculator;
