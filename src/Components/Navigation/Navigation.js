import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Bootstraps/Css/bootstrap.min.css';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation-container sticky-top">
          <div className="d-flex justify-content-center align-items-center row pt-3">
            <div className="col-lg-1 col-sm-0">

            </div>
              <div className="col-lg-4 col-sm-6">
                 <h1 className="text-white"><span className="nav-item">FIFA WORLD CUP</span> <span style={{color:'red'}}>.</span></h1>
              </div>
              <div className="col-lg-1 col-sm-0">

              </div>
              <div className="col-lg-5 col-sm-6">
              <Nav activeKey="/home">
           
           <Nav.Item>
             <Nav.Link  className="text-white text-decoration-none" href=""><span className="nav-item">FORWARD</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white text-decoration-none nav-item" href=""><span className="nav-item">MIDFIELDER</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white  text-decoration-none nav-item" href=""><span className="nav-item">DEFENDER</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link className="text-white  text-decoration-none nav-item" href=""><span className="nav-item">GOALKEEPER</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white text-decoration-none nav-item" href=""><span className="nav-item">COACH</span></Nav.Link>
           </Nav.Item>
         </Nav>
              </div>
              <div className="col-lg-2 col-sm-0">

              </div>
            </div>
        </div>
    );
};

export default Navigation;