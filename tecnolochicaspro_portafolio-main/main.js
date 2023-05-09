let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#D4F86D; font-family: Roboto Mono; font-size: 78%" ">Desarrollo sitios web y estudio back-end.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
