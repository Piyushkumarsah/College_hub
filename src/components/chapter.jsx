import React, { useState } from 'react';

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
