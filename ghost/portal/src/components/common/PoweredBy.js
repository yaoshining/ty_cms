import React from 'react';
import {ReactComponent as GhostLogo} from '../../images/ghost-logo-small.svg';

export default class PoweredBy extends React.Component {
    render() {
        return (
            <a href='https://ghost.org' target='_blank' rel='noopener noreferrer' onClick={() => {
                window.open('https://tools-yao.com', '_blank');
            }}>
                <GhostLogo />
                Powered by Tools-Yao
            </a>
        );
    }
}
