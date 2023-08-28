import React, { useState } from 'react';
import axios from 'axios';

const ChipsComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [chips, setChips] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const fragments = inputValue.split(/[, ]+/);
      fragments.forEach(fragment => {
        const validPattern = /^[A-Za-z]\d{6}$/; // Pattern: one letter followed by six digits
        if (validPattern.test(fragment)) {
          setChips(prevChips => [...prevChips, fragment]);
          setInputValue('');
          setShowWarning(false);
        } else {
          setShowWarning(true);
          console.log(`Invalid chip: ${fragment}`);
        }
      });
    }
  };

  const handleSendToAPI = async () => {
    try {
      await axios.post('your-api-endpoint', { chips });
      setChips([]);
    } catch (error) {
      console.error('Error sending chips to API:', error);
    }
  };

  return (
    <div className=" w-full">
      <div className="flex items-center space-x-2 mb-4 flex flex-col">
        <div className="w-full">

            <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className={`border w-full p-4 dark:text-slate-200 ${showWarning ? 'border-red-500' : ''}`}
            placeholder="Enter a letter followed by 6 numbers"
            />
        </div>
      </div>
      {showWarning && (
        <p className="text-red-500 mb-2">Invalid format. Example: A123456</p>
      )}
      <div className="flex flex-wrap space-x-2 mb-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-2 w-24 rounded-md cursor-pointer flex justify-around py-1 px-2 rounded"
          >
            <span>{chip}</span>
            <button
              onClick={() =>
                setChips(prevChips => prevChips.filter((_, i) => i !== index))
              }
              className="text-red-600 font-bold focus:outline-none"
            >
              x
            </button>
          </div>
        ))}
      </div>
        <button
            onClick={handleSendToAPI}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Send to API
        </button>
    </div>

  );
};

export default ChipsComponent;
