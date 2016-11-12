var Level = {
c: document.getElementById('app').getContext('2d'),
update: function() {
	this.c.clearRect(0, 0, this.stage.width, this.stage.height);
},
map: {
	self: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, '3:999', '3:8', '3:8', '3:8', '3:8', '3:8', '3:8', '3:8', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, '3:999', '3:0', '3:0', '3:0', '3:0','3:0', '3:0', '3:0','3:0', '3:0', '3:0', '3:0', '3:0', '3:0', '3:0', '3:0', '3:0', '3:0', '3:0', 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
],

build: function() {
	for(var q=0; q<this.self.length; q++) 
		for(var w=0; w<this.self[q].length; w++) {
			if(typeof this.self[q][w] == 'number') {
				 switch(this.self[q][q]) {
					 case 2:
					 Level.c.drawImage(gt1, 32*w, 32*q, 32, 32);
					 break;
				 }
			} else {
				let so = int(this.self[q][w].split(':')[0]);
				let ss = int(this.self[q][w].split(':')[1]);
				
				switch(so) {
				case 3:
				Level.c.drawImage(gt2, 32*w, 32*q + ss, 32, 32);
				break;
			};
				
			}
		};
}
},

player: {
	x: 300,
	y: 300,
	width: 55,
	height: 40,
	
	startx: 300,
	starty: 300,
	
	onGround: false,
	canJump: true,
	isMove: false,
	isLeft: false,
	isRight: false,
	isJump: false,
	isHungry: false,
	isDestroy: false,
	
	tox: 0,
	toy: 0,
	tow: 0,
	toh: 0,
	rc: 0,
	
	Render: function() {
		Level.c.drawImage(player, this.x, this.y, this.width, this.height);
		
		this.callback();
		
		if(this.useGravity) {
			this.Raycast();
		};
	},
	
	Reload: function() {
		this.x = 300;
		this.y = 300;
	},
	
	callback: function() {
		this.tox = Math.floor(this.x/32);
		this.toy = Math.floor(this.y/32);
		
		this.tow = Math.floor(this.width/32);
		this.toh = Math.floor(this.height/32);
		
		this.rc = this.toy+1;
	},
	
	gravity: true,
	
	Raycast: function() {
		if(!Level.map.self[this.toy+this.toh][this.tox]) {
			this.y+=5;			
		};
	}
},

stage: {
	layout: 'lesson',
	width: 800,
	height: 608,
	changeLayout: function(newlayout) { this.layout = newlayout; }
}	
};

var player = new Image(); player.src = 'assets/player.png'
var gt1 = new Image(); gt1.src = 'assets/tile_bg1.png'; 
var gt2 = new Image(); gt2.src = 'assets/tile_bg2.png';

var bg = new Image(); bg.src='assets/background.jpg';
function Start() {
	
};

function Update() {
	Level.update(); //clear context
	Level.c.drawImage(bg, 0, 0, 800, 600);
	Level.map.build(); //new round

	Level.player.Render();
	Level.player.Raycast();
	
	if(Level.player.y>540) {
		Level.player.Reload();
	}
	
	if(key==65 && !Level.map.self[Level.player.toy][Level.player.tox]) {
		Level.player.x-=4;
	} else if(key==68 && !Level.map.self[Level.player.toy][Level.player.tox]) {
		Level.player.x+=4;
	} else if(key==87 && Level.player.canJump) {

		Level.player.useGravity = false 
Level.player.canJump = false; 

console.log(Level.player.canJump); 

for(var i=0; i<10; i++) { 
Level.player.y-=2; 

if(i==9) {  
Level.player.useGravity = true; 
Level.player.canJump = true;
} 
		
		}
	}
};

var key = 0;

window.onkeydown = function() {
	key = event.keyCode;
};

window.onkeyup = function() {
	key = 0;
}
