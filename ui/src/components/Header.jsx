import React from 'react'
import { Button } from 'react-bootstrap'

function Header() {
    return (
        <>
         <div>
            <div style={{display:"block"}}>
                <h3 style={{ color: "white", float:"left",display: "inline-block" }}>
                    Hello,<span style={{ color: "#a6cb4b", }}>Brooklyn Simmons</span>
                </h3>
                <Button style={{ backgroundColor: "#77f534",float:"right" }}>Start Trading</Button>
            </div>
            <div >
                <h5 style={{ color: "white", textAlign: "left" }}>
                    Welcome to <span style={{ color: "#a6cb4b" }}>Spot Trading</span>
                </h5>
            </div>
        </div>
        </>
    )
}

export default Header
