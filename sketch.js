function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  background(255);
  noFill()
  stroke(255)//將圓的邊線設定為白色
  strokeWeight(3)
  rectMode(CENTER)

   for(var i=0;i<(windowWidth/50);i++)
  {
   for(var j=-1;j<int(height/50);j++)
   {
    stroke("#8ecae6")
    ellipse(25+(i*50),25+(j*50),mouseX/8)//建立一個坐標為(25,25)直徑為50的圓
    stroke("#ffe6a7")
    rect(25+(i*50),25+(j*50),50)//以座標(25,25)為中心建立一個方框
    ellipse(50+(i*50),50+(j*50),25)//建立一個座標為(50,50)直徑為20的圓
    ellipse(20+(i*50),50+(j*50),mouseY/8)
    stroke("#cdb4db")
    rect(10+(i*50),10+(j*50),25)
    
   }
  }
}
