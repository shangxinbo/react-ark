
let common = {
    nav: false,
    account: false
}

export default (state = common, action) => {
    switch (action.type) {
    case 'TOGGLE_NAV':
        return { nav: action.show }
    case 'TOGGLE_ACCOUNT':
        return { account: action.show }
    default:
        return state
    }
}