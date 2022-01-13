class IMG{
    constructor(src){
        this.src = src;
        // console.log("构造函数的路径:",this.src);
    }
}

let imgs = [];
imgs.push(new IMG("./img/Equip_Icon_SR_8.png"));
imgs.push(new IMG("./img/Equip_Icon_SR_12.png"));
imgs.push(new IMG("./img/Equip_Icon_SSR_7.png"));
imgs.push(new IMG("./img/Equip_Icon_SSR_13.png"));
imgs.push(new IMG("./img/Equip_Icon_SSR_16.png"));
imgs.push(new IMG("./img/Equip_Icon_SSR_20.png"));
imgs.push(new IMG("./img/Equip_Icon_SR_8.png"));
function createImg(src){
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = src;
    li.append(img);
    let pointers = document.createElement('div');
    pointers.className = "pointer";
    return [li,pointers];
}

function SlideShow(element,direction,speed,animation){
    let oldposition =parseInt(getComputedStyle(element)[direction]);
    let newposition = oldposition-speed +"px";
    element.style[direction] = newposition;
    element.className = "slideshow"+" "+animation
}

function ResetClass(nodes,classname){
    for(let n in nodes){
        nodes[n].className = classname;
    }
}

