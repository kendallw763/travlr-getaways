![image](https://github.com/user-attachments/assets/273776ee-3a75-4902-add3-6bfbd2e8ac03) 
## Version 1.0

![Screenshot 2025-04-11 at 1 39 16 PM](https://github.com/user-attachments/assets/60c15206-6722-47a2-9a75-372545e2d6a9)

![Screenshot 2025-04-11 at 1 45 22 PM](https://github.com/user-attachments/assets/01d3f5ba-ed6e-49c3-8887-9ead86191c5e)

![Screenshot 2025-04-11 at 1 39 32 PM](https://github.com/user-attachments/assets/252cffd8-3ee3-4309-8956-53f95e08025e)

![Screenshot 2025-04-11 at 1 39 36 PM](https://github.com/user-attachments/assets/69086946-4607-44c3-8590-d009c97a6285)

![Screenshot 2025-04-11 at 1 39 39 PM](https://github.com/user-attachments/assets/21512be5-f717-4289-9df7-1802a2faffe9)

![Screenshot 2025-04-11 at 1 39 43 PM](https://github.com/user-attachments/assets/f29e135c-8b2b-4214-a504-7b6f91b37f52)

![Screenshot 2025-04-11 at 1 39 47 PM](https://github.com/user-attachments/assets/ca0608e5-11fd-42e5-8be2-ae284d181640)


## Document Revision History

Version	Date	Devleoper	Comments
1.0	11/15/24	Kendall White	This document reviews the summary, constraints, system architecture, component, class, and sequence diagrams, and API endpoints. Furthermore, this explains the user interface and its relationship to the backend which makes up the project to its entirety. 

## Executive Summary

The requirements are made so that the client side, server, and the database are all connected to give the application functionality for users to make trip booking selections.  After the server has started and the website is up and running, information from user selections is then passed on to the database for storage of trip bookings and travel such as air fare, cruising options, and hotel selections. This information is used to be recalled later when the user logs into their account to view the selected elements.

The mean stack allows me to create this functionality through the front end and back end of the application. The front end is used with Angular, JavaScript, HTML, CSS, and handlebars to render the page and dynamically display the content for the user. On the back end, MongoDB is used to store the information, the express is used to fire up the webpage on command by the developer before production, node.js is responsible for management the packages within the application to allow it to run through Json templates. Hence, the name “M.E.A.N” (MongoDB, Express, Angular, and Node.js). Without these technologies and frameworks, the application will cease to run properly.

The customer facing side of the application is dynamically rendered within the SPA (single page application) to allow for faster run times on a single page. This also gives the user a better experience with using the site due to components within Angular applications. Instead of creating every page with a single HTML file attached to CSS files to create the ‘template or the theme’. Angular components can be created to lead to faster build times and each component is associated with a specific functionality within the webpage. 

## Design Constraints

There are various constraints when designing angular applications. Architectural, performance, tooling and the ecosystem, scalability and maintenance, deployment, UI/UX, integration, testing, team processing, and constraints for the user.

Constraints for the user include real time features which can add more complexity. Team processing has a learning curve when working with unfamiliar technologies, constraints for testing with frameworks may be out of the stack for developers who are forced to use new testing frameworks such as jasmine or karma. Making integrations with backend API in conjunction with HTTP, which relies on a good structure or the API’s. API with poor design endpoints can make things more complicated. UI/UX can make the process of getting projects of the ground through ensuring the breakpoints or responsiveness are up to par. When deploying a new application, the optimization of apps with differential loading are needed for overall better performance. Scalability and versioning may get in the way. Angular is frequently updated and constant updates of the framework may lead to more maintenance. 

The tooling and ecosystem constrain such as the framework specific command line interface dictates overall project structure and pipeline; This limits the flexibility for the builders of said applications who may be more accustomed to prebuilt software they may typically work with. The setbacks with performance when it comes to initial load times is; software may come in large bundles, which can take longer on application set up. Finally, the overall architecture, for example the component-based architecture of Angular. Enforces a modular, component-based system. Software developers must abide by the design pattern. This can restrict teams when transitioning too monolithic or non-modular patterns.

## System Architecture View

The overall architecture of the system must have certain properties in place for the application to run smoothly when in operation. When the user clicks onto the website, the session is started by the express server. Each area of the application has an associated component, giving that page of the SPA specific functionality without needing to redundantly recreate each page. This wastes a lot oof time during the build process. The server also is a component with and in of itself, once again making the build process less redundant. The information from the front end (user click a certain link, scrolls through the page, or perhaps enters their details so they may be contacted regarding inquiries) is tied into the server on the backend to be stored for later use and rendering. 

The server is also tied into the HBS templates which are used to create every HTML page but more efficiently throughout the application using Handlebars. The mongoose of it all is what captures user information to be rendered back onto the views template engine like, within a user profile which displays their traveling information for trip verification. The specific components that are used in conjunction with one another are the client component, the server component, and the database known as MongoDB. They all work together the render, monitor in real-time and to store information about the user(s).

## Component Diagram
<img width="468" alt="image" src="https://github.com/user-attachments/assets/bbe85bf3-2f7b-4ce3-a366-60ae75bb70cb">

The client component is comprised of four other components within it. The graphic library is what allows webpages to be rendered on a computer monitor. This ties into the web browser and the portfolio. Without the graphics library, the webpage will practically be nonexistent. The traveler portfolio is what the user sees only after they have logged into their specified account. This is for the purpose of viewing and verifying travel information. The web browser will be what the application is displayed on. There is tonos of choices for what browser the user will operate within. 

The scalability of the application through angular allows most if not all browsers to render what has been applied on the backend oof the application.  The client session is started after the user clicks onto the webpage. The aforementioned properties of the client component is how the front end for this project will be seen by users. The server component has four properties like application’s client. The client session is attached directly to the authentication server. This is to allow only the correct users to gain access to user profiles. The server session is also fired up upon user clicking “login”. In that instance, the server “session” will be running.

 The traveler database can pull information for storage to be used later. The mongoose is also a part of the database. Which is a third part library that models the MongoDB database for Node.js and JavaScript. Without this, the website will not have the dynamically rendered content to be allocated between the front end and the backend of the application. The last component within Travlr Getaways, within it, holds one component called MongoDB. This is how the information which, in this case is used with JavaScript and other languages, can render the page from the front, to ‘under the hood’ of the application. All-in-all, these components within their own respects have jobs and certain functions for the application to render properly. Not only to render, but for developers to capture the information of the user so they may create a separate webpage (user profile) to create responses back to the webpage for user confirmation. 

## Sequence Diagram
<img width="468" alt="image" src="https://github.com/user-attachments/assets/d0d51713-511f-4003-9abb-394615bb253e">

The diagram above illustrates the flow of logic within the application. The process is within a loop that will be prominent if the user is on any page of the application or logged in to their profile. The MongoDB database is connected to the client side of the application and the server. The client side of the application has all pages needed for navigation and to render within the browser. 

The user’s information of what travel information they have created such as the cruise, flight, and the destination of the travel plans. The server on the other hand is how the application can be run in a live setting for the user. It monitors the use and access of each “client”. Weather they click of a link within the website, or they have successfully booked a travel location. The express server will pick up on that. The traveler database directly ties into the server session through the ODM. The server session is also connected to the authentication server. This is important for monitoring and ensuring the correct peoples are accessing the website. The authentication server is then routed back to the client side of the application. 
Within the ’knot’ of functionality, we see there are four properties that are interwoven into the program for successful live running and updates if needed. The client session, web browser, portfolio, and the graphic library are all working together to ensure a clean rendering of the webpage. All the way from the back end to the front for the user to view the information. Lastly, the MongoDB database is also attached into the portfolio. Mentioned previously within this document, the database must be linked to the front end of the application to bring a response back, to the user’s profile.

## Class Diagram
<img width="468" alt="image" src="https://github.com/user-attachments/assets/1fd48a77-b837-4b82-b004-dd363e7790fa">

The class diagram above depicts how the JavaScript classes come together to create a fully function application on the front end. App.js has the variables of create error, express, path, cookie parser, logger, index router, user router, travel router, handlebars, and the app. These are used to tell the interpreter to ‘require’ each variable so they may be used within the application. This class sets up the view engine for webpage rendering. Such as – “var express = require (‘express’);” The same is across the board for the rest of the classes within the application. Not every class needs all the requirements listed above but, some to create specific functionality in their own respects. Index.js is used to retrieve the view of the web page, travel.js is used for travel page rendering, and the user.js class is used to request the listing to the user of information within the database. 

## API Endpoints
Method	Purpose	URL	Notes
Router.get 
(ctrlMain)	Get the homepage	travlr/app_server/routes/index.js	Return the main page of the application.
Router.get
(controller.travel)	Get the travel page	Travlr/app_server/routes/travel.js	Returns the travel page within the browser.

## Summery

The structure of Angular is a front-end framework for the user interface that focuses on dynamic content on a web page. The architecture for express which, is built on node.js, focuses on the back-end server-side logic for properties such as requests, API endpoints, routing, and handling the data of an application. SPAs are better for more complex applications that require large amounts of functionality, interactivity, real time updates, and multiple pages. 

In addition, even when developing simple application this offers more scalability. Simple page websites do not require as many properties as a SPA does. They do not require a heap of functionality, interactivity, or multiple pages. The testing protocols are very basic for each end of applications when developing full stack apps. 

End-to-end testing is where developers/engineers test the application to its entirety. Essentially, they will use the application as if they are the users to ensure everything works as intended. Testing the API calls for verifying status codes when any issues are to arise. Just to name a few error codes, they are 504- gateway timeout, 500-internal server error, 503-service unavailable, and 400-bad request. 

These are all ways to determine where the errors might be so developers can snuff out the issues. The life server of express allows developers to view the CLI for any action that is taken upon the user. For example, they can see what page and specifically which page element holds issues. Depending on the elements, they are routed to the back end with intended functionality to send and receive PUT and GET to and from the database. All in all, everything comes together to create a dynamically styled multi-layered online application with high level functionality and complexity; With the ability to communicate to the database for storage and retrieval. 



