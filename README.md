# WebFinal



-Design a Query search system that can search different courses and retrieve ther desired filtered data back.
-Requirements for Project 
--Back-End API Specifications

Functional Requirements

Your solution must include a back-end API service that will provide access to information about the courses offered. In particular, your API must provide parameterized routes to query the list of available courses as follows:

A route with endpoint ‘api/by_course_code/:qcode’. The route is expected to query courses by course code or code pre-fix and return a formatted JSON response. For example, 'CUS' should return all CUS courses, while 'CUS1172' must return only the session for the CUS1172 course.
A route with endpoint ‘api/by_title /:qtitle’: The route is expected to query courses by title and return a formatted JSON response. The query should return all courses whose title includes a given query sting. For example, the query string 'Software' should return all course sessions for both "Software Engineering" and "Software Design Methods" courses;
A route with endpoint ‘api/by_instructor /:qname’. The route is expected to query courses by instructor's name, and should return the list of courses taught by that instructor as JSON response. The query should support partial name queries; for example, a query with the string “Chr” should return courses offered by any instructor whose name include “chr” as part of their first name or last name.
A route with endpoint ‘api/by_level/:qlevel' The route should filter the courses by their level (i.e. ‘graduate’ or ‘undergraduate’ level course) and return courses that match the query as a JSON object. 
A route with endpoint ‘api/combined_query/:qname/:qlevel'. The route is expected to query courses based on a combination of two criteria (i.e. instructor's name and whether the course is an undergraduate or graduate course) and return the results as a JSON object.


--Technical requirement:

Your API must be implemented in Node.js using the express library.
Your API should have parameterized routes to provide access to the data.
Each query must have its own parameterized route.
Return data must include all available information about the course as listed on the website.
Each route should dynamically filter the data provided in the ‘course.json’ data file (i.e. you an not allowed to pre-filter the data as separate static JSON objects)
Your routes for the API must be organized in a separate file and use the 'express.Router()' class.
You must provide documentation of all routes you API supports, and how to start your API applications. Store this information in a file README.md at the root folder of your project's repository.





Front-end API Demo application Specifications

Your solution must provide a simple front-end web applications that demonstrates the functionality of your back-end API. The demo applications myst displays a list of course information that are return by your API and allows the user to filter the list of courses using several query parameters to the API . Your front-end should be a single-page application that uses HTML, CSS, and bootstrap to format a webpage capable of displaying a list of courses and provide a user interface (i.e. a form with input fields - choice of text, radio button, checkbox or buttons) to allow the user to specify filtering criteria. A user should be able to enter query criteria and when submitting the query, your page should asynchronously load the filtered courses (using the API you created) and display the updated filtered list. Your user interface must meet the following requirements:

use HTML, CSS, bootstrap, and JavaScript in separate HTML, CSS and JavaScript code in separate files.
use a template; you can use one of the templates you had in previous projects or select a new one.
Your styling of the page must be visually appealing. 
The course information must be loaded dynamically by issuing asynchronous requests to the back-end API you created. You can use any of the three methods we covered in class to asynchronously load remote data (i.e. `callbacks`, `fetch` using the `promises` syntax or `fetch` using `async/await` syntax).
 Your query and UI must support all query options available in your API (i.e. query by instructor's name, query by course level etc.)
Your application must dynamically manipulate the DOM to reflect the list of course that much the user's query parameters.
All filtering must occur on the back-end (i.e. via your API), do not include any filtering logic in the front end.  
Deployment Requirements

1.    Your RESTful API application must be deployed on the Heroku hosting platform ( https://signup.heroku.com/) and it must be accessible through the web. Heroku is a Platform as a Service (PaaS) and provides a free account that allows you host your node.js and express applications (among other hosting options). You must deploy your application directly from your remote GitHub repository. As a deployment method, you are expected to use the GitHub Deployment (i.e. not to use the Heroku CLI). As part of this requirement, you are expected to research the deployment procedure on Heroku and deploy your application and document the deployment process.



2.    Your updated SPA application must be deployed on the Netlify hosting platform (https://www.netlify.com/) and must be accessible through the web. Your deployment must also include the previous version of your SPA application (i.e. milestone one) .Netlify provides a free individual account to host your applications.



3.    The source code of your both applications must be hosted in a private repository on GitHub, and add your instructor as a collaborator in order to review your code.




Link to Heroku/Netlify:

https://uis-ju.herokuapp.com/api/
https://wonderful-joliot-465b42.netlify.app/mynodes/front_end/frontend




TO NOTE: Netlify and heroku currently having complications accessing the query data. Meaning, when queried on netlify, the data from heroku api does not send data to display.
