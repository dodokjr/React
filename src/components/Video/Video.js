import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import Va from "../../Assets/Video/Official髭男dism  I LOVEOfficial Video_1080p.mp4"

const Video = () =>
{
    useEffect(() =>
    {
        document.title = "MFikriA  | Video";
    });
    console.log('Masih Dalam Perbaikan Di tunggu Update Selanjutnya')
    return (
        <>
            <Container fluid className="video">
                <Player
                    playsInline
                    width={350}
                    poster="/assets/logo.png"
                    src={Va}
                />
            </Container>
        </>
    )
}

export default Video;