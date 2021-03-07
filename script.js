require(["esri/Map",
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady"    ], 
       function(Map, WebScene, SceneView, Camera, Home) {

      var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });
      
      var scene = new WebScene({
        portalItem:{
         id:"5c223027020d4cba9d30c7ee38987b8d" 
        }
      });
      
      var camera = new Camera({
        fov: 170,
        position: [
           2.5937,
          -18.9629,
          9400000// elevation in meters
        ],
        tilt: 22,
        heading: 0
      })
      
      var camera2 = new Camera({
        fov: 145,
        position: [
           36.5937,
          -15.9629,
          9500000// elevation in meters
        ],
        tilt: 20,
        heading: 0,
      });
           
      var camera3 = new Camera({
          position: [
           32.7832,
         20.5085,
          20000000// elevation in meters
        ],
        tilt: 0,
        heading: 0
      });
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        center: [-8.7832, 34.5085],
        zoom: 2,
        viewingMode:"global",
        camera: camera3,
        environment: {
            lighting: {
              date: new Date("Tue Mar 2 2021 16:00:00 GMT+0100 (CET)"),
              directShadowsEnabled: false,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [cam1, cam2, cam3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    cam2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    cam1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });

     cam3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
  /*var sceneLayer = new SceneLayer({
          portalItem: {
            id: "2e0761b9a4274b8db52c4bf34356911e"
          },
          popupEnabled: false
        });
        map.add(sceneLayer);*/

        // Create MeshSymbol3D for symbolizing SceneLayer
        
        // Add the renderer to sceneLayer
        /*sceneLayer.renderer = {
          type: "simple", // autocasts as new SimpleRenderer()
          symbol: symbol
        };*/
      });
  
  
