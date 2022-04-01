import { cameraData } from '../data/cameraData'

const getByType = (type) =>{

    const item = cameraData.find(i => i.type == type)


    return item
}



export  {getByType}