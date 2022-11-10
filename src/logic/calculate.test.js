import React from 'react'
import  ReactDOM  from 'react-dom'
import calculate from './calculate'

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(calculate, div)
    return {};
})