var totalprice=0;
document.getElementById('img3').onclick=function(){
    document.getElementById('body').style.backgroundColor='#247ec8';
    document.getElementById('img1').src='1.png';
    document.getElementById('div3').innerHTML+=document.getElementById('div4').textContent +"&";
    document.getElementById('btn1').style.display='block';
    totalprice +=parseInt(document.getElementById('img3').getAttribute("price"));
    document.getElementById('btn1').onclick=function(){
        document.getElementById('div7').innerHTML=totalprice;
        document.getElementById('div7').style.display='block';
    }
}
document.getElementById('img4').onclick=function(){
    document.getElementById('body').style.backgroundColor='gray';
    document.getElementById('img1').src='2.png';
    document.getElementById('div3').innerHTML+=document.getElementById('div4').textContent +"&";
    document.getElementById('btn1').style.display='block';
    document.getElementById('div7').style.display='block';
    totalprice +=parseInt(document.getElementById('img3').getAttribute("price"));
    document.getElementById('btn1').onclick=function(){
        document.getElementById('div7').innerHTML=totalprice;
    }
}
document.getElementById('img5').onclick=function(){
    document.getElementById('body').style.backgroundColor='#c79b53';
    document.getElementById('img1').src='3.png';
    document.getElementById('div3').innerHTML+=document.getElementById('div4').textContent +"&";
    document.getElementById('btn1').style.display='block';
    document.getElementById('div7').style.display='block';
    totalprice +=parseInt(document.getElementById('img3').getAttribute("price"));
    document.getElementById('btn1').onclick=function(){
        document.getElementById('div7').innerHTML=totalprice;
    }
}
document.getElementById('img6').onclick=function(){
    document.getElementById('body').style.backgroundColor='red';
    document.getElementById('img1').src='4.png';
    document.getElementById('div3').innerHTML +=document.getElementById('div4').textContent +"&";
    document.getElementById('btn1').style.display='block';
    document.getElementById('div7').style.display='block';
    totalprice +=parseInt(document.getElementById('img3').getAttribute("price"));
    document.getElementById('btn1').onclick=function(){
        document.getElementById('div7').innerHTML=totalprice;
    }
}
