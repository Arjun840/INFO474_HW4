export default function(p) {
  p.setup = function() {
    // This creates the drawing area. The homework says max 800x800.
    p.createCanvas(600, 600); 
  };

  p.draw = function() {
    // For now, let's just give each a different background color
    // so you can see them switch when you click the tabs.
    p.background(200); 
    
    // This draws the "Seconds" just so we know time is working
    p.fill(0);
    p.textAlign(p.CENTER);
    p.textSize(20);
    p.text("Time check: " + p.nf(p.hour(), 2) + ":" + p.nf(p.minute(), 2) + ":" + p.nf(p.second(), 2), p.width/2, p.height/2);
  };
};
