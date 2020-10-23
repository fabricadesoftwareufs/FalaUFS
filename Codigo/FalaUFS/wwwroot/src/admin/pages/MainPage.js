import React, {Component} from 'react';

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";



class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Footer/>
                <Sidebar/>
            </div>
        );
    }
}

export default MainPage;