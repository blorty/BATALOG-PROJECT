import React from "react";
import '../App.css';

function About() {
    return (
        <div className="App min-h-screen min-w-full animate-moveGradient container mx-auto flex flex-col items-center justify-center p-4">
        <h1 className="text-yellow-500 pt-3.5 pb-5 text-9xl" style={{textShadow:'-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937',}}>ABOUT</h1>
        <p className="text-white pt-3.5 pb-3.5 max-w-screen-lg mx-auto text-2xl text-center mb-8 rounded-lg bg-gray-600 p-4 opacity-80">
        Batalog is an app that provides information about all Batman movies and TV series, with a user-friendly interface and detailed summaries of each adaptation. The app will be a one-stop-shop for all things Batman, allowing fans to keep track of different actors, villains, and story arcs. Batalog will help bring together the Batman fandom through its community features, providing a sense of community and connection. With its potential to become the go-to app for all Batman fans, Batalog is a valuable resource for longtime fans and newcomers to the franchise.
        </p>
        </div>
    )
}

export default About;
