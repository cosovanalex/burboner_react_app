// import { constants } from 'crypto'
import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    logo: {
        content: `url(${Logo})`,
        maxWidth: '15%',
        height: 'auto',
        padding: '0',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#d9b74f',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: '#644427',
        textDecoration: 'none',
    },
    p5: {
        padding: '10px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '80%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '100px',
        paddingLeft: '5px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                    </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                <Suspense fallback={'loading...'}>
                    <AuthCheck fallback={
                        <li>
                            <Link to="/signin" className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                        </li> 
                        }>
                        <li>
                            <Button>
                                <Link to='/Burboner' className={`${classes.navbarItem} ${classes.psides}`}>My Whiskey Collection</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to='Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to='About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                            </Button>
                        </li>
                    </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    )
}