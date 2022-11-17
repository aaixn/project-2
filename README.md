# safe-space overview

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo](https://github.com/aaixn/study-space)
- [deployment](https://study-space-10crpfv3q-aaixn.vercel.app/)
- [demo recording]()

## Technologies/Sources
- API: https://motivational-quote-api.herokuapp.com/
- Wallpapers from https://imgur.com/user/IschemiaLad

## Wireframes & React Component Hierarchy

- [wireframes](https://media.git.generalassemb.ly/user/45700/files/5a096ff8-1efb-4fa6-bcea-8157e4642c11)
- [react architecture](https://files.slack.com/files-pri/T0351JZQ0-F04BG3ESMQS/image.png)


## MVP/PostMVP 

#### MVP
- Find and use external api (motivational quotes)
- Render data on page when user clicks on the quote button
- Display a pomodoro style timer

#### PostMVP

- Add a kanban board
- Add a notepad
- Display user's date and time
- Add a music player
- Allow users to change wallpaper
- Make widgets draggable
- Implement local storage

## Components

| Component | Description | 
| --- | :---: |  
| App | Include React Router| 
| Home | Conditionally render the components in the toolbar depending on each components' display state and initially grab the quote data | 
| Toolbar | Change component display on when clicked and link to the wallpaper selection page | 
| MotivationalQuote | Display a random quote and its author depending on the quote state | 
| KanbanBoard | Display a kanban board that has the functionality to move items from each section | 
| AddToDo | Child of the KanbanBoard. Display a form that prompts the user to input and add the user's input to the todo section of the kanban board | 
| Pomodoro | Display a timer that runs 25 min and 5 min interchangeably according to the pomodoro method| 
| Notes | An editable note that you can also discard | 
| DateTime | Display the user's current date and time | 
| Wallpaper | Display a page where user can select from a library of wallpapers to set for their space | 


## Time Frames


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Working with API | H | 3hrs| 5hrs |
| Adding Pomodoro Timer | H | 4hrs | 1.5hrs |
| Making components draggable | M | 5hrs | 1hrs |
| Styling | L | 10hrs| 7hrs |
| Total | H | 6hrs| 5hrs |

## Additional Libraries/ Packages
 - Axios
 - react-draggable
 - react-icons (Bootstrap Icons)

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
