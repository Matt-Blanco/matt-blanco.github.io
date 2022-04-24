import React from "react";
import Sketch from "react-p5";

let circles = [{
    x:  window.innerWidth / 2,
    y: window.innerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#723D73",
    strokeWeight: 9,
    width: 300,
    height: 300
},
{
    x:  window.innerWidth / 2,
    y: window.innerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#038C8C",
    strokeWeight: 5,
    width: 400,
    height: 400
},
{
    x:  window.innerWidth / 2,
    y: window.innerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#E99379",
    strokeWeight: 22,
    width: 150,
    height: 150
}];
let refreshCount = 0;
let c4;
const bg2 = "White";

export default function Background(props) {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.noFill()

        c4 = "#723D73" //darkpurple
        p5.frameRate(45)
    };

    const draw = (p5) => {
            p5.background(bg2);
            if (refreshCount === 0 || refreshCount % 60 === 0) {
                refreshCount = 0
                circles.forEach(circle => {
                    circle.stepX = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                    circle.stepY = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                })
            }

            circles.forEach(circle => {
                if (circle.stepX + circle.x < 0 || circle.stepX + circle.x > window.innerWidth) {
                    circle.stepX *= -1
                }
                if (circle.stepY + circle.y < 0 || circle.stepY + circle.y > window.innerHeight) {
                    circle.stepY *= -1
                }  
                p5.strokeWeight(circle.strokeWeight)
                p5.stroke(circle.color)
                circle.x += circle.stepX
                circle.y += circle.stepY
                p5.ellipse(circle.x, circle.y, circle.width, circle.height)
            })

            p5.colorMode(p5.RGB)

            refreshCount += 1
    };
    return <Sketch aria="hidden" setup={setup} draw={draw} />;
};