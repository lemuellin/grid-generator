import React from 'react';
import '../styles/styles.css';

const DataInput = (props) => {

    const handleChange = (e) => {
        props.onDataInputChange(e.target);
    }

    return(
        <form className="component">
            <div className="sub-component">
                <div className ="title">Drill Diameter: </div>
                    <div className="inputs">
                        <label htmlFor='drillDiaInput'>Drill Diameter: </label>
                        <input id='drillDiaInput' name='drillDia' type='number' value={props.drillDia} onChange={handleChange}/>
                    </div>
                <div className="title">Zero Corrections: </div>
                    <div className="inputs">
                        <label htmlFor='zcXInput'>X coordinate: </label>
                        <input id='zcXInput' name='zcX' type='number' value={props.zcX} onChange={handleChange}/>
                        <label htmlFor='zcYInput'>Y coordinate: </label>
                        <input id='zcYInput' name='zcY' type='number' value={props.zcY} onChange={handleChange}/>
                    </div>
                <div className="title">G93: </div>
                    <div className="inputs">
                        <label htmlFor='g93XInput'>G93 X coordinate: </label>
                        <input id='g93XInput' name='g93X' type='number' value={props.g93X} onChange={handleChange}/>
                        <label htmlFor='g93YInput'>G93 Y coordinate: </label>
                        <input id='g93YInput' name='g93Y' type='number' value={props.g93Y} onChange={handleChange}/>
                    </div>
                <div className="title">Entry/Exit: </div>
                    <div>
                        <div className='radio'>
                            <input id='entryInput' name='entryExit' type='radio' value={'entry'} onChange={handleChange}/>
                            <label htmlFor='entryInput'>Entry (Version 1) </label>
                        </div>
                        <div className='radio'>
                            <input id='exitInput' name='entryExit' type='radio' value={'exit'} onChange={handleChange}/>
                            <label htmlFor='exitInput'>Exit (Version 4) </label>
                        </div>
                    </div>
            </div>
            <div className="sub-component">
                <div className="title">Base Pattern: </div>
                    <div className="inputs">
                        <label htmlFor='dist_1Input'>Spacing for 4-Hole Pattern: </label>
                        <input id='dist_1Input' name='dist_1' type='number' value={props.dist_1} onChange={handleChange}/>
                        <label htmlFor='numX'>Number of Holes in X Direction:</label>
                        <input id='numX' name='numX' type='number' value={props.numX} onChange={handleChange}/>
                        <label htmlFor='numY'>Number of Holes in Y Direction:</label>
                        <input id='numY' name='numY' type='number' value={props.numY} onChange={handleChange}/>
                    </div>
                <div className="title">Rows and Columns: </div>
                    <div className="inputs">
                        <label htmlFor='rowInput'>Rows (Y-Dir): </label>
                        <input id='rowInput' name='row' type='number' value={props.row} onChange={handleChange}/>
                        <label htmlFor='dist_2Input'>Row Distance: </label>
                        <input id='dist_2Input' name='dist_2' type='number' value={props.dist_2} onChange={handleChange}/>
                        <label htmlFor='columnInput'>Columns (X-Dir): </label>
                        <input id='columnInput' name='column' type='number' value={props.column} onChange={handleChange}/>
                        <label htmlFor='dist_3Input'>Column Distance: </label>
                        <input id='dist_3Input' name='dist_3' type='number' value={props.dist_3} onChange={handleChange}/>
                    </div>
            </div>
        </form>
    );
}

export default DataInput;