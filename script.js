require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {
      
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.080217, 
          42.382855, 
          2500
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: [
        -71.040217,
         42.382455,
            2500
        ],
        tilt: 0,
        heading: 0
      })
      
          var camera3 = new Camera({
        position: {
          x: -71.038887,
          y: 42.364506,
          z: 50
        },
        tilt: 90,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera,
    });
    
    var homeBtn = new Home({
        view: view
      });

    view.ui.add(homeBtn, "top-left");
      
         [stl, bei, bos].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bei.addEventListener('click', function() {
view.goTo({
        target:camera2
      });
    });
    
    stl.addEventListener('click', function() {
  view.goTo({
        target:camera
      });
      });
      
       bos.addEventListener('click', function() {
  view.goTo({
        target:camera3
      });   
    });
      
      
  });