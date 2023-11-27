function revealFunction(){ 
    window.sr = ScrollReveal  ({ duration:1000, easing: 'easing-out'});

    sr.revel( '.reveal-left', {origin:'left',reset:true});
}


window.addEventListener('load', () => { 
    revealFunction();
})