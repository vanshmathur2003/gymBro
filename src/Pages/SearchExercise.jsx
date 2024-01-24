import { useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchExercise = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

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

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exerciseList.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <div className="bg-white text-orange-600 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* header */}
      <Header />

      {/* buttons */}
      <div className="overflow-x-auto p-4 pt-10 mt-20 ">
        <section className="mt-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">
              <span className=" px-4 py-2 text-black rounded-2xl sm:text-5xl">
               Get Upper Body Exercises
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('chest')}>
                Chest
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('back')}>
                Back
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('shoulders')}>
                Shoulders
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('lower arms')}>
                Forearms
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('upper arms')}>
                Arms
              </button>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="flex flex-col items-center ">
            <h2 className="text-2xl font-bold mb-3">
              <span className=" px-4 py-2 text-black rounded-2xl sm:text-5xl">
               Get Lower Body Exercises
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('upper legs')}>
                Upper Legs
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-black hover:text-gray-100 transition" onClick={() => fetchExercises('lower legs')}>
                Calves
              </button>

            </div>
          </div>
        </section>
      </div>
      {/* Display exercise names */}
      <div className="mt-10 flex flex-col items-center">
        {exerciseList && exerciseList.length > 0 ? (
          <>
            <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
              {currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
              ))}
            </Stack>
            <Stack mt="4" alignItems="center">
              {exerciseList.length > 9 && (
                <Pagination
                  className='pt-10'
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
          </>
        ) : (
          <p className="text-black"></p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchExercise;
