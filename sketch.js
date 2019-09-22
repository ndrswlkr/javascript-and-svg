let svg_img
let leaf_rot = 0
function setup() {
  // put setup code here
  createCanvas(500, 250)
  background(0)
    svg_img = loadImage('leaf.svg')
    console.log(svg_img)
}
function draw() {
    background(0)
    rotate(leaf_rot)
    leaf_rot+=.01
    image(svg_img, 10, 10, 200, 200)
  // put drawing code here
}