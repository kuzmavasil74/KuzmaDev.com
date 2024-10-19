export const blogData = [
  {
    slug: 'my-first-portfolio',
    title:
      'How I Built My First Fully Functional Portfolio Website for a Hairdresser',
    date: '19 Sep, 2024',
    content: `
      In this blog post, I'd like to share my experience of building my first full-functional portfolio website for a hairdresser. 
      The process involved several stages: from gathering requirements to implementing the backend. 
      This project was not only a technical challenge but also a great opportunity to apply my knowledge of React, CSS modules, responsive design, and Node.js.
      
      ### 1. Gathering Requirements and Planning
      The project began with a discussion with my client, Taisiya, a hairdresser, to understand her vision for the website. 
      The key requirements were:
      - A stylish and modern design.
      - Pages for services, prices, and contact information.
      - A booking form for clients.
      - The ability to add client reviews.

      ### 2. Structure and Design
      I decided to use React as the main framework for the frontend due to its flexibility and the ability to organize components easily. 
      For styling, I used CSS modules to ensure that each component had isolated styles.
      
      The main structure of the website included the following pages:
      - Home (featuring a welcome text and key services).
      - About Us (the hairdresser's story, philosophy, and a photo).
      - Services (a detailed list of services with prices).
      - Gallery (a showcase of the hairdresser's work).
      - Contact (a booking form and contact details).

      ### 3. Responsiveness and UX/UI
      To create a responsive design, I utilized Flexbox and CSS Grid, allowing for easy layout adjustments across different screen sizes. I paid special attention to the mobile version, adding a hamburger menu and a two-row layout for filters on the gallery page. This improved the user experience on smartphones.

      ### 4. Client Booking Form
      One of the key features of the site was the booking form for scheduling services. 
      I used the Yup library for form validation, ensuring proper data input from the user. The form fields included name, phone number, selected service, and time. Once completed, the form data was submitted to the backend.

      ### 5. Backend and Database
      To implement the functionality for client reviews and booking, I used Node.js and MongoDB. 
      The form data was sent to the backend, processed, and stored in the database. This provided a system for handling client bookings and reviews.

      ### 6. Deployment
      The final step was deploying the site using Vercel, which made it easy to integrate the frontend and ensure stable website performance.

      ### Conclusion
      This project gave me valuable experience working with a real client, helped me improve my technical skills, and provided insights into building a full-functional website. 
      In the future, I plan to add more features, such as Google Calendar integration for bookings and a user authentication system for clients. 
      This experience highlighted the importance of proper project structure planning, considering UX/UI, and ensuring usability across all devices.
    `,
    imageUrl: '/images/blogs/post-one.jpg',
  },
  {
    slug: 'my-journey-in-web-development',
    title: 'My Journey in Web Development: From Beginner to Frontend Developer',
    date: '1 Oct, 2024',
    content: `
      In this blog, I want to share my journey into the world of web development. As a beginner, I had no idea how challenging yet fascinating this process would be. Web development is not just about technical skills but also about continuous learning and improvement. Here's how I went from my first steps to where I am today.

      ### 1. First Steps: HTML and CSS
      My journey started with learning HTML and CSS. These were the basics that formed the foundation of understanding how the web works. At first, it was difficult, but gradually I learned how to structure pages and make them both beautiful and functional.

      I began with simple static web pages:
      - Creating headings, paragraphs, and lists.
      - Using styles to position elements, change colors, fonts, and create basic layouts.

      CSS modules became a great way for me to isolate styles for different components, which made my projects more organized and scalable.

      ### 2. JavaScript: Moving to Interactivity
      After mastering HTML and CSS, I decided to learn JavaScript, the programming language that makes web pages interactive. I started with the basics:
      - Variables, conditions, and loops.
      - Functions and event handling.
      - Working with the DOM (Document Object Model) to manipulate page elements.

      This was a significant step as I learned how to add interactivity to web pages by modifying them in real-time.

      ### 3. Frameworks: React
      After getting comfortable with basic JavaScript, I discovered React, a popular JavaScript framework for building complex user interfaces. React opened up new possibilities for me:
      - **Components**: enabling the creation of reusable UI elements.
      - **JSX**: a convenient syntax for combining JavaScript and HTML.
      - **States and props**: helping manage data and user interactions.

      React became my primary tool. I started creating larger and more complex applications, learning to work with libraries and APIs.

      ### 4. Tools and Modern Technologies
      As I progressed, I started exploring other tools and technologies that help in building web applications:
      - **Webpack**: for bundling and configuring projects.
      - **Babel**: for using modern JavaScript features.
      - **ESLint**: for maintaining high code quality.
      - **Git**: for version control.
      - **CSS frameworks (Bootstrap, Tailwind CSS)**: for quickly creating beautiful and responsive interfaces.

      These tools became an essential part of my workflow.

      ### 5. Working with Backend and Databases
      Although I focused on frontend development, I became interested in how the backend works. I started learning Node.js and Express.js to build simple servers. This gave me an understanding of how server requests work, how to interact with databases (I chose MongoDB), and how to handle data on the server side.

      ### 6. Practice and Projects
      The most important learning came from practice. I created various projects:
      - A personal website for a hairdresser (where I applied React and responsive design).
      - A blog where I could practice interactive elements.
      - Other freelance projects where I had the opportunity to work with real clients and learn to work in a team.

      This hands-on experience helped me gain practical knowledge and understand how web development works in the real world.

      ### 7. Never Stop Learning
      A crucial part of my development was realizing that web development is an ongoing learning process. New technologies, frameworks, and libraries emerge every day. It's important to keep improving your skills, learning new tools, and never being afraid to experiment.

      ### Key Takeaways
      My journey in web development has been challenging but exciting. From the beginning, when I didn't even know how to create a simple page, to the point where I started working on larger projects, I've learned many valuable lessons. Web development is a continuous process, and I'm excited to continue my journey in this field.
    `,
    imageUrl: '/images/blogs/post-two.jpg',
  },
  {
    slug: 'practical-project-breakdown-solving-technical-challenges',
    title: 'Practical Project Breakdown: Solving Technical Challenges',
    date: '18 Oct, 2024',
    content: `
      In this post, I’ll break down several projects I’ve worked on and explain how I approached and solved different technical challenges. Practical examples like these help demonstrate how to tackle development issues and which tools or methods can come in handy.

      ### 1. Portfolio Website for a Hairdresser
      **Project:** Creating a portfolio website for a hairdresser where clients can view services, book appointments, and browse a gallery of work.
      
      **Technical Challenge:** Responsive Navigation Menu  
      One of the key challenges was designing a responsive menu that would work well on both mobile and desktop devices.
      
      **Solution:** I used useRef in React to implement a dropdown menu that appears when clicking on the hamburger icon in mobile view. This menu also needed to close when the user clicked outside of it, so I added event listeners to detect clicks outside the menu.
      
      **Problem:** Initially, the menu was not closing properly when users clicked multiple times in quick succession.
      
      **Fix:** I added logic to debounce the clicks, ensuring smooth functionality and preventing multiple clicks from interfering with the menu.
      
      ### 2. Booking Form
      **Project:** A form where clients can submit a booking request by entering their name, phone number, and selecting a service.
      
      **Technical Challenge:** Form Validation  
      The form required proper validation to ensure users submitted valid data before sending it to the server.
      
      **Solution:** I used the Yup library to create a validation schema. This made it easy to define validation rules for each field (e.g., checking for a valid email format or required fields).
      
      **Problem:** The form initially did not provide detailed feedback about input errors, making it hard for users to understand what went wrong.
      
      **Fix:** I customized the error messages for each field to provide clearer feedback, enhancing the user experience.
      
      ### 3. Working with an API for Reviews
      **Project:** Implementing a review system where clients can leave feedback about services, and the admin can moderate those reviews.
      
      **Technical Challenge:** Dynamic Data Loading  
      I needed to integrate an API to fetch and display reviews dynamically when the page loaded.
      
      **Solution:** I used the fetch API to pull data from the backend. The reviews would load asynchronously when the page was opened, and the React components would update to reflect the new data.
      
      **Problem:** Some requests were slow or failed due to server issues.
      
      **Fix:** I added error handling and user notifications in case the reviews couldn’t be loaded. This ensured that users were aware of any issues without causing confusion.
      
      ### 4. Adding Animations to the Website
      **Project:** Adding smooth transitions and animations to enhance the visual appeal of the site.
      
      **Technical Challenge:** Smooth Background and Text Transition on Hover  
      The client wanted a card’s background to change and additional text to appear when hovering over service cards.
      
      **Solution:** I implemented CSS transitions with properties like transition to handle the background color change and opacity adjustment for the text.
      
      **Problem:** Initially, the transition was too abrupt, which didn’t meet the client’s expectations.
      
      **Fix:** I tweaked the timing of the transitions and added additional styles for the text to make the hover effect smoother and more visually appealing.
      
      ### 5. Optimizing Image Performance
      **Project:** A gallery with a large number of images, which could slow down page loading significantly.
      
      **Technical Challenge:** Image Optimization for Faster Load Times  
      High-quality images can take up a lot of space, leading to slow load times, especially on mobile devices.
      
      **Solution:** I implemented lazy loading, which only loads images when they are about to appear in the viewport. I also used modern image formats like WebP, which offer high quality at a smaller file size.
      
      **Problem:** Some browsers didn’t support the WebP format.
      
      **Fix:** I added fallback images in traditional formats like JPEG to ensure compatibility across all browsers.

      ### Conclusion
      These examples illustrate how to solve real-world technical challenges in web development using modern tools and techniques. It’s important to continuously improve your skills, anticipate potential issues, and find the most efficient solutions. Each project presents new challenges, and solving them helps you grow as a developer.
    `,
    imageUrl: '/images/blogs/post-three.jpg',
  },
]
