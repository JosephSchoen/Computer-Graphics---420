class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        var left_bottom = new Point(100, 200);
        var right_top = new Point(600, 500);
        this.drawRectangle(left_bottom, right_top, [255, 0, 0, 255], ctx);
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        var center = new Point(400, 325);
        var radius = 250;
        this.drawCircle(center, radius, [255, 0, 255, 255], ctx) 
    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        var start = new Point(100, 100);
        var end = new Point(550, 400);
        var control1 = new Point(150, 500);
        var control2 = new Point(475, 75);

        this.drawBezierCurve(start, control1, control2, end, [100, 200, 100, 255], ctx);
    }

    // ctx:          canvas context
    //Draw name!
    drawSlide3(ctx) {


        // J
        var color = [0, 0, 0, 255];
        var p0 = new Point(50, 500);
        var p1 = new Point(150, 500);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [102, 0, 204, 255], ctx);
        var p0 = new Point(100, 500);
        var p1 = new Point(100, 425);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [102, 0, 204, 255], ctx);
        var p0 = new Point(50, 425);
        var p1 = new Point(100, 425);
        var control1 = new Point(50, 380);
        var control2 = new Point(100, 380);
        this.drawBezierCurve(p0, control1, control2, p1, [102, 0, 204, 255], ctx);

        // o
        var center = new Point(170, 425);
        var radius = 35;
        this.drawCircle(center, radius, [255, 0, 127, 255], ctx);

        // e
        var p0 = new Point(225, 425);
        var p1 = new Point(290, 425);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [128, 255, 0, 255], ctx);
        var p0 = new Point(225, 425);
        var p1 = new Point(290, 425);
        var control1 = new Point(225, 470);
        var control2 = new Point(290, 470);
        this.drawBezierCurve(p0, control1, control2, p1, [128, 255, 0, 255], ctx);
        var p0 = new Point(225, 425);
        var p1 = new Point(290, 410);
        var control1 = new Point(225, 380);
        var control2 = new Point(280, 380);
        this.drawBezierCurve(p0, control1, control2, p1, [128, 255, 0, 255], ctx);

        //S
        var p0 = new Point(225, 290);
        var p1 = new Point(200, 200);
        var control1 = new Point(125, 350);
        var control2 = new Point(125, 200);
        this.drawBezierCurve(p0, control1, control2, p1, [0, 0, 204, 255], ctx);
        var p0 = new Point(200, 200);
        var p1 = new Point(175, 110);
        var control1 = new Point(275, 200);
        var control2 = new Point(275, 50);
        this.drawBezierCurve(p0, control1, control2, p1, [0, 0, 204, 255], ctx);

        //c
        var p0 = new Point(340, 190);
        var p1 = new Point(340, 110);
        var control1 = new Point(250, 250);
        var control2 = new Point(250, 50);
        this.drawBezierCurve(p0, control1, control2, p1, [255, 0, 0, 255], ctx);

        //h
        var p0 = new Point(365, 300);
        var p1 = new Point(365, 100);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [255, 255, 51, 255], ctx);

        var p0 = new Point(365, 140);
        var p1 = new Point(420, 100);
        var control1 = new Point(365, 220);
        var control2 = new Point(420, 220);
        this.drawBezierCurve(p0, control1, control2, p1, [255, 255, 51, 255], ctx);

        // o
        var center = new Point(485, 150);
        var radius = 50;
        this.drawCircle(center, radius, [255, 51, 153, 255], ctx);

        // e
        var p0 = new Point(550, 150);
        var p1 = new Point(640, 150);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [0, 255, 255, 255], ctx);
        var p0 = new Point(550, 150);
        var p1 = new Point(640, 150);
        var control1 = new Point(550, 220);
        var control2 = new Point(640, 220);
        this.drawBezierCurve(p0, control1, control2, p1, [0, 255, 255, 255], ctx);
        var p0 = new Point(550, 150);
        var p1 = new Point(635, 125);
        var control1 = new Point(550, 90);
        var control2 = new Point(620, 90);
        this.drawBezierCurve(p0, control1, control2, p1, [0, 255, 255, 255], ctx);

        //n
        var p0 = new Point(660, 200);
        var p1 = new Point(660, 100);
        if(this.show_points == true){
            this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
        }
        this.drawLine(p0, p1, [0, 0, 153, 255], ctx);

        var p0 = new Point(660, 140);
        var p1 = new Point(720, 100);
        var control1 = new Point(660, 220);
        var control2 = new Point(720, 220);
        this.drawBezierCurve(p0, control1, control2, p1, [0, 0, 153, 255], ctx);


    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        //Take in points to make points from passed in variables.
        var left_top = new Point(left_bottom.x, right_top.y);
        var right_bottom = new Point(right_top.x, left_bottom.y);

        this.drawLine(left_bottom, left_top, color, ctx);
        this.drawLine(left_bottom, right_bottom, color, ctx);
        this.drawLine(left_top, right_top, color, ctx);
        this.drawLine(right_bottom, right_top, color, ctx);

        if(this.show_points == true){
            this.drawCircleForPoint(left_bottom, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(left_top, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(right_bottom, 5, [0, 0, 0, 255], ctx);
            this.drawCircleForPoint(right_top, 5, [0, 0, 0, 255], ctx);
        }

    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
       // var slide_idx = 10;
        var p = this.num_curve_sections;
       for(var i=1; i<=p; i++) {
            var phi = this.toRadians((360/p)*i)
            var x0 = center.x + (radius * Math.cos(phi));
            var y0 = center.y + (radius * Math.sin(phi));

            var phi = this.toRadians((360/p)*(i+1))

            var x1 = center.x + (radius * Math.cos(phi));
            var y1 = center.y + (radius * Math.sin(phi));

            var p0 = new Point(x0, y0);
            var p1 = new Point(x1, y1);

            if(this.show_points == true){
                this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
            }

            this.drawLine(p0, p1, color, ctx);
            
       }
    }

    toRadians(degrees){
        return degrees* Math.PI/180;
    }


    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircleForPoint(center, radius, color, ctx) {
        // var slide_idx = 10;
         var p = this.num_curve_sections;
        for(var i=1; i<=p; i++) {
             var phi = this.toRadians((360/p)*i)
             var x0 = center.x + (radius * Math.cos(phi));
             var y0 = center.y + (radius * Math.sin(phi));
 
             var phi = this.toRadians((360/p)*(i+1))
 
             var x1 = center.x + (radius * Math.cos(phi));
             var y1 = center.y + (radius * Math.sin(phi));
 
             var p2 = new Point(x0, y0);
             var p3 = new Point(x1, y1);
 
             this.drawLine(p2, p3, color, ctx);
             
        }
     }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        var point = this.num_curve_sections-1;

        

        var t = 0;
        var tinc = 1/point;
        for(var i=1; i<=point; i++){
            //var phi = this.toRadians((360/point)*i);
            var x0 = ((1-t)*(1-t)*(1-t)*pt0.x) + (3*(1-t)*(1-t)*t*pt1.x) + (3*(1-t)*t*t*pt2.x) + (t*t*t*pt3.x); 
            var y0 = ((1-t)*(1-t)*(1-t)*pt0.y) + (3*(1-t)*(1-t)*t*pt1.y) + (3*(1-t)*t*t*pt2.y) + (t*t*t*pt3.y);

            t = t+tinc;
            
            var x1 = ((1-t)*(1-t)*(1-t)*pt0.x) + (3*(1-t)*(1-t)*t*pt1.x) + (3*(1-t)*t*t*pt2.x) + (t*t*t*pt3.x); 
            var y1 = ((1-t)*(1-t)*(1-t)*pt0.y) + (3*(1-t)*(1-t)*t*pt1.y) + (3*(1-t)*t*t*pt2.y) + (t*t*t*pt3.y);

            var p0 = new Point(x0, y0);
            var p1 = new Point(x1, y1);

            if(this.show_points == true){
                this.drawCircleForPoint(p0, 5, [0, 0, 0, 255], ctx);
                this.drawCircleForPoint(p1, 5, [0, 0, 0, 255], ctx);
                
            }
            if(this.show_points == true){
                this.drawCircleForPoint(pt1, 5, [150, 50, 50, 255], ctx);
                this.drawCircleForPoint(pt2, 5, [150, 50, 50, 255], ctx);
            }
            this.drawLine(p0, p1, color, ctx);

        }


    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        // var pt0 = new Point(pt0.x, pt0.y);
        // var pt1 = new Point(pt1.x, pt1.y);
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};

class Point{
    constructor(x,y){
        this.x = x;
        this.y =y;
    }
}
