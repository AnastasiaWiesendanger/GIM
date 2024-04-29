function setup(){
	
	createCanvas(800, 600)  // or windowWidth e windowHeight

	
}

function draw(){     // questo fa già un loop    // + Velocità inizio dettata da Bimer
    
	background(0, 0, 0)
	


for(let i=0; i<50; i=i+1) {  // 1 variabile, 2 condizione, 3 incremento valore a ogni ciclo
                                  // quindi goccie appaiono tra le 0 e 50 a turno, sempre + 1
	let spessore = random(1, 3)
    let lunghezza = random(0, 100)
    let posX = random(0, width)  // width è la larghezza del canvas
	let posY = random(- lunghezza, height)

    stroke(255)
	strokeWeight(spessore)
	line(posX, posY, posX, posY + lunghezza)  // posizione più lunghezza
}

}