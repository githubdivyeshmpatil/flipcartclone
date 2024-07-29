import React, { useState } from 'react';
import './Noice_watch.css';
import CartNavbar from './CartNavbar';

function Noice_watch() {
    const [isDialShapeOpen, setIsDialShapeOpen] = useState(true);
    const [isSizeOpen, setIsSizeOpen] = useState(false);

    const toggleDialShapeDropdown = () => {
        setIsDialShapeOpen(!isDialShapeOpen);
    };

    const toggleSizeDropdown = () => {
        setIsSizeOpen(!isSizeOpen);
    };

    return (
        <>
            <CartNavbar/>
            <div className="container-fluid" id='noice-Container'>
                <aside className="sidebarrr">
                    {/* Sidebar content */}
                    <p id='noice_heading'>Filters</p>

                    {/* DIAL SHAPE dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleDialShapeDropdown}>
                            DIAL SHAPE
                        </div>
                        {isDialShapeOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="shape" value="Contemporary" />Contemporary
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Curved" /> Curved
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Oval" /> Oval
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Rectangle" /> Rectangle
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Round" /> Round
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Square" /> Square
                                </label>
                            </div>
                        )}
                    </div>

                    {/* SIZE dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleSizeDropdown}>
                            SIZE
                        </div>
                        {isSizeOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="size" value="Small" className='box-z' /> Small
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Medium" /> Medium
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Large" /> Large
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> Extra Large
                                </label>
                            </div>
                        )}
                    </div>
                </aside>
                <div className="main-content">
                    {/* Main content */}
                    <p>Content 1</p>
                    <p>Content 2</p>
                    <p>Content 3</p>
                </div>
            </div>
        </>
    );
}

export default Noice_watch;
