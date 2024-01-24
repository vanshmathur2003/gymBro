/* eslint-disable react/prop-types */
const ExerciseCard = ({ exercise }) => {
  return (
    <div className="max-w-md mx-auto mb-8 p-4 w-full">
      <div className="bg-white border rounded-lg overflow-hidden">
        <img
          className="w-full h-70 object-cover object-center"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
        <div className="p-4">
          <div className="flex space-x-2">
            <button className="text-white bg-orange-600 rounded-full px-3 py-1 text-sm capitalize">
              {exercise.bodyPart}
            </button>
            <button className="text-white bg-orange-600 rounded-full px-3 py-1 text-sm capitalize">
              {exercise.target}
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-2 capitalize">
            {exercise.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
