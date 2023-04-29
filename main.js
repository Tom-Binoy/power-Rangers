
// Create canvas variable
canvas = new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

biw = 350;
bih = 430;

var bio= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		bio = Img;
		bio.scaleToWidth(biw);
		bio.scaleToHeight(bih);
		bio.set({
			top:block_y,
			left:block_x
		})
		canvas.add(bio);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x=1
		new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
	}
	
}

