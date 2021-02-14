import React from 'react';
import useIframe from '../../hooks/useIframe';

import './index.scss';

const Cherryrain: React.FC = () => {
    const [cherryrain] = useIframe('http://127.0.01:3000/cherryrain/');

    return(
        <>
            <div className="cherryrain">
                {cherryrain}
            </div>
        </>
    )
}

export default Cherryrain;