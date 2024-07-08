import React, { useCallback} from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export const App = () => {
    

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    const getCSSVariableValue = (variable) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };



    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: getCSSVariableValue('--background-color'),
                    },
                },
                particles: {
                    color: {
                        value: getCSSVariableValue('--title-color'),
                    },
                    links: {
                        color: getCSSVariableValue('--particle-color'),
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        gravity: {
                            enable: false,
                        },
                        speed: 1,
                        direction: 'none',
                        random: false,
                        outModes: {
                            default: 'out',
                        },
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                        },
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                        random: true,
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 1,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
        
    );
};


