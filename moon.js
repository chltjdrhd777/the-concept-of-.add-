const moonPath = "M12 27C12 41.9117 27 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C27 0 12 12.0883 12 27Z";
const sunPath = "M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

darkMode.addEventListener('click', ()=>{
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo" 
    });
    //the things above are about how long this animation would be going on.
    timeline.add({
        targets:".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    },'-= 350')
    .add({
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)' // '?' and ':' means "If something is true(?) execute this. If not(:) excute that"
    }, '-=700');
    //everytime I slicks on the sun, the page turns a "sunny mode"
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
    //"!" means it is not
});

