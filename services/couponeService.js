
import * as CouponeMapper from '../mappers/couponeMapper'

const coupone = {
    id: 0,
    code: '',
    text: '',
    value: 0.00,
}

const getStorageCoupone = () => {
    if (typeof window !== 'undefined') {
        const couponeFromStorage = JSON.parse(localStorage.getItem('coupone'));
        if (!couponeFromStorage) {
            localStorage.setItem('coupone', JSON.stringify(coupone))
            return coupone
        }
        return couponeFromStorage
    } else {
        return null
    }
}

const setCoupone = (newCoupone) => {
    localStorage.setItem('coupone', JSON.stringify(newCoupone))
}

const storageToApiCoupone = () => {
    const storageCoupone = getStorageCoupone()
    return CouponeMapper.toCouponeApi(storageCoupone)
}

export { getStorageCoupone, setCoupone, storageToApiCoupone } 