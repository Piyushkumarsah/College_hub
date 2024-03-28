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
          'Circuit Theory': {
            chapters: {
              'Network Analysis Techniques': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Applications of Laplace Transform': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Network Functions': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Two Port Networks:': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Filters and Active Networks': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Graph Theory and Network Equations': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Electrical Measurements and Measuring Instruments ': {
            chapters: {
              'Analog Measuring Instruments': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Measurement of Resistances': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'AC Bridges': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Potentiometer': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Magnetic Measurement': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Instrument Transformers': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Cathode Ray Oscilloscope': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          
          'Electronic Devices and Analog Integrated Circuits  ': {
            chapters: {
              'Semiconductors Diodes and Applications': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Bipolar Junction Transistor': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Field-Effect Transistor': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Power and Multistage Amplifiers': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Op-amps and Applications': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Specialized ICs': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
             
            },
          },
          ' EMF Theory   ': {
            chapters: {
              'Electrostatics ': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Magneto statics': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Time varying fields and Maxwells Equations': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Plane Electromagnetic Waves ': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Transmission lines': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Waveguides': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Electromagnetic Interference and Compatibility': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Digital Electronics  ': {
            chapters: {
              'Number Systems And Boolean Algebra': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Combinational Circuits:': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Sequential Circuits': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Digital Logic Families ': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'D/A And A/D Converters': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Semiconductor Memories': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
        },
        'Semester 2': {
          // ... similar structure for semester 2 subjects
          'Electrical Machines - I': {
            chapters: {
              'Principle of Electromechanical Energy Conversion': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'DC Generators': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'DC Motors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Transformers': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Three Phase Induction Motors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Speciality Motors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Electronic Instrumentation and Measurement': {
            chapters: {
              'Introduction:': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Transducers': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Signal Conditioning': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Data Transmission Systems': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Display Systems': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Recorders': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Generation of Electric Power': {
            chapters: {
              'Introduction': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Hydro Electric Power Plants': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Steam Power Plant': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Gas Turbine Power Plants': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Nuclear Power Plants': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Performance and operation of Power Plants': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Data structures and Algorithms ': {
            chapters: {
              'Introduction': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Arrays': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Stacks': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Recursion': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Queues': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Linked list': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Searching and Hashing:': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Sorting': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Graphs': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              
            },
          },
          'Numerical Methods  ': {
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
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Chapter 4': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Chapter 5': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              
            },
          },
          'Economics for Engineers   ': {
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
          'Microprocessors and Interfacing ': {
            chapters: {
              'Introduction to 8-Bit Microprocessor': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Microprocessor Instruction Set (INTEL 8085)': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Assembly Language Programming ': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Peripherals and Interfacing for 8085 Microprocessors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Introduction to 8086 Microprocessors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Pentium Microprocessors': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ], 
            },
          },
          'Control System Engineering ': {
            chapters: {
              'Introductory Concepts': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Modelling': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Time Domain Analysis': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Root Locus Technique': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Frequency Domain Analysis': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Compensation': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Control Components': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              
            },
          },
          'Power Electronics': {
            chapters: {
              'Power Semi-Conductor Devices': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Phase-Controlled Converters': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'DC to DC Converte': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Inverters': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'AC to AC Converters': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],  
            },
          },
          'Electrical Machines-II': {
            chapters: {
              'Polyphase Synchronous Machines ': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Synchronous Generator': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Multi Machine Operation': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Testing of Synchronous Machines': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              
            },
          },
          'Transmission and Distribution of Electric Power': {
            chapters: {
              'Introduction': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Distribution System': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Over Head Transmission Lines': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Performance of Transmission Lines:': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Mechanical Design of Overhead Lines': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Insulators of Overhead Lines ': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Underground Cables': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          
        },
        'Semester 2': {
          // ... similar structure for semester 2 subjects
          'Power System Analysis': {
            chapters: {
              'Introduction': [
                { name: ' Arrays', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Arrays Part-II', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Power flow analysis': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-idh', pdf: 'link-to-pdf' },
              ],
              'Fault analysis of balanced faults': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-idf', pdf: 'link-to-pdf' },
              ],
              'Fault analysis of unbalanced faults': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-idd', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Stability analysis': [
                { name: ' Linked Lists', video: 'https://www.youtube.com/embed/your-video-iddf', pdf: 'link-to-pdf' },
                { name: ' Stacks and Queues', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Digital Signal Processing ': {
            chapters: {
              'Introduction': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Discrete Time System Analysis': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Discrete Fourier Transform & Computation': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Design of Digital Filters': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Digital Signal Processors': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'PLC, DCS, SCADA': {
            chapters: {
              'Computer Based Control:': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Distributed Control System': [
                { name: 'Introduction to Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Types of Electric Machines', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Introduction Programmable Logic Controller (PLC)': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Basic PLC functions': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Intermediate PLC functions': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Data Handling Functions of PLC': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Bit Functions of PLC': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'Advanced Functions of PLC': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'PLC programming': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
              'SCADA': [
                { name: 'Operating Principles', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
                { name: 'Applications', video: 'https://www.youtube.com/embed/your-video-id', pdf: 'link-to-pdf' },
              ],
            },
          },
          'Power System Derregulation  ': {
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
          'High Voltage Enginering  ': {
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
          'Soft Computing': {
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
            <option value="" className=" text-white   bg-black ">Select Year</option>
            {/* Add options for all years in your data */}
            <option value="Year 1" className="bg-black">Year 1</option>
            <option value="Year 2" className="bg-black">Year 2</option>
            <option value="Year 3" className="bg-black">Year 3</option>
            <option value="Year 4" className="bg-black">Year 4</option>
            {/* ... options for other years */}
          </select>
          <select
            className="px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring focus:ring-orange-300 mx-2 bg-black text-white" 
            value={selectedSemester}
            onChange={handleSemesterChange}
            >
              <option value="">Select Semester</option>
              {/* Add options for all semesters in your data */}
              <option value="Semester 1" className="bg-black">Semester 1</option>
              <option value="Semester 2" className="bg-black">Semester 2</option>
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
                      <tr className=" bg-black text-orange-400  shadow-sm shadow-orange-400 ">
                        <td
                          className={`py-2 px-4 cursor-pointer bg-black text-orange-400 hover:bg-orange-600 hover:text-white font-semibold  shadow-md shadow-orange-800  ${
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
                            <td className="py-5 pl-10 px-4 bg-black text-white shadow-sm shadow-orange-800">
                              {topic.name}
                            </td>
                            <td className="px-0 sm:px-4 bg-black text-white shadow-sm shadow-white  sm:py-0 ">
                              <a
                                href={topic.video}
                                target="_blank"
                                rel="noreferrer"
                                className="shadow-red-800 shadow-sm text-blue-500 hover:underline py-2 px-20 sm:text-md text-sm sm:py-2 sm:px-4 pt-  border rounded-2xl    data-[https://www.youtube.com/live/20UDoO29iaM?feature=shared]:"
                              >
                                Watch Video
                              </a>
                            </td>
                            <td className="py-2 px-4  bg-black text-white shadow-md shadow-white ">
                              <a
                                href={topic.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 hover:underline  "
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
    