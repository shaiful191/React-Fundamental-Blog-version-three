# React Fundamental-Blog Project (Version 3)

## Overview
This is a simple React-based blogging platform that demonstrates CRUD operations. The application allows users to create, read, and delete blog posts. It uses **React Router** for navigation, **React Icons** for UI elements, and a custom **useFetch** hook to fetch data from a JSON server.

## Features
- **Home Page**: Displays all blogs fetched from a JSON server.
- **Create Blog**: Form to create a new blog post with title, body, and author.
- **View Blog Details**: Detailed view of a specific blog.
- **Delete Blog**: Remove a blog post from the database.
- **404 Page**: Custom page for undefined routes.

## Purpose

The app demonstrates the implementation of various React concepts, including:
 
- **useRef**: Used for accessing and interacting with DOM elements in React.
- **Context API**: Implemented global state management in React applications with useContext and createContext.
- **useReducer**: Utilized for complex state management in React, especially in larger applications.
- **Asynchronous Programming**: Applied async/await for handling asynchronous tasks, such as API calls.
- **Bootstrap**: Leveraged Bootstrap for responsive and mobile-first web development.



## Project Structure

   ```bash
   react-blog-project/
├── src/
│   ├── components/
│   │   ├── BlogDetails.js
│   │   ├── BlogList.js
│   │   ├── Create.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   └── NotFound.js
│   ├── CustomHooks/
│   │   └── useFetch.js
│   ├── layouts/
│   │   └── Layout.js
|   |__ store
│   ├── AppRoutes.js
│   └── App.js
|   |__ index.css
|
├── data/
│   └── db.json
├── public/
├── package.json
└── README.md

```


## Usage
### Creating a Blog Post
1. Navigate to the **Add Blog** page.
2. Fill out the form fields (title, body, author) and submit.
3. The blog post will appear on the Home page.

### Viewing Blog Details
- Click on a blog card to view its details.

### Deleting a Blog Post
- In the blog details view, click the delete button to remove the blog.

## Custom Hook: `useFetch`
The custom `useFetch` hook is used to fetch data from an API. It supports aborting fetch requests to avoid memory leaks.

```javascript
const { data, isLoaded, error } = useFetch("http://localhost:8000/blogs");
```

## Style

The project uses a responsive design with modern CSS styling. Fonts are imported from Google Fonts, and a warm orange theme is used for highlights.

## Screenshots
- Home Page
![image](https://github.com/user-attachments/assets/12e8e4e0-61a8-4fb7-b997-91021c86f2fe)


- Blog Details Page
![image](https://github.com/user-attachments/assets/af11f936-9d89-46dd-a1fe-3d8a2b26e348)

![image](https://github.com/user-attachments/assets/f242e096-1eb6-46bc-9ccb-824e8023f0d1)


- Add Blog Page
![image](https://github.com/user-attachments/assets/a391b164-defa-44ce-bd64-1a73a6030367)


- Not Found Page
![image](https://github.com/user-attachments/assets/de11e015-3de3-40aa-bc75-33ced223f0e8)


## Author
Shaiful Islam

## License
This project is licensed under the MIT License.
Thank you for checking out my project! Feel free to contribute or reach out for any inquiries. 🚀
