import {gsap} from "gsap";

gsap.to(".triangle-red",{duration: 2, alpha:0.5, rotation:180, x:500, y:200});
gsap.to(".triangle-blue",{duration: 2, alpha:0.5, rotation:90, x:500});
gsap.to(".triangle-green",{duration: 2, alpha:0.5, rotation:-90, x:500, y:-200});
gsap.to(".triangle-black",{duration: 2, alpha:0.5, rotation:-180, x:500, y:-200})