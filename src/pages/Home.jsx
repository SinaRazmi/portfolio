import { useEffect, useRef, useCallback, useMemo, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { Typography, Box } from '@mui/material'; 
import Typed from 'typed.js';
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the

import bg01 from '../assets/bg01.jpg';

const Home =  ({helmetTitle})  => {
    const nameEl = useRef(null);
    const infoEL = useRef(null);

    const [init, setInit] = useState(false);

    const strings = [
        "من یک توسعه دهنده فول استک هستم",
        "من یک فریلنسر هستم",
        "من یک محتوا ساز حوزه وب هستم",
    ];

    useEffect (() => {
            const typedName =  new Typed (nameEl.current, {
                strings: ["[[سینا رزمی]]"],
                typeSpeed: 50,
                backSpeed: 20,
                backDelay: 10,
                showCursor: false,
            });

            const typedInfo = new Typed (infoEL.current, {
                strings: strings,
                startDelay: 1500,
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 50,
                loop: true,
                showCursor: false,
            });

            return () => {
                    typedName.destroy();
                    typedInfo.destroy();
            };

    }, []);


    // this should be run only once per application lifetime
  useEffect(() => {

    

    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

    

  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
    
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
    
  };
   
    return(
        <Box sx={{backgroundImage: `url(${bg01})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center'
        }}>

            <Helmet><title>{helmetTitle}</title></Helmet>
            <Typography ref={nameEl} variant='h3' color= 'tomato' ></Typography>
            <Typography ref={infoEL} variant='h4' color= 'black' sx={{textDecoration: 'underline', textDecorationColor: 'tomato'}} ></Typography>
        </Box>  
    );
};

export default Home;