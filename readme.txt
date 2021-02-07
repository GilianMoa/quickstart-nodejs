npm init -y
npm i express dotenv body-parser
npm i nodemon sucrase -D
npm i eslint prettier -D
npx eslint --init

#on package.json file add:
"scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon src/server.js",
    "build": "sucrase ./src -d ./dist --transforms imports"
  },

#on debug configuration select add-configuration and config .vscode/lauche.json:
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    // Config reference https://www.youtube.com/watch?v=bVAhNaxBEjM
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "protocol": "inspector",
            "restart": true,
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
        }
    ]
}

#on nodemon.json file add:
{
    "watch": ["src"],
    "execMap": {
        "js": "node --inspect -r sucrase/register"
    },
    "ext": "js"
}

