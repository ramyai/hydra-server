// originalScript.js

function createComposition() {
    return src(o0)
      .saturate(1.01)
      .scale(0.999)
      .color(1.01, 1.01, 1.01)
      .hue(0.01)
      .modulateHue(
        src(o1)
          .hue(0.3)
          .posterize(-1)
          .contrast(0.7),
        2
      )
      .layer(
        src(o1)
          .luma()
          .mult(gradient(1).saturate(0.9))
      )
      .out(o0);
  
    noise(1, 0.2)
      .rotate(2, 0.5)
      .layer(src(o0).scrollX(0.2))
      .out(o1);
  
    render(o0);
  }
  
  module.exports = createComposition;