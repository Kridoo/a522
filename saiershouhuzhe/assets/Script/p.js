cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        this.O_O =
            //圆心
            this.M_CricleCenter = cc.p(0, 0);
        //半径
        this.M_Radius = 200;
        //弧度
        this.M_Radian = 20000;
        //刷新次数
        this.M_MoveTimes = 10;
        this.time = 0;
        this.angel = 360;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        //this.
    },
    onKeyDown: function (e) {
        if (e.keyCode == 13) {
            this.M_MoveTimes = 20;
            console.log(this.M_MoveTimes);
        }
        if (e.keyCode == 37) {
            this.M_MoveTimes = -20;
            console.log(this.M_MoveTimes);
        }
        if (e.keyCode == 39) {
            this.M_MoveTimes = 20;
            console.log(this.M_MoveTimes);
        }
    },
    onKeyUp: function (e) {
        if (e.keyCode == 13) {

        }
        if (e.keyCode == 37) {
            this.M_MoveTimes = -10;
            console.log(this.M_MoveTimes);
        }
        if (e.keyCode == 39) {
            this.M_MoveTimes = 10;
            console.log(this.M_MoveTimes);
        }
    },
    d2a: function (n) {
        return n * Math.PI / 180;
    },



    update: function (dt) {
        this.time += this.M_MoveTimes;
        this.radian = this.M_Radian * this.time;
        this.x = this.M_Radius * Math.sin(this.radian);
        this.y = this.M_Radius * Math.cos(this.radian);
        this.newPos = cc.p(this.x + this.M_CricleCenter.x, this.y + this.M_CricleCenter.y)

        this.node.x = this.newPos.x;
        this.node.y = this.newPos.y;
    },
    move: function (obj, iTarget) {
        var cont = Math.floor(700 / 30);
        var start = obj.a || 0;
        var dis = iTarget - start;
        var m = 0;
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            m++;
            var b = 1 - m / cont;
            var cur = start + dis * (1 - Math.pow(b, 3));
            obj.a = cur;
            var x = R + Math.sin(this.d2a(cur)) * R;
            var y = R - Math.cos(this.d2a(cur)) * R;
            obj.style.left = x + "px";
            obj.style.top = y + "px";

        }, 30)
    },
});
