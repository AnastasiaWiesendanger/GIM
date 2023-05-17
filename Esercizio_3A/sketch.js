let posX = 200 //posizioneX la definiamo/creiamo noi (NO codice Pre-imp.)
let posY = 200
let velX       // anche qui psso scrivere cifre es. let velX = 4
let velY

function setup(){ //tipo Illustrator, info. per creaz. inizio doc.
	createCanvas(800, 800)
	posX = width/2
	posY = height/2
	velX = 50  //or (-24/4)
	velY = 5  //or (-24/4), "random" posso rimuoverlo

	background (250, 50, 0)  // con le 3 cifre, gli dò colore

}

function draw(){
	//background(200) or just background(200), senza le 2 stanghette
    
	noStroke()
    //fill(random(255), random(255), random (255))  // questo è arcobaleno
	fill(random(0, 0), random(200, 255), random (0, 255))  // questo più specifico
    //fill(map(posX, 0, width, 0, 255), map(posY, 0, width, 0, 255), 0) //da giocarci

    //const  r = (sin(frameCount * 0.031) + 1) * 127.5   //tutto questo va assieme
	//const  g = (sin(frameCount * 0.032) + 1) * 127.5
	//const  b = (sin(frameCount * 0.033) + 1) * 127.5
    //fill(r, g, b)
	
    const d = sin(frameCount * 0.08) * 80 + 50
    ellipse(posX, posY, 40, 40)
	//ellipse(posX, posY, d, d) 
	//ellipse(width - posX, posY, d, d)

	posX = posX + velX    //Questa è CIMEMATICA. Stiamo desscrivendo il Mov.,
	posY = posY + velY    //non lo stiamo animando

	if(posX >= width ||posX <= 0) velX = -velX   // oppure posX >= 800
	if(posY >= height ||posY <= 0) velY = -velY  // oppure posY >= 400

	// or  if(pos= >= 400) velX = -velX
	// and if(posX = <= 0) vleY = - velY

}

function keyPressed(){   //questo mi salva il File

    save ("PONG.png") 

}