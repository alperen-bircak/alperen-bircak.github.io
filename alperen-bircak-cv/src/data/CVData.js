import React from "react";

const CVData = {
  intro: {
    name: 'Alperen',
    surName: 'Bırçak',
    title: 'Computer Engineering Undergraduate',
    description: 'A Computer Engineering student at Boğaziçi University and an aspiring full-stack engineer.  Pursuing further real-life experience and looking to develop practical software engineering skills. Enthusiastic about contributing to software projects and working together with a team. Has experience with front-end and back-end web development using a MERN stack, fast learner, good communication skills, variety of other development skills including: Java, C++, C#, C, PHP and Python.'
  },
  contact: {
    address: 'Rumeli Hisarı Mah., Cami Sk., No:4, Boğaziçi Apt., Kat:2 Daire:2, Sarıyer/İSTANBUL',
    phone: 'its not smart to make your phone public',
    email: 'bircakalperen@gmail.com',
    linkedIn: 'linkedin.com/in/alperen-bircak'
  },
  skills: {
    main: [
      'Full-stack web development with a MERN stack which includes:',
      [
        'MongoDB',
        'ExpressJS',
        'ReactJS',
        'NodeJS',
      ],
      'Experience with common web development tools such as:',
      [
        'React Redux',
        'Mongoose',
        'React Router',
        'Axios',
        'Sass'
      ],
      'Additional experience with web development using a Vue 3 & Spring Boot based stack.',
      'Confident and comfortable with CSS and semantic HTML.',
      'Experience programming with Java, C++, C#, C, PHP and Python.',
      'Knowledge about fundmental programing concepts including:',
      [
        'Object Oriented Programming',
        'Functional Programming',
        'Data Structures and Algorithms',
        'Database Design'
      ],
      "Moderate experience with game engines Unity and Godot.",
      'Experienced with linux based operating systems. Can utilize command line tools such as git, npm and yarn.',
      'Good communicator and a team player.'
    ],
    languages: [
      ['Turkish', 'Native Language'],
      ['English', 'Proficient (C2)']
    ]
  },
  experience: {
    main: [
      <>
      Currently working as a full-stack developer at <a href={`https://lonca.co`}>Lonca.co</a>, which is an online marketplace that has an in-house developed website. Notable achievements include:
      </>,
      [
        'Redesigning and developing the mobile experience of the website.',
        'Designing and fully implementing favorite and sample order functionalities.',
        'Implementing a ranking algorithm to diversify brand representation and increase product engagement.',
        'Creating an in-house tool to facilitate preparation of orders.',
      ],
      <>A six week internship in <a href="https://pro-line.com.tr/">Proline</a>, at which led the development of an admin panel and backend for an employee management system.</>,
      'Winner of Most Creative Hack category at Local Hack Day, 2018',
      'Organization Member and Presenter in Boğaziçi Tech-Summit, 2019',
      'Attended various Model United Nations conferences through 2014-2017, in which achieved two Best Delegate, four Outstanding Delegate and several Honorable Mentions.',
      'Member of the administrative body of Boğaziçi Mountaineering and Climbing Club (BÜDAK), 2021-2022'
    ],
    hobbies: [
      'Game Development',
      'Mountaineering',
      'Bouldering',
      'Digital Drawing',
      'Writing'
    ],
    education: [
      {
        title: 'Boğaziçi University',
        subtitle: 'Bachelor of Science: Computer Engineering (2018-2023)',
        list: ['Current GPA: 3.30/4.00']
      },
      {
        title: 'West Virginia University',
        subtitle: 'Student Exchange (2022 Fall Semester)',
        notes: 'Took a game development course and improved my english skills.'
      }
    ]
  }
}

export default CVData;