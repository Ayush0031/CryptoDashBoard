import React from 'react'
import { Button } from 'react-bootstrap'

function Header() {
    return (
        <>
         <div style={{ width:"auto", margin:"auto",backgroundColor:"black", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h3 style={{ color: "white" }}>
                        Hello,<span style={{ color: "#a6cb4b" }}> Brooklyn Simmons</span>
                    </h3>
                    <h5 style={{ color: "white" }}>
                        Welcome to <span style={{ color: "#a6cb4b" }}>Spot Trading</span>
                    </h5>
                </div>
                <div>
                    <Button style={{ backgroundColor: "#77f534" }}>Start Trading</Button>
                </div>
            </div>
        </>
    )
}

export default Header
