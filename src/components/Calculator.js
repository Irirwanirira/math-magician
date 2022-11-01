import React from 'react';

class Calculator extends React.Component {
   
    render() {
        return (
        <div className="calculus">
            
            <div className='display'>
                <span>0</span>
            </div>
            <div className='All'>

                <div className="row-1">
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='orange'> ÷</button>
                </div>   
                <div className="row-2">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='orange'>x</button>
                </div>

                <div className="row-3">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className='orange'>-</button>
                </div>

                <div className="row-4">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='orange'>+</button>
                </div>
                <div className="point">
                    <button>0</button>
                    <button>.</button>
                    <button className='orange'>=</button>
                </div>

            </div>
        </div>
    )}
 
}
export default Calculator;