let renderer,
    scene,
    camera,
    floor,
    cube,
    sphere,
    light,
    step = 0,
    controller,
    maxFrameRate = 1000/60
    prevFrameTS = 0;

function createRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('#16161d'); // Eingengrau
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  return renderer;
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(
    45, // FoV
    window.innerWidth / window.innerHeight, // Ratio
    0.1, // near
    1000 // far
  );

  camera.position.set(-30, 40, 30);
  camera.lookAt(0,0,0);

  return camera;
}

function withShadow(mesh) {
  mesh.receiveShadow = true;
  mesh.castShadow = true;

  return mesh
}

function createFloor() {
  const floorMaterial = new THREE.MeshLambertMaterial({color: "#afb8bc"});
  const floorGeom = new THREE.BoxGeometry(60, 0.1, 20);
  floor = new THREE.Mesh(floorGeom, floorMaterial);
  
  floor.receiveShadow = true;
  floor.position.set(15, -1, 0)

  return floor;
}

function createBox(position, size, color) {
  const cubeMaterial = new THREE.MeshLambertMaterial({color});
  const cubeGeom = new THREE.BoxGeometry(size.x, size.y, size.z);
  cube = new THREE.Mesh(cubeGeom,cubeMaterial);
  
  cube.position.set(position.x, position.y, position.z)

  return cube;
}

function createSphere(position, size, color) {
  const sphereMat = new THREE.MeshLambertMaterial({color});
  const sphereGeom = new THREE.SphereGeometry(size.x,size.y, size.z);
  sphere = new THREE.Mesh(sphereGeom, sphereMat);

  sphere.position.set(position.x, position.y, position.z);

  return sphere;
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomTri(max) {
  return { x: randomInt(max), y: randomInt(max), z: randomInt(max) };
}

function createLight() {
  light = new THREE.PointLight("white");
  light.castShadow = true;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  light.position.set(15,20,10);
  return light
}

function Controller() {
  this.rotationSpeed = 0.02;
  this.bounceSpeed = 0.0098
}

function addGui(controller) {
  const gui = new dat.GUI();

  gui.add(controller, "rotationSpeed", 0, 0.3);
  gui.add(controller, "bounceSpeed", 0.001, 0.02);
}

function makeResponsive() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

function init() {
  controller = new Controller();
  const gui = addGui(controller);

  renderer = createRenderer();
  scene = new THREE.Scene();
  camera = createCamera();


  const axes = new THREE.AxesHelper(20);
  floor = createFloor();
  cube = withShadow(createBox(
    { x: 0, y: 2, z: 0},
    { x: 4, y: 4, z: 4},
    'blue'))

  sphere = withShadow(createSphere(
    { x: 20, y: 4, z: 0 },
    { x: 4, y: 30, z: 30 },
    'red'))

  light = createLight()
  const pointLightHelper = new THREE.PointLightHelper(light);
  scene.add(pointLightHelper);
  scene.add(light);
  scene.add(floor);
  scene.add(axes);
  scene.add(cube);
  scene.add(sphere);

  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(
    camera,
    renderer.domElement
  )

  animate();
}

function animate() {
  const now = Date.now();
  const frameInterval = now - prevFrameTS;

  if (prevFrameTS == 0 || frameInterval >= maxFrameRate )
  { 
    const mx = frameInterval / maxFrameRate;
    console.log(mx);
    prevFrameTS = Date.now();

    step += controller.bounceSpeed * mx;
    let bounce = Math.abs(Math.sin(step*2*Math.PI));
    let hBounce = Math.cos(step*Math.PI)
    
    if (step >= 2) step = 0;
    sphere.position.y = 4 + (bounce * 10 * mx);
    sphere.position.x = 10 + (hBounce * 20 * mx);
    // console.log(step);
    cube.rotation.x += THREE.Math.randFloat(0, controller.rotationSpeed) * mx
    cube.rotation.y += controller.rotationSpeed * mx;
    cube.rotation.x += controller.rotationSpeed * mx;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

window.onload = init;
window.onresize = makeResponsive;