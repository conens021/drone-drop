import { droneTypeData } from '../data/droneTypeData'


const getByType = (type) =>{

    const item = droneTypeData.find(i => i.type == type)


    return item
}

export  {getByType}