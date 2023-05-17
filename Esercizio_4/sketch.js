
    let posX
	let posY
	let velX
	let velY

	

function setup(){
	createCanvas(windowWidth, windowHeight);

	posX = -8
	posY = 190
	velX = 1
	velY = 1
	
	

	background(200)
}

function draw(){

	posX = posX;
	posY = posY;
	posY = posY + velY;
	
if (posY <= 150 || posY >=245)	 velY = -velY;
    

    
	let m = minute()
    let h = hour ()
    let s = second ()
    let ms = new Date().getMilliseconds()                  // rimuovi questi per pozione

	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m  // rimuovi anche qui
	let angolo_m = TWO_PI / 60 * m
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000




	// questo è il punto d'origine (centro)
	translate(width/2, height/2)
	scale (0.9)                       // cambia tutta grandezza (disegno intero = 1)

	
    //rotate (mouseX * 0.01)       // trasformazione prima del canvas
	
	// CERCHIO BORDO ESTERNO 2
	fill(255, 0, 0)
	noStroke(0)
	ellipse (0, 0, 500, 500)
    
	// CERCHIO BORDO ESTERNO
	fill(255)
	noStroke(0)
	ellipse (0, 0, 420, 420)
	
	//TACCHETTA
    fill(0)
	//const color = map(sin(frameCount * 0.01),-1, 1, 0, 255);

    //fill(color)
	push()
	rotate(angolo_s * 0)
    for (let i=0; i<60; i++ ) { 
		
		push()
			rotate(angolo_s*-2)
		        rect(-0, -250, 0.2, -30)  //al posto del 8, 0.2
				pop()
		
	    if(i % 5  == 0)   { 
			push()
			rotate(angolo_s * 0)
			const color = map(sin(frameCount * 0.03),-1, 1, 0, 255);
            fill(color)
		    rect(posX, posY, 16, -50)
            pop()
		} else {
			push()
			rotate(angolo_s*-2)
		        rect(-0, -210, 8, -30)
				pop()
	    }

		rotate(TWO_PI / 60)

		

	}
	pop()
	
	//RETT. RUOTAZIONE MINUTI
	push()                           // calcolo non per gradi, ma Radianti   //PI = Pigreco
	rotate(angolo_m)                 // or before TWO_PI / 60 * second())
    fill(0)
	rect(-5, 20, 10, -190)          
	pop()
	
	//RETT. RUOTAZIONE HOUR
	push()
	rotate(angolo_h)    // or before TWO_PI / 12 * hour())
    fill(0)
	rect(-10, 20, 20, -150)          
	pop()
	
	// RETT. RUOTAZIONE SECONDI
	push()
	rotate(TWO_PI / 60 * second()) //or (angolo_s)
    fill(255, 0 ,0)
	rect(-3, 20, 6, -200) 
	ellipse(0, -165, 40, 40)         //ATTENZIONE! n. = centralità
	pop()
	
	
	// CERCHIO CENTRO
	ellipse(0, 0, 5, 5)  

	//stroke(0, 0, 255)
	//line(0, -1000, 0, 1000)   //questo blocco divide spazio
	//line(-1000, 0, 1000, 0)



}

function windowResized(){
	//background(255, 255, 0)
	resizeCanvas(windowWidth, windowHeight) //No dimensione finestra, ma Canvas
	
}