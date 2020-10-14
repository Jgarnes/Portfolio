import React from 'react';
import { FaReact, FaHtml5, FaBootstrap, FaNodeJs, FaGithub} from 'react-icons/fa';
import { SiJavascript, SiCss3, SiMongodb, SiRedux, SiVisualstudiocode } from 'react-icons/si';

function Skills() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row ">
                    <div className="col-2">
                        <FaReact className="icon" />
                    </div>
                    <div className="col-2">    
                        <FaHtml5 className="icon"/>
                    </div>
                    <div className="col-2"> 
                        <FaBootstrap className="icon"/>
                    </div> 
                    <div className="col-2"> 
                        <FaNodeJs className="icon"/>
                    </div> 
                    <div className="col-2">  
                        <FaGithub className="icon"/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-2">
                        <SiJavascript className="icon" />
                    </div>
                    <div className="col-2">    
                        <SiCss3 className="icon"/>
                    </div>
                    <div className="col-2"> 
                        <SiMongodb className="icon"/>
                    </div> 
                    <div className="col-2"> 
                        <SiRedux className="icon"/>
                    </div> 
                    <div className="col-2">  
                        <SiVisualstudiocode className="icon"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;