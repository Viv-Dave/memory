import './style/Card.css';
import { useState, useEffect } from 'react';
import array from './CardTemplate';
export default function PlayGame() {
    const [count, setCount] = useState(0);
    let rand = array.sort((ele1, ele2) => Math.random(ele1) - Math.random(ele2));
    const [clicked, setClicked] = useState(new Array(rand.length).fill(0));
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    function handleClick() {
        setCount(count + 1);
        rand = array.sort((ele1, ele2) => Math.random(ele1) - Math.random(ele2)); 
        const id = event.target.id;
        // clicked[id-1] = clicked[id-1] + 1; 
        clicked[id-1] += 1;
        setClicked(clicked); 
        const title = event.target.title
        console.log(`${title} and ${clicked[id-1]}`);
        checkDoubleClick(id);
        console.log(clicked);
        console.log(count);
    }
    function checkDoubleClick(id) {
        if (clicked[id-1]>1) {
            setClicked(Array(rand.length).fill(0));
            setCount(0);
        }
    }
    return ( 
        <>
          <div>
                <p>Current Score: {count}</p>
            </div>  
            <div className='Card-container'>
                {rand.map((item, index) => (
                    <div key={index} className="Card" onClick={() => handleClick(index)} id ={item.id} title = {item.title}>
                    <div>
                    <img src="src/BerserkImages/FrameBG.png" alt="" />
                    <img src={item.image}/>
                    </div>
                        {item.title}   
                    </div>
                ))}
            </div>
        </>
    );
}