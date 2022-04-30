import React from "react";
import Sketch from "react-p5";

let width = window.innerWidth;
let height = window.innerHeight;
console.log(`${width} ${height}`)
let circles = [{
    x: width / 2,
    y: height / 2,
    stepX: 0,
    stepY: 0,
    color: "#723D73",
    strokeWeight: 9,
    width: 300,
    height: 300,
    refreshRate: 60,
    mouseRatio: 0.50
},
{
    x: width / 2,
    y: height / 2,
    stepX: 0,
    stepY: 0,
    color: "#038C8C",
    strokeWeight: 5,
    width: 400,
    height: 400,
    refreshRate: 30,
    mouseRatio: 0.75
},
{
    x: width / 2,
    y: height / 2,
    stepX: 0,
    stepY: 0,
    color: "#E99379",
    strokeWeight: 22,
    width: 150,
    height: 150,
    refreshRate: 120,
    mouseRatio: 0.25
},
{
    x: width / 2,
    y: height / 2,
    stepX: 0,
    stepY: 0,
    color: "#F25764",
    strokeWeight: 2,
    width: 500,
    height: 500,
    refreshRate: 30,
    mouseRatio: 1
}, {
    x: width / 2,
    y: height / 2,
    stepX: 0,
    stepY: 0,
    color: "#F27D52",
    strokeWeight: 25,
    width: 50,
    height: 50,
    refreshRate: 300,
    mouseRatio: 0.10
}];
const bg2 = "White";
let refreshCount

export default function Background(props) {
    refreshCount = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth , p5.windowHeight).parent(canvasParentRef);
        p5.noFill()

        p5.frameRate(45)
    };

    const draw = (p5) => {
        // console.log(`${p5.mouseX} - ${p5.mouseY}`)

        p5.background(bg2);
        if (width !== p5.windowWidth || height !== p5.windowHeight) {
            width = p5.windowWidth;
            height = p5.windowHeight;
            p5.resizeCanvas(width, height);
        }

        if (p5.windowWidth <= 600) {
            circles.forEach(circle => {
                if (refreshCount % circle.refreshRate === 0) {
                    circle.stepX = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                    circle.stepY = p5.random(25, 75) / 60 * p5.random([-1, 1]);
                }
            })
    
    
            circles.forEach(circle => {
                if (circle.stepX + circle.x < 0 || circle.stepX + circle.x > width) {
                    circle.stepX *= -1
                }
                if (circle.stepY + circle.y < 0 || circle.stepY + circle.y > height) {
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
        } else {
            circles.forEach(circle => {

                circle.x = p5.mouseX > width/2 ? width/2 + ((p5.mouseX - width/2) * circle.mouseRatio) :
                width/2 - ((width/2 - p5.mouseX) * circle.mouseRatio);
                circle.y = p5.mouseY > height/2 ? height/2 + (p5.mouseY - height/2) * circle.mouseRatio :
                height/2 - (height/2 - p5.mouseY) * circle.mouseRatio;

                p5.strokeWeight(circle.strokeWeight)
                p5.stroke(circle.color)
                p5.ellipse(circle.x, circle.y, circle.width, circle.height)
            })
        }
    };
    return <Sketch setup={setup} draw={draw} />;
};