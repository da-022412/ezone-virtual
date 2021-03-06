import React, { useEffect, useRef } from 'react';

import eventStyles from './Event.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const Event = ({ content }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef) {
            videoRef.current.play();
        }
    }, []);

    return (
        <section className={`${eventStyles['event-section']}`}>
            <section
                className={`${eventStyles['event-container']} ${eventStyles['text-center']}`}
            >
                <Heading level='2' style='heading-2'>
                    {content.title}
                </Heading>
                <BodyText>{content.copy}</BodyText>
                <video
                    autoPlay
                    muted
                    loop
                    className={`${eventStyles['event-video']}`}
                    ref={videoRef}
                    id='heroVideo'
                >
                    <source src='/videos/venue-exterior.mp4' type='video/mp4' />
                </video>
            </section>
        </section>
    );
};

export default Event;
