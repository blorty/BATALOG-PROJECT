import React from "react";
import '../App.css';

function History() {
    return (
        <div className="App min-h-screen animate-moveGradient" style={{ minHeight: "100vh" }}>
            <h1
            className="text-yellow-500 pt-3.5 pb-3.5 text-9xl"
            style={{
                textShadow: "-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937",
                marginBottom: "2rem" // add margin to bottom
            }}
            >
            BATMAN HISTORY
            </h1>
            <p className="text-white pt-3.5 pb-3.5 text-2xl" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            Batman is a superhero from DC Comics, created in 1939 by Bob Kane and Bill Finger. He is actually Bruce Wayne, a
            rich philanthropist who lives in Gotham City. As a child, Bruce saw his parents killed and vowed to fight against
            crime.
            </p>
            <p className="text-white pt-3.5 pb-3.5 text-2xl" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            Bob Kane, the creator of Batman, originally drew a character with a red costume and bat wings, but collaborator
            Bill Finger suggested changes to the character's appearance, including a cowl instead of a simple mask and a
            cape instead of wings.
            </p>
        </div>
        );
    }

export default History;