import {gsap} from "gsap";

var triSpeed = 1
var triAnimationTL = gsap.timeline() 

triAnimationTL.to(".triangle-red",{duration: triSpeed, alpha:0.5, rotation:180, x:500, y:200})
            .to(".triangle-black",{duration: triSpeed, alpha:0.5, rotation:-180, x:500, y:-200})
            .to(".triangle-green",{duration: triSpeed, alpha:0.5, rotation:-90, x:500, y:-200})
            .to(".triangle-blue",{duration: triSpeed, alpha:0.5, rotation:90, x:500},"-=.9");

