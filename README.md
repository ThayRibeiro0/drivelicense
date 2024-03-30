# Create app from zero   📁

# Node.js and npm: ⬇️

Node.js is a JavaScript runtime that comes with npm, the Node Package Manager, which you'll use to install and manage packages for your project.

_How can I Download Node.js?_
Visit the official Node.js website at https://nodejs.org/.

_Choose the LTS version:_
It's recommended to download the LTS (Long Term Support) version, as it provides stability and support for a longer duration. Look for the LTS version and click on the "Download" button.

_Select your operating system:_
Node.js supports multiple operating systems. Choose the appropriate installer for your operating system (Windows, macOS, or Linux).

_Run the installer:_
Once the download is complete, run the installer and follow the installation instructions provided by the installer.

_Verify the installation:_
After the installation is complete, you can verify that Node.js and npm are installed correctly by opening a terminal or command prompt and typing the following commands:
**bash**
**Copy code**
**node --version**
**npm --version**

_Optional: Configure npm proxy (if you're behind a proxy):_
If you're behind a proxy, you may need to configure npm to work properly. You can do this by running the following commands in your terminal:
**bash**
**Copy code**
**npm config set proxy http://proxy.example.com:port**
**npm config set https-proxy http://proxy.example.com:port**
*Replace http://proxy.example.com:port with your actual proxy address and port.*

# Text Editor or IDE: ⬇️

You'll need a text editor or an Integrated Development Environment (IDE) to write your code. Popular choices include: - Visual Studio Code; Visit the official their website at: https://code.visualstudio.com/download - Sublime Text; Visit the official their website at: https://www.sublimetext.com/3 - Atom, or; Visit the official their website at: https://atom-editor.cc/ - WebStorm. Visit the official their website at: https://www.jetbrains.com/webstorm/download/#section=mac

# GitHub: 💻

While not strictly necessary for the project setup, having Git installed can be useful for version control. Visit the official their website at: https://github.com/

# React, TypeScript, and Vite Project: 📂

## Create a New Directory 🆕

Open your terminal or command prompt and create a new directory for your project.

- mkdir my-react-app 
- cd my-react-app
**npm init**
**npm create vite@latest**
- cd drivelicense
**npm i**
**npm run dev**

## Create and Edit the project Files 🗄️

In this case I only use index.html and app.tsx at the assets/src to create this simple project.

## Run Your Application 🏃🏽‍♀️

Start the Vite development server.### If you already didn't it now run the npm run dev Your React app with TypeScript and Vite should now be running. You can open your browser and navigate to http://localhost:3000 to see your application in action.


# Docker Compose:

Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to use a YAML file to configure the services, networks, and volumes for your Docker containers, making it easier to manage complex applications with multiple components. With Docker Compose, you can define your application's architecture and dependencies in a single configuration file, which can then be used to build, start, stop, and manage your containers as a single unit.

## Install ⬇️

First check if you alredy don't have it with: docker-compose -v, docker-compose version or docker-compose --version
You can install Docker Compose using various methods depending on your operating system. Here are instructions for common platforms:

 **pip install -U docker-compose**

1. Linux:
**bash**
**Copy code**

    **sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose**
   **sudo chmod +x /usr/local/bin/docker-compose**

2. macOS:
Docker Compose is included with Docker Desktop for Mac, so if you have Docker Desktop installed, Docker Compose should already be available. If not, you can install Docker Desktop from the Docker website: https://www.docker.com/products/docker-desktop

3. Windows:
Docker Compose is included with Docker Desktop for Windows, so if you have Docker Desktop installed, Docker Compose should already be available. If not, you can install Docker Desktop from the Docker website: https://www.docker.com/products/docker-desktop

## Upgrade Docker Compose ⬆️

To upgrade Docker Compose to the latest version, you can use the following commands:

1. Linux:
**bash**
**Copy code**
   **sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose**
    
    **sudo chmod +x /usr/local/bin/docker-compose**

Replace 1.29.2 with the latest version available from the Docker Compose releases page: https://github.com/docker/compose/releases

2. macOS and Windows:
If you're using Docker Desktop, Docker Compose is typically updated along with Docker Desktop updates. You can check for updates through the Docker Desktop application or by visiting the Docker website for the latest release.

## Verify Installation: 👀

After installation or upgrade, you can verify that Docker Compose is installed and the version is correct by running:
**bash**
**Copy code**
**docker-compose --version**

This command should display the version of Docker Compose installed on your system.

Create docker compose file at any location on your system docker-compose.yml
new file -> name: docker-compose.yml -> use this information inside it to run:

    *services:
        web:
            image: nginx
        database: 
            image: redis*
            
 If it works save it.

    // Check the validity of file by command and if show the components inside it's working: 
        docker-compose config

     // Run docker-compose.yml file by command:
        docker-compose up -d

    // To see the containers running:
        docker-compose ps

    // to stop everything
        docker-compose down

    // To see the containers running:
        docker-compose ps

    // Run docker-compose.yml file by command with database:
        docker-compose up -d --scale database=4

        // To see the containers running:
        docker-compose ps 

    // to stop everything/remove
        docker-compose down

    // To see the containers running:
        docker-compose ps  


# GithHub Pages 📃

**npm i gh-pages -save-dev**
**npm run build**

## Deploy

 Create new repository in Githib with the same name of this project `todo4` save like public to others people can see and follow the instructions of the github.
    Open the project and terminal and run `git init`, readme create you same then jump and run `git add .`, after `git commit -m "Message commit that you would like put here"`, git branch -M main, copy and pasta the `git remove add origin url` that appear in the git with the url to dont have error and `git push -u origin main` after this upload the page and you can see the project in the github.

 To work with github pages install `npm i gh-pages -save-dev` and package.json add:
       
        //top line:
        "homepage": "https://<githubusername>.github.io/<repositorynameofthisproject>",
        
        //inside the scripts:
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"

optional - in vite.config.js:

		base: "/repositoryname"

 After this run `npm run deploy` if run without error works, then its only go to github pages and wait appear the link and you can share your project with others users.