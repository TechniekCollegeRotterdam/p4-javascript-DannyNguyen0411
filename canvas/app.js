window.addEventListener('load', function(){
    const canvas = document.querySelector('canvas');
    
    
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //positie zelf bepalen, maar kleur is blauw en grootte is 200
    // ctx.fillStyle = "blue";
    // ctx.fillRect(50, 50, 200, 200)
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(100, 100, 200, 200)
    // ctx.fillStyle = "green";
    // ctx.fillRect(50, 50, 200, 200)

    let painting = false

    const startPainting = function() {
        painting = true;
        ctx.beginPath();
    };

    const finishedPainting = function() {
        painting = false;
        ctx.beginPath();
    };

    const draw = function(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        //maak de lijn rond
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", finishedPainting);
    canvas.addEventListener("mousemove", draw);
});