window.onload = function() {

    function House(door, window, roof) {
        this.door = door + "px";
        this.window = window;
        this.roof = roof;

        this.wall;

        this.paint = function(color) {
            this.wall = color;
        }
    }

    // function BoysQuarters() {}

    BoysQuarters.prototype = Object.create(House.prototype);

    var julie = new House(20, "sliding", "pitch");

    var mohammed = new House(50, "wooden", "zinc plate");

    julie.paint("yellow");

    mohammed.paint("green");

    var lodge = new BoysQuarters(50, "wooden", "zinc plate");

    console.log(julie.wall);
    console.log(mohammed.wall);
    console.log(lodge.window);
}