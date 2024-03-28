
// wee can reuse this component for other concepts so this is the thing we can use for other components also okay 
    

const Chapter = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [topics, setTopics] = useState({
      'Control System': {
        chapters: {
          'Chapter 1': [
            { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          // 'Chapter 3': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
          // 'Chapter 4': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
          // 'Chapter 5': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
          // 'Chapter 6': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
          // 'Chapter 7': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
          // 'Chapter 8': [
          //   { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          //   { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          // ],
        },
      },
      'Electric Machines': {
        chapters: {
          'Chapter 1': [
            { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
        },
      },
      'Data Structure and Algorithms': {
        chapters: {
          'Chapter 1': [
            { name: 'Introduction to Data Structures', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Arrays and Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: 'Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Trees and Graphs', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
        },
      },
      'Power System': {
        chapters: {
          'Chapter 1': [
            { name: 'Introduction to Power Systems', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Power Generation', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: 'Transmission and Distribution', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Power System Protection', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
        },
      },
      'Power Electronics': {
        chapters: {
          'Chapter 1': [
            { name: 'Introduction to Power Electronics', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Power Semiconductor Devices', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: 'DC-DC Converters', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'AC-DC Converters', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
        },
      },
      'Transform Techniques': {
        chapters: {
          'Chapter 1': [
            { name: 'Laplace Transform', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Fourier Transform', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
          'Chapter 2': [
            { name: 'Z-Transform', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            { name: 'Applications of Transform Techniques', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
          ],
        },
      },
      // Add more subjects with their chapters
    });
  
    const handleSubjectClick = (subject) => {
      setSelectedSubject(subject === selectedSubject ? null : subject);
      setSelectedChapter(null);
    };
  
    const handleChapterClick = (chapter) => {
      setSelectedChapter(chapter === selectedChapter ? null : chapter);
    };
  
  
  
    return (
      <div className="chapter mx-auto px-20 w-full bg-black p-4">
        <h2 className="text-orange-300 text-lg font-bold mb-4">Select Subject</h2>
        <div className="flex flex-wrap gap-4">
          {Object.keys(topics).map((subject) => (
            <div key={subject} className="flex flex-col">
              <button
                className={`bg-orange-300 text-white  px-4 py-2 font-semibold rounded mb-2 ${
                  selectedSubject === subject ? 'bg-blue-500' : ''
                }`}
                onClick={() => handleSubjectClick(subject)}
              >
                {subject}
              </button>
              {selectedSubject === subject && (
                <div className="ml-4">
                  {Object.keys(topics[subject].chapters).map((chapter) => (
                    <button
                      key={chapter}
                      className={`text-sm px-2 py-1 rounded ${
                        selectedChapter === chapter ? 'bg-blue-200 text-blue-800' : ''
                      }`}
                      onClick={() => handleChapterClick(chapter)}
                    >
                      {chapter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  
        {selectedSubject && (
          <div className="mt-4">
            <h2 className="text-orange-300 text-lg font-bold">{selectedSubject}</h2>
            <table className="w-full mt-8 bg-gray-800 text-white py-2 ">
              <thead>
                <tr>
                  <th className="py-2 px-4 ">Topic Track</th>
                  <th className="py-2 px-4">Video Track</th>
                  <th className="py-2 px-4">PDF</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(topics[selectedSubject].chapters).map((chapter) => (
                  <React.Fragment key={chapter}>
                    <tr className=" bg-black text-orange-400 ">
                      <td
                        className={`py-2 px-4 cursor-pointer bg-black text-orange-300 hover:bg-orange-600 hover:text-white ${
                          selectedChapter === chapter ? 'bg-black' : ''
                        }`}
                        onClick={() => handleChapterClick(chapter)}
                      >
                        {chapter}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    {selectedChapter === chapter &&
                      topics[selectedSubject].chapters[chapter].map((topic) => (
                        <tr className='' key={topic.name}>
                          <td className="py-5 px-4 bg-black text-white shadow-sm shadow-orange-300 ">{topic.name}</td>
                          <td className=" px-4 bg-black text-white shadow-sm shadow-orange-300">
                            <a
                              href={topic.video}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 hover:underline py-2 px-4 border rounded-2xl  sm:shadow-orange-400"
                            >
                              Watch Video
                            </a>
                          </td>
                          <td className="py-2 px-4  bg-black text-white shadow-sm shadow-orange-400">
                            <a
                              href={topic.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              Read PDF
                            </a>
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default Chapter;


  // ye naya wala chapter.jsx hai kyuki piche wale me semester and year ka option nhi tha so ye chiz okay 

  import React, { useState } from 'react';

const Chapter = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Update your topics data structure with year and semester nesting
  const topics = {
    'Year 1': {
      'Semester 1': {
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
      'Semester 2': {
        // ... similar structure for semester 2 subjects
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
    },

    'Year 2': {
      // ... similar structure for year 2 semesters and subjects
      'Semester 1': {
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
      'Semester 2': {
        // ... similar structure for semester 2 subjects
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },

    },

    'Year 3': {
      'Semester 1': {
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
      'Semester 2': {
        // ... similar structure for semester 2 subjects
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 3': [
              { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
    },
    'Year 4': {
      'Semester 1': {
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
      'Semester 2': {
        // ... similar structure for semester 2 subjects
        'Control System': {
          chapters: {
            'Chapter 1': [
              { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
            'Chapter 2': [
              { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
        'Electric Machines': {
          chapters: {
            'Chapter 1': [
              { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
            ],
          },
        },
      },
    },
    
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSemester(null); // Reset semester selection on year change
    setSelectedSubject(null); // Reset subject selection on year or semester change
    setSelectedChapter(null); // Reset chapter selection on year or semester change
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setSelectedSubject(null); // Reset subject selection on semester change
    setSelectedChapter(null); // Reset chapter selection on semester change
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
    setSelectedChapter(null);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter === selectedChapter ? null : chapter);
  };

  const getAvailableSubjects = () => {
    // Filter subjects based on selected year and semester
    if (selectedYear && selectedSemester) {
      return Object.keys(topics[selectedYear][selectedSemester]);
    } else {
      return Object.keys(topics); // Return all subjects if no year/semester selected
    }
  };

  return (
    <div className="chapter mx-auto px-20 w-full bg-black p-4">
      <h2 className="text-orange-300 text-lg font-bold mb-4">Select Year & Semester</h2>
      <div className="flex flex-wrap gap-4">
        <select
          className="px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring focus:ring-orange-300 mx-2 bg-transparent text-white"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="" className="">Select Year</option>
          {/* Add options for all years in your data */}
          <option value="Year 1">Year 1</option>
          <option value="Year 2">Year 2</option>
          <option value="Year 3">Year 3</option>
          <option value="Year 4">Year 4</option>
          {/* ... options for other years */}
        </select>
        <select
          className="px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring focus:ring-orange-300 mx-2 bg-transparent text-white" 
          value={selectedSemester}
          onChange={handleSemesterChange}
          >
            <option value="">Select Semester</option>
            {/* Add options for all semesters in your data */}
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
            {/* ... options for other semesters */}
          </select>
        </div>
  
        {selectedYear && selectedSemester && (
          <>
            <h2 className="text-orange-300 text-lg font-bold mt-8 mb-4">Select Subject</h2>
            <div className="flex flex-wrap gap-4 ">
              {getAvailableSubjects().map((subject) => (
                <div key={subject} className="flex flex-col">
                  <button
                    className={`bg-orange-300 text-white px-4 py-2 font-semibold rounded mb-2  ${
                      selectedSubject === subject ? 'bg-blue-500 ' : ''
                    }`}
                    onClick={() => handleSubjectClick(subject)}
                  >
                    {subject}
                  </button>
                  {selectedSubject === subject && (
                    <div className="ml-4">
                      {Object.keys(topics[selectedYear][selectedSemester][subject].chapters).map((chapter) => (
                        <button
                          key={chapter}
                          className={`text-sm text-white p-2  rounded bg-gray-800 mx-2 ${   
                            // yha pe ye classname me jo subjects ke sub chapters hai uska aa rha hai 
                            selectedChapter === chapter ? 'bg-blue-200 text-blue-800' : ''
                          }`}
                          onClick={() => handleChapterClick(chapter)}
                        >
                          {chapter}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
  
        {selectedSubject && (
          <div className="mt-4 ">
            <h2 className="text-orange-300 text-lg font-bold">{selectedSubject}</h2>
            <table className="w-full mt-8 bg-gray-800 text-white py-2   ">
              <thead>
                <tr>
                  <th className="py-2 px-4 ">Topic Track</th>
                  <th className="py-2 px-4 ">Video Track</th>
                  <th className="py-2 px-4 ">PDF</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(topics[selectedYear][selectedSemester][selectedSubject].chapters).map((chapter) => (
                  <React.Fragment key={chapter}>
                    <tr className=" bg-black text-orange-400  ">
                      <td
                        className={`py-2 px-4 cursor-pointer bg-black text-orange-300 hover:bg-orange-600 hover:text-white ${
                          selectedChapter === chapter ? 'bg-black' : ''
                        }`}
                        onClick={() => handleChapterClick(chapter)}
                      >
                        {chapter}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    {selectedChapter === chapter &&
                      topics[selectedYear][selectedSemester][selectedSubject].chapters[chapter].map((topic) => (
                        <tr className="" key={topic.name}>
                          <td className="py-5 px-4 bg-black text-white shadow-sm shadow-orange-300">
                            {topic.name}
                          </td>
                          <td className="px-0 sm:px-4 bg-black text-white shadow-sm shadow-orange-300  sm:py-0 ">
                            <a
                              href={topic.video}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 hover:underline py-2 px-20 sm:text-md text-sm sm:py-2 sm:px-4 pt-  border rounded-2xl  sm:shadow-orange-400  data-[https://www.youtube.com/live/20UDoO29iaM?feature=shared]:"
                            >
                              Watch Video
                            </a>
                          </td>
                          <td className="py-2 px-4  bg-black text-white shadow-sm shadow-orange-400 ">
                            <a
                              href={topic.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 hover:underline "
                            >
                              Read PDF
                            </a>
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default Chapter;
  

  // ye password ka toggle krne wala show and hide ka  component 
  import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleShowPasswordToggle = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const LoginAttempt = () => {
        if (validateEmail(email) === false) {
            toast.error("Enter a valid email");
        }
    };

    return (
        <div className='bg-black'>
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Sample image" />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <label className="mr-1 text-white">Sign in with</label>
                        <button
                            type="button"
                            className="mx-1 h-9 w-9 rounded-full bg-orange-400 hover:bg-orange-500 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inlne-block mx-1 h-9 w-9 rounded-full bg-orange-400 hover:bg-orange-500  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </button>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
                    </div>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-transparent text-white" type="text" placeholder="Email Address" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <div className="relative mt-4">
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-transparent text-white pr-10" type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={handleShowPasswordToggle}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="mt-4 flex justify-between font-semibold text-sm">
                        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                            <input className="mr-1" type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
                    </div>
                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-gradient-to-r from-orange-400 to-orange-500  hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={LoginAttempt}>Login</button>
                    </div>
                    <div className=" flex mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        <div>Don't have an account?</div>
                        <Link to="/register" className="text-red-600 px-4 underline hover:underline-offset-4">Register</Link>
                    </div>
                </div>
            </section>
       

        </div>
    )
}

export default Login;


// ye purana wala isikia without show and hide wala 