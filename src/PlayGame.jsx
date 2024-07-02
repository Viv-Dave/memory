import './style/Card.css';
import { useState, useEffect } from 'react';
import array from './CardTemplate';

export default function PlayGame({count, setCount}) {
    const [clicked, setClicked] = useState(new Array(array.length).fill(0));
    const [shuffledArray, setShuffledArray] = useState([...array].sort(() => Math.random() - 0.5));

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    function handleClick(event) {
        const id = parseInt(event.currentTarget.id);
        const title = event.currentTarget.title;
        const newClicked = [...clicked];
        newClicked[id] += 1;
        const cardElement = event.currentTarget;
        cardElement.classList.add('closing');
        if (newClicked[id] > 1) {
            setClicked(new Array(array.length).fill(0));
            setCount(0);
        } else {
            setCount(count + 1);
            setClicked(newClicked);
        }
        setShuffledArray([...array].sort(() => Math.random() - 0.5));
        cardElement.classList.remove('closing');
        cardElement.classList.add('opening');

        setTimeout(() => {
            cardElement.classList.remove('opening');
        }, 1000);

        console.log(`${title} and ${newClicked[id]}`);
        console.log(newClicked);
        console.log(count);
    }

    return (
        <>
        <div className='card-box'>
            <div className='Card-container'>
                {shuffledArray.map((item, index) => (
                    <div
                        key={index}
                        className="Card"
                        onClick={handleClick}
                        id={item.id.toString()}
                        title={item.title}
                    >
                        <div>
                            <img src="../public/assets/BerserkImages/RoyalFrameBG.png" alt="" className='frame'/>
                            <img src={item.image} alt={item.title} className='image'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
