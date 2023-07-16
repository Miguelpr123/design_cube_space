



window.addEventListener('load' , ()=>{
    const load_screen = document.querySelector('#load_screen');
    load_screen.style.display = 'none';

    const nav = document.querySelector('#nav_principal')
    const navbar_nav = document.querySelector('.navbar-nav')
    const toggler = document.querySelector('.navbar-toggler');

    if(window.innerWidth <= 991 ){
        toggler.style.display = 'none';
    }

    if(window.pageYOffset == 0){
        navbar_nav.style.borderBottom='1px solid #dae0e5';
    }

    window.addEventListener('scroll' , ()=>{    
        if(window.pageYOffset == 0){
            nav.style.background='transparent';
            navbar_nav.style.borderBottom='1px solid #dae0e5';
            if(window.innerWidth <= 991 ){
                toggler.style.display = 'none';
            }
        }else{
            // nav.style.background='#343a40'; 52b8a7
            nav.style.background='#52b8a7'; 
            navbar_nav.style.borderBottom='0';
            if(window.innerWidth <= 991 ){
                toggler.style.display = 'block';
            }
        }
    } )

} )


window.addEventListener('load'  , ()=>{
    var logo = document.querySelector('#logo2');
    var ctx = logo.getContext("2d");
    
    ctx.beginPath()
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#ffffff"
    ctx.lineCap = "round";
    ctx.moveTo(100,0)

    ctx.lineTo(0,40)
    ctx.lineTo(20,80)
    ctx.lineTo(140,40)
    ctx.lineTo(100,0)


    

    ctx.stroke()
    ctx.closePath()


} )




