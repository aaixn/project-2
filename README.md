# safe-space overview

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo](https://github.com/aaixn/study-space)
- [deployment](https://study-space-10crpfv3q-aaixn.vercel.app/)
- [demo recording](https://youtu.be/MZJB-6yODpw)

## Technologies/Sources
- API: https://motivational-quote-api.herokuapp.com/
- Wallpapers from https://imgur.com/user/IschemiaLad
- Music from https://www.chosic.com/free-music/lofi/
- https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

## Wireframes & React Component Hierarchy

- [wireframes](https://media.git.generalassemb.ly/user/45700/files/5a096ff8-1efb-4fa6-bcea-8157e4642c11)
- [react architecture](https://i.imgur.com/eqcbcoo.png)


## MVP/PostMVP 

#### MVP
- Find and use external api (motivational quotes)
- Render data on page when user clicks on the quote button
- Display a pomodoro style timer

#### PostMVP

- Add a kanban board
	- allow user to move items within the kanban board
- Add a notepad
- Display user's date and time
- Add a music player
- Allow users to change wallpaper
- Make widgets draggable
- Implement color themes
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
| MusicPlayer component | L | 8hrs| 3hrs |
| Styling | L | 10hrs| 7hrs |
| Total | H | 30hrs| 22.5hrs |

## Additional Libraries/ Packages
 - Axios
 - react-draggable
 - react-icons (Bootstrap Icons)

## Code Snippet

Snippet from Pomodoro component that conditionally changes timer when the time for each duration.

```

if (sec === 0) {
	if(min === 0) {
		let minutes = message ? 24 : 4
		let seconds = 59

		setSec(seconds)
		setMin(minutes)
		setMessage(!message)
	} else {
		setSec(59)
		setMin(min-1)
	}
                
```


## Issues and Resolutions
**ERROR**: blocked by CORS policy
https://media.git.generalassemb.ly/user/45700/files/22848665-cbbc-4979-98b4-7eeaa28be1b8
I had trouble with my initial API with CORS blocking me.

**RESOLUTION**:  The workaround required an extension (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) and the solution for the code was derived from (https://www.geeksforgeeks.org/reactjs-cors-options/). However, I ultimately didn't want users to need to download an extension to use the app, so I found a new API.

**ERROR**: draggable components extended the homepage and made it scrollable

**RESOLUTION**:  use overflow:hidden in the CSS file of the homepage
