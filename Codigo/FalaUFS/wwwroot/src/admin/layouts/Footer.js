import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <strong>Copyright &copy; 2020 <a href="http://www.ufs.br/">Universidade Federal de Sergipe</a>.</strong>
                    Todos os direitos reservados.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.0.4
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;