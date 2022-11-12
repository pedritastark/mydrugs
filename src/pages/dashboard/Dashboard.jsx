import './Dashboard.css';

import {Header} from '../../components/header/Header.jsx'
import {Footer} from '../../components/footer/Footer.jsx'
import {VerticallCards} from '../../components/cards/Cards.jsx'

export function DashBoard() {

    return (
    <div>
        <Header/>
        <VerticallCards/>
        <Footer/>
    </div>
  );
}