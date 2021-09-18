# MyReadApp Project

## Overview

MyReadApp project is created such that it allow any users to select and categorize books that they are currently reading, want to read and have read. the project emphasizes using React to build the application. an API server and a clinent library is use to provide information as the user interacts with the application.

# Specification

i was provided with a starter app template that was static without any React code needed to perform the functionality. My job was be to add interactivity to the app by refactoring the static code in the template.

# How to run the project

To run the project, download or clone the repository in your computer:
[ Git clone](https://github.com/mufidat3250/My-Read-App.git)

and follow the instruction below.

- install all project dependencies with `npm install`
- start the development server with `npm start`

Also note that the backEnd server -against which the web app was developped was provided by udacity. the provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods i used to perform necessary operation on the backend:

- getall
- update
- search

for more update on how to use this method please refer to the original [Udacity repository](https://github.com/udacity/reactnd-project-myreads-starter.git)

# App Functionality

In this specific application the main page display a list of three shelves, each contains numbers of defferent books. the three shelves are as follow

- Currently Reading
- Want to Read
- Read

Each shelf is programmed such that users are able to move books from and to there desired shelf. and also a search page is programmed such that the user can select any book of her choice to any of the shelves.

# Vital

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for suger girl don't come back with any results.

# Credits And Helpful link

- Starter code provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter.git)

- Udacity Workshop

* [React Documentations](https://reactjs.org/docs/getting-started.html)
* React Router from [reactrouter.com](https://reactrouter.com/web/guides/quick-start)

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). for more information click [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Future Modifications

- fined a way to create a rating section for the app
- add unique features like note
