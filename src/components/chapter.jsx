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
    