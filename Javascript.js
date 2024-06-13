document.addEventListener("DOMContentLoaded", function() {
  const parentcontainer = document.getElementsByClassName('tophomecontainer')[0];
  const motto = document.getElementById('header2');
  const mottocontainer = header2.tophomecontainer;
  const containerwidth = parentcontainer.clientWidth;
  const  mottowidth = motto.clientWidth;
  let pos = containerwidth;
  let speed = 1;

   function textslider() {
          pos -= speed 
          if (pos < -mottowidth) {
            pos = containerwidth; 
          }

          motto.style.transform = `translateX(${pos}px)`
        }

        const id = setInterval(textslider, 5);

    function newStyle() {
          let newColor = '';
          let newFont = ''; 
          let x = Math.floor(Math.random()*7); 
          switch (x){
            case 0:
              newColor = 'red';
              newFont = 'Times New Roman'; 
              break;
            case 1: 
              newColor = 'blue';
              newFont = 'Florence, cursive'; 
              break;
            case 2:
              newColor = 'yellow';
              newFont = 'Verdana';
              break; 
            case 3:
              newColor= 'purple';
              newFont = 'Courier New';
              break
            case 4:
              newColor = 'cyan';
              newFont = 'Georgia'; 
              break;
            case 5:
                newColor = 'maroon';
                newFont = 'Palatino';
                break;
            case 6: 
                newColor = 'lime';
                newFont = 'Impact';
                break;
          }
          var elem = document.getElementById("header1");
          elem.style.color = newColor;
          elem.style.fontFamily = newFont; 
        }

        newStyle()


        
      
   });
 

   
