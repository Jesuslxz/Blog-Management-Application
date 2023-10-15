import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navbar';
import BlogList from './Components/BlogList';
import CreatePostForm from './Components/CreatePostForm';
import DeletePost from './Components/DeletePost';
import Footer from './Components/Footer';
import BlogPost from './Components/BlogPost';
import DeleteComment from './Components/DeleteComment';
import AddComment from './Components/AddComment';
import EditPostForm from './Components/EditPostForm';


export default function App() {
  return (
  <div id= "app-container">
      <Router>
      <div id='content'>
      <Navigation /> {/*navbar for react router changes*/}

      <Switch>
        <Route path="/post/:id">
          <BlogPost />
        </Route>

        <Route path="/post/">
          <BlogList />
        </Route>

        <Route path="/admin">
          <h1>Admin Page</h1>
          <CreatePostForm />
          <br />
          <EditPostForm />
          <br />
          <DeletePost />
          <br />
          <AddComment />
          <br />
          <DeleteComment />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch> 
    </div>
    <Footer />
    </Router>
  </div>
  );
}

function HomePage(){
  return(
    <div className='m-3'>
      <header>
          <h1>Blog Management Application</h1>
          <p>A simple React-based web application for managing blog posts.</p>
      </header>

      <section>
          <h2>Things to note</h2>
          <ul>
              <li>Currently using personal MockAPI free endpoint</li>
              <li>Maximum of 100 blog post and 100 comments across the app</li>
              <li>No Updating Comments on post</li>
          </ul>
      </section>

      <section>
          <h2>Features</h2>
          <ul>
              <li>List all blog posts.</li>
              <li>View detailed information about a specific blog post using a unique ID and all the comments associated with the post.</li>
              <li>Create new blog posts.</li>
              <li>Create new Comments.</li>
              <li>Update existing blog posts using a PUT request.</li>
              <li>Delete specific blog posts and comments based on their unique ID.</li>
          </ul>
      </section>

      <section>
          <h2>Technologies Used</h2>
          <ul>
              <li>React</li>
              <li>React Router for routing.</li>
              <li>React Bootstrap and Bootstrap for styling.</li>
              <li>Fetch API for handling HTTP requests.</li>
              <li>MockAPI for dummy API endpoints and database to hold test content.</li>
          </ul>
      </section>

      <section>
          <h2>Installation and Setup</h2>
          <ol>
              <li><strong>Clone the repository:</strong> <code>git clone https://github.com/your-username/your-repo-name.git</code></li>
              <li><strong>Navigate to the project directory:</strong> <code>cd your-repo-name</code></li>
              <li><strong>Install the dependencies:</strong> <code>npm install</code></li>
              <li><strong>Run the development server:</strong> <code>npm start</code></li>
              <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a></li>
          </ol>
      </section>

      <section>
          <h2>Usage</h2>
          <ul>
              <li><strong>View Blog Posts:</strong> Click on "Blog List" on the navigation bar to see a list of all blog posts.</li>
              <li><strong>Create New Blog Post:</strong> Navigate to the "Admin" page and fill in the details to add a new blog post.</li>
              <li><strong>Create New Comment on Blog Post:</strong> Navigate to the "Admin" page and fill in the details to add a comment on a blog post.</li>
              <li><strong>Update Blog Post:</strong> Navigate to the "Admin" page and fill in the details to update an ID specific blog post.</li>
              <li><strong>Delete Blog Post:</strong> Navigate to the "Admin" page and fill in the details to Delete an ID specific blog post.</li>
              <li><strong>Delete Comment on Blog Post:</strong> Navigate to the "Admin" page and fill in the details to Delete an ID specific comment on a blog post.</li>
          </ul>
      </section>

    </div>
  )
}
