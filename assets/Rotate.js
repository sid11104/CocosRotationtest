cc.Class({
    extends: cc.Component,

    properties: {
        midPoint: cc.Node, 
        rotBtn : cc.Button,
        radius: 200,
        duration: 5
    },

    onLoad() {
        this.angle = 0; 
        this.rotBtn.node.on("click",this.startRevolution,this)
    },

    startRevolution() {
        cc.tween(this)
            .repeatForever(
                cc.tween()
                    .to(this.duration, { angle: 360 }, {
                        easing: "linear",
                        onUpdate: (target, ratio) => {
                          this.updatePosition();
                        }
                    })
                    .set({ angle: 0 }) 
            )
            .start();
    },

    updatePosition() {
        let radian = cc.misc.degreesToRadians(this.angle);
        this.node.x = this.midPoint.x + Math.cos(radian) * this.radius;
        this.node.y = this.midPoint.y + Math.sin(radian) * this.radius;
    },

});

