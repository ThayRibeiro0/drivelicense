#**Create app from zero**

###**Node.js and npm:**
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
    bash
    Copy code
    node --version
    npm --version
    This should print the versions of Node.js and npm installed on your system, confirming that the installation was successful.

    _Optional: Configure npm proxy (if you're behind a proxy):_
    If you're behind a proxy, you may need to configure npm to work properly. You can do this by running the following commands in your terminal:
    bash
    Copy code
    npm config set proxy http://proxy.example.com:port
    npm config set https-proxy http://proxy.example.com:port
    Replace http://proxy.example.com:port with your actual proxy address and port.

###**Text Editor or IDE:**
    You'll need a text editor or an Integrated Development Environment (IDE) to write your code. Popular choices include:
    - Visual Studio Code; Visit the official their website at: https://code.visualstudio.com/download
    - Sublime Text; Visit the official their website at: https://www.sublimetext.com/3 
    - Atom, or; Visit the official their website at: https://atom-editor.cc/
    - WebStorm. Visit the official their website at: https://www.jetbrains.com/webstorm/download/#section=mac

###**Git:**
    While not strictly necessary for the project setup, having Git installed can be useful for version control.
    Visit the official their website at: https://github.com/
    
    
##**React, TypeScript, and Vite Project:**

###**Create a New Directory: Open your terminal or command prompt and create a new directory for your project.**
    mkdir my-react-app
    cd my-react-app
    
    npm init
    npm create vite@latest
    cd drivelicense
    npm i
    npm run dev

###**Create and Edit the project Files:**
    In this case I only use index.html and app.tsx at the assets/src to create this simple project.

###**Run Your Application: Start the Vite development server.**
    If you already didn't it now run the npm run dev
    Your React app with TypeScript and Vite should now be running. You can open your browser and navigate to http://localhost:3000 to see your application in action.

###**Docker Compose:**
    Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to use a YAML file to configure the services, networks, and volumes for your Docker containers, making it easier to manage complex applications with multiple components.
    With Docker Compose, you can define your application's architecture and dependencies in a single configuration file, which can then be used to build, start, stop, and manage your containers as a single unit.
    
    ***_Install:_
    // first check if you alredy don't have it with: docker-compose -v, docker-compose version or docker-compose --version
    You can install Docker Compose using various methods depending on your operating system. Here are instructions for common platforms:

    1. *pip install -U docker-compose*

    2. Linux:
    bash
    Copy code
        sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        
        sudo chmod +x /usr/local/bin/docker-compose
    
    3. macOS:
    Docker Compose is included with Docker Desktop for Mac, so if you have Docker Desktop installed, Docker Compose should already be available. If not, you can install Docker Desktop from the Docker website: https://www.docker.com/products/docker-desktop

    4. Windows:
    Docker Compose is included with Docker Desktop for Windows, so if you have Docker Desktop installed, Docker Compose should already be available. If not, you can install Docker Desktop from the Docker website: https://www.docker.com/products/docker-desktop

    ***_Upgrade Docker Compose:_
    To upgrade Docker Compose to the latest version, you can use the following commands:
    
    1.Linux:
    bash
    Copy code
        sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        
        sudo chmod +x /usr/local/bin/docker-compose
    
    Replace 1.29.2 with the latest version available from the Docker Compose releases page: https://github.com/docker/compose/releases

    2. macOS and Windows:
    If you're using Docker Desktop, Docker Compose is typically updated along with Docker Desktop updates. You can check for updates through the Docker Desktop application or by visiting the Docker website for the latest release.

    ***_Verify Installation:_

    After installation or upgrade, you can verify that Docker Compose is installed and the version is correct by running:
    bash
    Copy code
    docker-compose --version
    This command should display the version of Docker Compose installed on your system.

    Create docker compose file at any location on your system docker-compose.yml
    new file -> name: docker-compose.yml -> use this information inside it to run your and see it works and save:
        services:
            web:
                image: nginx
            database: 
                image: redis

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



