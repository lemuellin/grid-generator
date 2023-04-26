import React, { useState } from 'react';
import DataInput from './DataInput';
import '../styles/styles.css';

const Content = () => {
    const [zcX, setZcX] = useState('');
    const [zcY, setZcY] = useState('');
    const [g93X, setG93X] = useState('');
    const [g93Y, setG93Y] = useState('');
    const [drillDia, setDrillDia] = useState('');
    const [dist_1, setDist_1] = useState('');
    const [dist_2, setDist_2] = useState('');
    const [dist_3, setDist_3] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');

    const handleChange = (input) => {
        switch (input.name){
            case "zcX":
                setZcX(input.value);
                break;
            case "zcY":
                setZcY(input.value);
                break;
            case "g93X":
                setG93X(input.value);
                break;
            case "g93Y":
                setG93Y(input.value);
                break;
            case "drillDia":
                setDrillDia(input.value);
                break;
            case "dist_1":
                setDist_1(input.value);
                break;
            case "dist_2":
                setDist_2(input.value);
                break;
            case "dist_3":
                setDist_3(input.value);
                break;
            case "row":
                setRow(input.value);
                break;
            case "column":
                setColumn(input.value);
                break;
        }
    }

    return(
        <div className='content'>
            <div className='leftSection'>
                <DataInput
                    onDataInputChange={handleChange}
                    zcX={zcX}
                    zcY={zcY}
                    g93X={g93X}
                    g93Y={g93Y}
                    drillDia={drillDia}
                    dist_1={dist_1}
                    dist_2={dist_2}
                    dist_3={dist_3}
                    row={row}
                    column={column}
                />
            </div>
            <div className='rightSection'>
                <div>{'include("simple.js");'}</div>
                <div>{`for(r=0;r<${row};r++){`}</div>
                <div>{`for(c=0;c<${column}; c++){`}</div>
                <div>{'for(i=0;i<5;i++){'}</div>
                <div>{'for(j=0;j<5;j++){'}</div>        
                <div>{`addCircle(${dist_2}*i+c*${dist_3}+${Number(zcX)+Number(g93X)},${dist_2}*j+r*${dist_3}+${Number(zcY)+Number(g93Y)},${drillDia/2});`}</div>
                <div>{`addCircle(${dist_2}*i+c*${dist_3}+${Number(dist_1)+Number(zcX)+Number(g93X)},${dist_2}*j+r*${dist_3}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});`}</div>
                <div>{`addCircle(${dist_2}*i+c*${dist_3}+${Number(dist_1)+Number(zcX)+Number(g93X)},${dist_2}*j+r*${dist_3}+${Number(zcY)+Number(g93Y)},${drillDia/2});`}</div>
                <div>{`addCircle(${dist_2}*i+c*${dist_3}+${Number(zcX)+Number(g93X)},${dist_2}*j+r*${dist_3}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});`}</div>
                <div>{'}}}}'}</div>
            </div>
        </div>
    );
}

export default Content;