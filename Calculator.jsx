import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { PercentageOutlined } from '@ant-design/icons';
import DragHandleIcon from '@material-ui/icons/DragHandle';

const Calculator = () => {

    const [result, setResult] = useState("");


    const itemchange = (event) => {
        console.log(event.target.name);
        setResult(result.concat(event.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        try {
            const res = eval(result).toString();
            setResult({result: res});
        }
        catch (err) {
            setResult(Error)
        }
    }
    return (
        <>
        <div className="main-div">
            <div className="calc">
                <div className="result">
                    <input type="text" defaultValue={result} />
                </div>
                <div className="keypad">
                    <div className="btn">
                    <button className="button" id="highlight" onClick={clear} >CE</button>
                        <button className="button" id="highlight" onClick={backspace}>C</button>
                        <button className="button" id="highlight" name="%" onClick={itemchange}><PercentageOutlined/></button>
                        <button className="button" id="highlight" name="/" onClick={itemchange}>/</button>

                        <button className="button" name="7" onClick={itemchange} >7</button>
                        <button className="button" name="8" onClick={itemchange}>8</button>
                        <button className="button" name="9" onClick={itemchange}>9</button>
                        <button className="button" id="highlight" name="*" onClick={itemchange}><CloseOutlined/></button>

                        <button className="button" name="4" onClick={itemchange}>4</button>
                        <button className="button" name="5" onClick={itemchange}>5</button>
                        <button className="button" name="6" onClick={itemchange}>6</button>
                        <button className="button" id="highlight" name="-" onClick={itemchange}><MinusOutlined/></button>

                        <button className="button" name="1" onClick={itemchange}>1</button>
                        <button className="button" name="2" onClick={itemchange}>2</button>
                        <button className="button" name="3" onClick={itemchange}>3</button>
                        <button className="button" id="highlight" name="+" onClick={itemchange}><PlusOutlined/></button>

                        <button className="button" name="00" onClick={itemchange}>00</button>
                        <button className="button" name="0" onClick={itemchange}>0</button>
                        <button className="button" name="." onClick={itemchange}>.</button>
                        <button className="button" id="highlight" onClick={calculate}><DragHandleIcon/></button>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
export default Calculator;