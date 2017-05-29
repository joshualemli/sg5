
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
        function BaseEntity() {
            this.x = 100;
            this.y = 100;
            this.r = 2;
            this.dx = 0;
            this.dy = 0;
        }
        
        
        var _seed = 0;
        return {
            spawn: function(type,params) {
                var entity = null;
                switch (type) {
                    default: entity = new animal();
                }
                Entities['e'+_seed++] = entity;
            },
            mockup: function() {}
        };
    })();

    var Physics = (function(){
    })();

    function step() {
        for (var uid in Entities) {
            Entities[uid].step();
        }
    }

    function draw() {
        context.clearRect(0,0,context.canvas.width,context.canvas.height);
        for (var uid in Entities) {
            var entity = Entities[uid];
            context.fillStyle = '#FFF';
            var size = entity.r*2;
            context.fillRect(entity.x-entity.r,entity.y-entity.r,size,size);
        }
    }

    var _perf = {
        fMax:30,
        iter:1,
        calcTime:0,
        roundStart:performance.now(),
        calculate:function(){
            var tAve = _perf.calcTime / _perf.fMax;
            var fps = Math.round( 1000*_perf.fMax/(performance.now()-_perf.roundStart) );
            document.getElementById('overlay').innerHTML = tAve.toFixed(3) + ' - ' + fps;
            _perf.roundStart = performance.now();
            _perf.calcTime = 0;
            _perf.iter = 1;
        }
    };

    function gameplay(ts) {
        _perf.calcStart = performance.now();
        step();
        draw();
        _perf.calcTime += performance.now() - _perf.calcStart;
        if (_perf.iter === _perf.fMax) _perf.calculate();
        else _perf.iter += 1;
        if (1) window.requestAnimationFrame(gameplay);
    }

    return function() {
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        function resizeScreenHandler(event) {
            context.canvas.width = canvas.offsetWidth;
            context.canvas.height = canvas.offsetHeight;
        }
        resizeScreenHandler();
        window.addEventListener('resize',resizeScreenHandler);
        
        Dungeon.spawn();
        window.requestAnimationFrame(gameplay);
    };

})();

window.onload = sg;
