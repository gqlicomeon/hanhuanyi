import React from 'react';
import useIframe from '../../hooks/useIframe';

import './index.scss';

const Cherryrain: React.FC = () => {
    const [cherryrain] = useIframe('http://120.76.196.121:3000/cherryrain/');

    return(
        <>
            <div className="cherryrain">
                {cherryrain}
            </div>
        </>
    )
}

export default Cherryrain;