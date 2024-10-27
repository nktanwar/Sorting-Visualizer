import {atom} from 'recoil';

export const callState = atom({
    key:'callState',
    default:0,
})

export const downS=atom({
    key:'downS',
    default:false,
})
export const downSS=atom({
    key:'downSS',
    default:false,
})
export const downTC=atom({
    key:'downTC',
    default:false,
})
export const downC=atom({
    key:'downC',
    default:false,
})


export const inputTime=atom({
    key:"inputTime",
    default:100,
})
export const initialSz=atom({
    key:"initialSize",
    default:10,
})

export const text=atom({
    key:'text',
    default:'Bubble Sort'
})

export const legend =atom({
    key:'legend',
    default:[false,false,false,false,false]

})

