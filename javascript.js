var project = [
    'Aperitivo', 'Big Deal','Al Pastor', 'Culvers', 'Grassroots', 'Benelux', 'Shake Shack', 'Oscars Winners Circle','Rocky Rococos', 'Swinging Door', 'Cubanitas', 'Potbelly', 'Cafe 111', 'Spicy Tuna', 'Public Market', 'Xankia', 'Golden Gyros', 'Palermo Pizza', 'Popeyes', 'Martinos', 'IHOP', '3rd Street', 'Panda Express'
]


function newProject() {
var random = Math.floor(Math.random() * (project.length));
document.getElementById('projectDisplay').innerHTML = project[random];
}


function newFinal() {
        newProject();
    }
