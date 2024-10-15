<h1 align="center">Autobattler v0</h1> 

## Table of Contents

- [🛠️ Installation](#%EF%B8%8F-installation)
  - [Step 1: Clone the Github repository](#step-1-clone-the-github-repository)
  - [Step 2: Install dependencies](#step-2-install-dependencies)
  - [Step 3: Configure the server part](#step-3-configure-the-server-part)  
- [💻 Usage](#-usage)
- [🔩 List of Dependencies](#-list-of-dependencies)
- [🔑 License](#-license)
- [💡 Contribution](#-contribution)
- [💖 Support the Project](#-support-the-project)

## 🛠️ Installation

### Step 1: Clone the Github repository

- Open your development directory to clone the Github repository:
   ```css
   git clone https://github.com/ToxyhDev/vitejs-stack-mern-quickstart.git
   ```

### Step 2: Install dependencies

- Go to the **root directory** of the project:
   ```shell
   cd vitejs-stack-mern-quickstart
   ```
  - Install global dependencies of the project:

     ```shell
     # With NPM:
     npm install
     # With Yarn:
     yarn
     ```

- Go to the **client** directory:
   ```shell
   cd client
   ```
   - Install client-side dependencies:

     ```shell
     # With NPM:
     npm install
     # With Yarn:
     yarn
     ```

- Go to the **server** directory:
     ```shell
   cd ../server
   ```
   - Install server-side dependencies:
    
     ```shell
     # With NPM:
     npm install
     # With Yarn:
     yarn
     ```

### Step 3: Configure the server part
> **Note**
>
>If you don't want to connect your database immediately, you can skip to [💻 Usage](#-usage)

9. Create a file named .env and register MongoDB API key:
    
   ```env
   ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>/?retryWrites=true&w=majority
   ```
   > **Warning**
   > 
   > **If no database is connected to the server part, an error message will be displayed in the console when starting the project**

## 💻 Usage

 ### Start the development server:

- Go to the root of the project.
> **Note**
>
> This is the global directory where you have the client and server folders.

- In this directory, run the command:
```shell
# With NPM:
npm run dev
# With Yarn:
yarn run dev
```
> **Warning**
>
> If you only want to use the client part:
>
> ```shell
> # With NPM:
> npm run dev-client
> # With Yarn:
> yarn run dev-client
> ```


## 🔩 List of Dependencies

### Development Dependencies:

- **vite**: Fast development tool for modern web applications. Provides high development performance with its fast compilation and on-demand module loading.

- **typescript**: Superset of JavaScript with static typing features. Allows detecting potential errors early in the development phase.

- **sass**: Sass compiler to transform Sass files into CSS in your project.

- **eslint**, **eslint-plugin-react-hooks**, and **eslint-plugin-react-refresh**: ESLint and associated plugins for detecting errors in React code, with additional rules for React hooks and hot reloading.

### Frontend Dependencies:

- **bootstrap**: CSS framework for creating responsive and mobile web interfaces.

- **react** and **react-dom**: Core libraries for building responsive user interfaces. React is a JavaScript framework for creating reusable components, and React DOM facilitates rendering React components in the browser.

- **react-router-dom**: Library for managing routes in a React application. Allows creating multi-page applications and navigating between different views.

### Backend Dependencies:

- **cors**: Enables resource sharing between origins. Facilitates communication between frontend and backend by accepting cross-origin requests.

- **dotenv**: Loads environment variables from a .env file into the `process.env`. Allows separating configuration files from code and securely storing sensitive information.

- **express**: Web framework for Node.js. Facilitates handling routes, HTTP requests, and middlewares.

- **mongodb**: MongoDB database driver for connecting to the MongoDB database and working with data.

- **mongoose**: Modeling library for MongoDB in Node.js. Facilitates schema creation for your data and provides methods to interact with the MongoDB database.

> **Note**
> 
> You can find more information about these dependencies in the project's documentation or their respective websites.



## 🔑 License

[MIT](LICENSE).

