import React from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {FiSettings} from 'react-icons/fi'

const Tooltip = () => {
    return (
        <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>
            <TooltipComponent content="Settings" position='TopCenter'>
                <button 
                    type='button' 
                    className="text-3xl p-3 hover:bg-light-gray text-white"
                    style={{background: 'blue', borderRadius: '50%'}}
                >
                    <FiSettings/>
                </button>
            </TooltipComponent>
        </div>
    );
};

export default Tooltip;