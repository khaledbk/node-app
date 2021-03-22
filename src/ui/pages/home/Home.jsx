import { useState } from 'react'
import { Lib } from '../../../lib'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const HomeContainer = (props) =>{

    const [count, setCount] = useState(0) // pour declarer l'etat initial de `cout`

    const handleClick = () => {
        setCount(count+1)
    }

    return <div>
                Ya wazza wini Eline !! {count} <br></br>
                <Button 
                    disabled={false}
                    size="large"
                    icon={<SearchOutlined />} 
                    type="primary" onClick={handleClick}>Click Me</Button>
            </div>

}

Lib.addComponent('Home', HomeContainer)