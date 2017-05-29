
'use strict';

var sg = (function(){

    var SpatialHash = (function(){
        var board = {};
        var EDGE = 100;
        function hash() {}
        function unhash() {}
        
    })();

    var Entities = {};
    var canvas = null;
    var context = null;
    
    var Dungeon = (function(){
        function animal() {
            this.x = 0;
            this.y = 0;
            this.dx = 0;
            this.dy = 0;
        }
        return {
            spawn: function() {},
            mockup: function() {}
        };
    })();

    function resizeScreenHandler(event) {
        context.canvas.width = canvas.offsetWidth;
        context.canvas.height = canvas.offsetHeight;
    }

    var Physics = (function(){
        function accelerate() {}
        return {
            accelerate:accelerate
        };
    })();

    function step() {
    }

    function draw() {}
    
    function gameplay(ts) {
        step();
        draw();
        if (1) window.requestAnimationFrame(gameplay);
    }

    return function() {
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        window.requestAnimationFrame(gameplay);
    };

})();