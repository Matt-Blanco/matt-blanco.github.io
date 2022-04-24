import React from "react";
import Sketch from "react-p5";

let refreshCount = 0;
let x = window.innerWidth / 2
let y = window.innerHeight / 2;
let stepX = 0;
let stepY = 0;
let bg2, bg3;
let c4;

export default function Background(props) {
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        // createCanvas(windowWidth, windowHeight);
        p5.noFill()
        bg2 = "White"
        bg3 = "#f0e3db"

        c4 = "#723D73" //darkpurple
        p5.frameRate(30)
    };

    const draw = (p5) => {
        // p5.background("#f0e3db");
            p5.background("White");
            if (refreshCount === 0 || refreshCount % 60 === 0) {
                refreshCount = 0
                // while (!(stepX + x >= width || stepX + x < 0) && 
                //        !(stepY + y >= height || stepY + y < 0)) {
                stepX = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                stepY = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                console.log(`${x} + ${y}`)
                console.log(`${stepX} + ${stepY}`)
                // }
            }

            if (stepX + x < 0 || stepX + x > window.innerWidth) {
                stepX *= -1
            }
            if (stepY + y < 0 || stepY + y > window.innerHeight) {
                stepY *= -1
            }

            //ellipse7
            p5.strokeWeight(9)
            p5.stroke(c4)
            x += stepX
            y += stepY
            p5.ellipse(x, y, 300, 300)

            p5.colorMode(p5.RGB)


            refreshCount += 1

    };

    return <Sketch setup={setup} draw={draw} />;
};