const EXCHANGE_TYPE = {
    LEND: "LEND",
    BURROW: "BORROW",
}

//===========================

const exchangeItem = ()=>({
    id: null,
    category: null,
    name: "",
    type: EXCHANGE_TYPE.LEND,
    time: null,
    dueTime: null,
    isHistory: false,
})


const exchangeCategory = ()=>({
    id: null,
    name: "",
})

const contact = ()=>({
    id: null,
    name: "",
    email: "",
    address: "",
    phone: "",
    note: ""
})

const contactGroup = ()=> ({
    id: null,
    name: "",
})

const userInfo = () => ({
    name: "",
})


export const defaultObjects = {
    exchangeItem,
    exchangeCategory,
    contact,
    contactGroup,
    userInfo
}