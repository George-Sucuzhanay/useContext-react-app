import React, {useContext} from 'react'
import { ColorContext } from '../App';

const YellowPage = () => {
  

    const Context = useContext(ColorContext);
    console.log(Context);
    return(
        <div>
            <h1 style={{color: 'black'}}> This is the Yellow Page</h1>
        </div>
    )
}
export default YellowPage;
