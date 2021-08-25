var project = [
    'Open-source', 'Affordable','Educational', 'Academic', 'Proprietary', 'Crowdfunded', '3D printed', 'Laser cut','Raspberry Pi', 'Arduino', 'Digital'
]

var extra = [
    'ice cream truck', 'robot', 'autonomous vehicle', 'video game', 'card game', 'board game', 'augmented reality', 'plant watering system', 'doorstop', 'animatronic', 'security camera', 'motion sensor', 'pet feeder', 'fitness tracker', 'app'
]

function newProject() {
var random = Math.floor(Math.random() * (project.length));
document.getElementById('projectDisplay').innerHTML = project[random];
}

function newExtra() {
    var random = Math.floor(Math.random() * (extra.length));
    document.getElementById('extraDisplay').innerHTML = extra[random];
    }

function newFinal() {
        newProject();
        newExtra();
    }