import React from "react";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 240; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){

    }

    render(){
        const {array} = this.state;
        const max = Math.max(...array);
        console.log(max);
        return(
            <div className="project-container">
                <div className="parent-container">
                    <div className="array-container" class="centre">
                        {array.map((value, idx) => (
                            <div 
                                className="array-bar" 
                                key ={idx} 
                                style={{height: `${value/9.5}vh`, marginTop: `${730-Math.max(...array)}px`}}>
                            </div>
                        ))}
                    </div>
                    <div className="button-container">
                        <button on onClick={() => this.resetArray()}>Generate New Array</button>
                        <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button onClick={() => this.quickSort()}>Quick Sort</button>
                        <button onClick={() => this.heapSort()}>Heap Sort</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

