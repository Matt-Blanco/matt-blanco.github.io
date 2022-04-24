import React from "react";
import Sketch from "react-p5";

let circles = [{
    x: window.outerWidth / 2,
    y: window.outerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#723D73",
    strokeWeight: 9,
    width: 300,
    height: 300,
    refreshRate: 60
},
{
    x: window.outerWidth / 2,
    y: window.outerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#038C8C",
    strokeWeight: 5,
    width: 400,
    height: 400,
    refreshRate: 30
},
{
    x: window.outerWidth / 2,
    y: window.outerHeight / 2,
    stepX: 0,
    stepY: 0,
    color: "#E99379",
    strokeWeight: 22,
    width: 150,
    height: 150,
    refreshRate: 120
}];
let refreshCount = 0;
let c4;
const bg2 = "White";

export default function Background(props) {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.outerWidth, window.outerHeight).parent(canvasParentRef);
        p5.noFill()

        c4 = "#723D73" //darkpurple
        p5.frameRate(45)
    };

    const draw = (p5) => {
        p5.background(bg2);
        circles.forEach(circle => {
            if (refreshCount % circle.refreshRate === 0) {
                circle.stepX = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                circle.stepY = p5.random(25, 75) / 60 * p5.random([-1, 1]);
            }
        })


        circles.forEach(circle => {
            if (circle.stepX + circle.x < 0 || circle.stepX + circle.x > window.outerWidth) {
                circle.stepX *= -1
            }
            if (circle.stepY + circle.y < 0 || circle.stepY + circle.y > window.Outerheight) {
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