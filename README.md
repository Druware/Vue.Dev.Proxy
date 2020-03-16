# Vue.Dev.Proxy
A sample Docker container that can be used to proxy requests between a Development Vue.JS instance and a Development .NET Core instance. 

## Usage 

1. Open the folder in Visual Studio Code ( or Terminal or a Command Prompt )
2. Run the script 'generate-configuration-file' via Visual Studio Code, or NPM
3. Run the script 'docker-build' via Visual Studio Code, or NPM
4. Start the resulting image using 'docker-run' via Visual Studio Code, or NPM
5. Develop and debug in your related environments.

## Notes

The proxy assumes the default port of 8080 for the Vue.Js instance, the default.conf file can be altered to adjust to other ports.  

The proxy assumes the ASP.Net Core services ar eexposed on port 8000.  The default.conf file can be altered to adjust to other ports.  

The proxy assumes the default Web API root of /api/.  The default.conf file can be altered to adjust to other ports.
