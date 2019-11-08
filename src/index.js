import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RSC from "react-scrollbars-custom";
import ToolsNavbar from './ToolsNavbar';
import Area1 from './Area1'
import Area2 from './Area2'
import { IntlProvider } from 'react-intl';
import en from './i18n/en.js';
import zh from './i18n/zh.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faLongArrowAltDown, faGlobe, faChevronDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import CampSite from './Test'

library.add(fab, faHome, faLongArrowAltDown, faGlobe, faChevronDown, faLongArrowAltUp);

const Root = () => {
    const [locale, setLocale] = useState(navigator.language);
    let messages = locale.includes('en') ? en : zh;

    const onScroll = (scrollValues, prevScrollValues) => {
        if (scrollValues.scrollTop > scrollValues.clientHeight ) {
            document.getElementById("Sidebar2").classList.add("fixed");
        }
        else document.getElementById("Sidebar2").classList.remove("fixed");
    };

    return (
        <IntlProvider locale={locale} key={locale} defaultLocale="en" messages={messages}>
            <ToolsNavbar setLocale={setLocale} />
            <CampSite />
            <RSC onScroll={onScroll} disableTracksWidthCompensation={true} style={{ width: "100%", height: "100vh" }}>
                {/*<Area1 />*/}
                <Area2 />
            </RSC>
        </IntlProvider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
