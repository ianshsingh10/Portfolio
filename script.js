const circles=document.querySelectorAll(".circle");
const coords={ x:0, y:0};
circles.forEach((circle)=>{
    circle.x=0;
    circle.y=0;
});
window.addEventListener("mousemove", function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;
});
function animate(){
    x=coords.x;
    y=coords.y;
    circles.forEach(function(circle,index){
        circle.style.left=x-12+"px";
        circle.style.top=y-12+"px";
        circle.x=x;
        circle.y=y;
        const nextcircle= circles[index+1]||circles[0];
        x+=(nextcircle.x-x)*.3;
        y+=(nextcircle.y-y)*.3;
    });
    requestAnimationFrame(animate);
}
animate();