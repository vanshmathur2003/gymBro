import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import Pagination from '@mui/material/Pagination';
import {  Stack  } from '@mui/material';

const SearchExercise = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10; // Set the number of exercises per page

  const fetchExercises = async (muscle) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}?limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a331464234msh945de21992dc940p18bdebjsn2a5d05e6d221',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setExerciseList(result);
    } catch (error) {
      console.error(error);
    }
  };

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the index of the last exercise on the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  // Calculate the index of the first exercise on the current page
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // Get the exercises for the current page
  const currentExercises = exerciseList.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <div className='flex justify-center'>
      {/* Navbar */}
      <nav>
        {/* Add your navbar content here */}
        <ul>
          <li>Navbar Item 1</li>
          <li>Navbar Item 2</li>
          {/* Add more navbar items as needed */}
        </ul>
      </nav>

      {/* Muscle buttons */}
      <div>
        <button onClick={() => fetchExercises('back')}>Back</button>
        <button onClick={() => fetchExercises('chest')}>Chest</button>
        <button onClick={() => fetchExercises('shoulders')}>Shoulders</button>
      </div>

      {/* Display exercise names */}
      <div>
        {exerciseList && exerciseList.length > 0 ? (
          <React.Fragment>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
              {currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
              ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
              {exerciseList.length > 9 && (
                <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                  count={Math.ceil(exerciseList.length / exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
                />
              )}
            </Stack>
          </React.Fragment>
        ) : (
          <p>No exercises found.</p>
        )}
      </div>
    </div>
  );
};


export default SearchExercise;
