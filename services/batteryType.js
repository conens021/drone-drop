import { batteriesData } from '../data/batteriesData'

const getByType = (type) =>{

    const item = batteriesData.find(i => i.type == type)


    return item
}



export  {getByType}