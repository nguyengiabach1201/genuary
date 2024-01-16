let width = window.innerWidth, height = window.innerHeight;
let bubbleNumber = 50;
let bubbleColor, backgroundColor;

const flow1 = {
    posXs: [], posYs: [], diameters: [], velocities: [], colors: []
}

const flow2 = {
    posXs: [], posYs: [], diameters: [], velocities: [], colors: []
}

function setup() {
    createCanvas(width, height);
    frameRate(30);

    bubbleColor = color(random(255), random(255), random(255));
    backgroundColor = color(255 - red(bubbleColor), 255 - green(bubbleColor), 255 - blue(bubbleColor));

    for (let i = 0; i < bubbleNumber; i++) {

        flow1.posXs[i] = random(width);
        flow1.posYs[i] = random(height);

        flow1.diameters[i] = random(10,(width+height)/2/5);

        flow1.velocities[i] = random(2,5);

        flow1.colors[i] = color(red(bubbleColor) + random(-15,15), green(bubbleColor) + random(-15,15), blue(bubbleColor) + random(-15,15));

        // ---------------------------
        flow2.posXs[i] = random(width);
        flow2.posYs[i] = random(height);

        flow2.diameters[i] = random(10,(width+height)/2/5);

        flow2.velocities[i] = random(-2,-1);

        flow2.colors[i] = color(red(backgroundColor) + random(-15,15), green(backgroundColor) + random(-15,15), blue(backgroundColor) + random(-15,15));
    }
}

function draw() {
    
    background(backgroundColor);

    for (let i = 0; i < bubbleNumber; i++) {
        fill(flow1.colors[i]);
        noStroke();
        circle(flow1.posXs[i], flow1.posYs[i], flow1.diameters[i]);
        flow1.posYs[i] += flow1.velocities[i] * (deltaTime / 50) / 3;

        if (flow1.posYs[i] - flow1.diameters[i] > height) {
            flow1.posYs[i] = - flow1.diameters[i];
        }

        fill(flow2.colors[i]);
        noStroke();
        circle(flow2.posXs[i], flow2.posYs[i], flow2.diameters[i]);
        flow2.posYs[i] += flow2.velocities[i] * (deltaTime / 50) / 3;

        if (flow2.posYs[i] + flow2.diameters[i] < 0) {
            flow2.posYs[i] = height + flow2.diameters[i];
        }
    }
}