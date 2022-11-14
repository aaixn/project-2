# safe-space overview

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo]()
- [deployment]()
- [demo recording]()

## Technologies
- API: https://motivational-quote-api.herokuapp.com/

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes]()
- [react architecture]()

Define the the React components and the architectural design of your app.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the "client" will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase (or similar) for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header, include the nav | 
| Footer | This will render the footer, include links to github repo | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 
 - Axios

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
**ERROR**: blocked by CORS policy
https://media.git.generalassemb.ly/user/45700/files/22848665-cbbc-4979-98b4-7eeaa28be1b8
I had trouble with my initial API with CORS blocking me.

**RESOLUTION**:  The workaround required an extension (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) and the solution for the code was derived from (https://www.geeksforgeeks.org/reactjs-cors-options/). However, I ultimately didn't want users to need to download an extension to use the app, so I found a new API.
