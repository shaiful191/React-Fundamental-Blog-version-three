# React Fundamental-Blog Project (Final Version)

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
 
- Navigating between pages using **React Router**
- Working with dynamic routes and **URL Parameters**
- Fetching data from APIs using **fetch API**
- Creating reusable **Custom Hooks** like `useFetch`
- Performing **CRUD operations** (Create, Read, Delete)
- Managing side effects with the **useEffect Hook**
- Using conditional rendering for dynamic UI updates
- Building and handling **Forms** for user input using controlled inputs
- Leveraging **React Icons** for UI enhancements
- Using JSON Server(for testing APIs)


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
![image](https://github.com/user-attachments/assets/a6df3e2a-70bc-4e2d-9af1-2e87fe0d45d2)

- Blog Details Page
![image](https://github.com/user-attachments/assets/64b2563e-41ef-4e6e-bede-9697919501a3)
![image](https://github.com/user-attachments/assets/f242e096-1eb6-46bc-9ccb-824e8023f0d1)


- Add Blog Page
![image](https://github.com/user-attachments/assets/56b5a074-6027-4224-827f-76696dd9ff9e)


- Not Found Page
![image](https://github.com/user-attachments/assets/de11e015-3de3-40aa-bc75-33ced223f0e8)


## Author
Shaiful Islam

## License
This project is licensed under the MIT License.
Thank you for checking out my project! Feel free to contribute or reach out for any inquiries. 🚀
