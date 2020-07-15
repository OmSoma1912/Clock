var hrX, hrY, mnX, mnY, scX, scY;

function setup() {
    createCanvas(400,500);

    hrX = 200;
    hrY = 200;
    mnX = 100;
    mnY = 225;
    scX = 110;
    scY = 300;
}

function draw() {
    background(255,255,255);  
    angleMode(DEGREES);
    
    fill(255,255,255);
    arc(200,250,250,250,50,50);

    //second
    stroke(255,0,0);
    strokeWeight(3);
    line(scX, scY, 200, 250);

    //minute
    stroke(0,0,0);
    strokeWeight(5);
    line(mnX, mnY, 200, 250);

    //hour
    stroke(0,0,0);
    strokeWeight(5);
    line(hrX, hrY, 200 ,250);

    if((scX < 200) && (scY > 250)){
        if(frameCount%24===0){
            scX = scX + 0.6;
            scY = scY + 0.375;
        }
    }

    if((scX > 200) && (scY > 250)){
        if(frameCount%24===0){
            scX = scX + 0.6;
            scY = scY - 0.375;
        }
    }

    if((scX < 200) && (scY < 250)){
        if(frameCount%24===0){
            scX = scX - 0.375;
            scY = scY + 0.6;
        }
    }

    if((scX > 200) && (scY < 250)){
        if(frameCount%24===0){
            scX = scX - 0.6;
            scY = scY - 0.375;
        }
    }

    if(scX === 200){
        if(frameCount%1===0){
            scX = scX + 0.5;
            scY = scY - 0.35;
        }
    }

    if(scY === 250){
        if(frameCount%1===0){
            scX = scX + 0.5;
            scY = scY - 0.35;
        }
    }

    if((mnX < 200) && (mnY > 250)){
        if(frameCount%1500===0){
            mnX = mnX + 0.6;
            mnY = mnY + 0.375;
        }
    }

    if((mnX > 200) && (mnY > 250)){
        if(frameCount%1500===0){
            mnX = mnX + 0.6;
            mnY = mnY - 0.375;
        }
    }

    if((mnX < 200) && (mnY < 250)){
        if(frameCount%1500===0){
            mnX = mnX - 0.375;
            mnY = mnY + 0.6;
        }
    }

    if((mnX > 200) && (mY < 250)){
        if(frameCount%1500===0){
            mnX = mnX - 0.6;
            mnY = mnY - 0.375;
        }
    }

    if(mnX === 200){
        if(frameCount%1===0){
            mnX = mnX + 0.5;
            mnY = mnY - 0.35; 
        }
    }

    if(mnY === 250){
        if(frameCount%1500===0){
            mnX = mnX + 0.5;
            mnY = hrY - 0.35;
        }
    }

    if((hrX < 200) && (hrY > 250)){
        if(frameCount%90000===0){
            hrX = hrX + 0.6;
            hrY = hrY + 0.375;
        }
    }

    if((hrX > 200) && (hrY > 250)){
        if(frameCount%90000===0){
            hrX = hrX + 0.6;
            hrY = hrY - 0.375;
        }
    }

    if((hrX < 200) && (hrY < 250)){
        if(frameCount%90000===0){
            hrX = hrX - 0.375;
            hrY = hrY + 0.6;
        }
    }

    if((hrX > 200) && (hrY < 250)){
        if(frameCount%90000===0){
            hrX = hrX - 0.6;
            hrY = hrY - 0.375;
        }
    }

    if(hrX === 200){
        if(frameCount%1===0){
            hrX = hrX + 0.5;
            hrY = hrY - 0.35; 
        }
    }

    if(hrY === 250){
        if(frameCount%1500===0){
            hrX = hrX + 0.5;
            hrY = hrY - 0.35;
        }
    }
}