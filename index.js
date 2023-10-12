var button = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
button.innerHTML = "BackGround Color Change";
button2.innerHTML = " Color Code";
button3.innerHTML = " back";

var div1 = document.createElement('div1')
div1.className = "1"
var div2 = document.createElement('div2')
div2.className = "2"
var div3 = document.createElement('div3')
div3.className = "3"
div1.append(div2)
div2.append(div3)
div3.append(button, button2,button3)
document.body.append(div1)

let Color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
b = 0
c=0
console.log(c)

button.addEventListener("click", change)
function change() {
    document.body.style.background = Color[b]
    button2.innerText = Color[b]
    b = b >=Color.length - 1 ? 0 : b + 1;
    // if (b==Color.length-1){
    //     b=0;    
    // }
    // b++
};
button3.addEventListener("click", m)
function m() {
    document.body.style.background = Color[b]
    button2.innerText = Color[b]
    b = b == 0? Color.length -1 : b-1;
    // if (Color[b]==undefined){ 
    //     b=Color[0]
    //     b++  
    //     alert("rest")

    //  } 
    //  else if (b==Color.length-1){
    //     b=0;    
    // }
    // b--
    
}