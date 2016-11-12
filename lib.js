function int(object) {
	return parseInt(object);
};
var last = performance.now(),
    step = 1 / 60,
    dt = 0,
    now;

var frame = () => 
{
  now = performance.now();
  dt = dt + Math.min(1, (now - last) / 1000); 
  while(dt > step) {
    dt = dt - step;
  }
  last = now;

  Update(dt);
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

window.onload = Start;

//it