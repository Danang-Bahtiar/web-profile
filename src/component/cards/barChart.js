const ProgressBar = ({ label, count }) => {
  // You can change the total count here for your specific use case
  const totalCount = 8;
  
  // Calculate the percentage, ensuring it doesn't go over 100%
  const percentage = Math.min((count / totalCount) * 100, 100);

  return (
    <div className="w-full font-mono">
      {/* Labels for the progress bar */}
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-cyan-400">{label}</span>
        <span className="text-sm font-medium text-cyan-400">{count} / {totalCount}</span>
      </div>
      
      {/* The background of the progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        {/* The filled part of the progress bar */}
        <div 
          className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;