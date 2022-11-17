import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';
import { url } from 'inspector';
import background from "../../assets/images/background_image.png"

interface WhiskeyCollection{
    title: string;
}


const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${background})`,
        backgroundColor: '#231f20',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '52%',
        left: '50.5%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Home = ( props: WhiskeyCollection ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/burboner' className={classes.button_text}>Take me to my Whiskey Collection</Link>
                </Button>
            </div>
            </div>
        </>
    )
}

