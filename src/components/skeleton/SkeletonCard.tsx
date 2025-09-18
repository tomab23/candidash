const SkeletonCard = () => {
  return (
    <>
      <div className="bg-card p-4 rounded-lg">
        <div className="animate-pulse">
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-400">
              <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-start text-sm text-gray-400">
              <div className="h-4 w-4 bg-gray-300 rounded mr-2 mt-0.5"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="h-8 w-8 bg-gray-300 rounded" disabled></button>
              <button className="h-8 w-8 bg-gray-300 rounded" disabled></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
