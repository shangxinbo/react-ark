
export default {
    toggleNav: (show) => ({ type: 'TOGGLE_NAV', show: show }),
    toggleAccount: (show) => ({ type: 'TOGGLE_ACCOUNT', show: show }),
    updateCrowd: (crowd) => ({ type: 'UPDATE_CROWD', crowd: crowd }),
    updateFilter: (filter) => ({ type: 'UPDATE_FILTER', filter: filter }),
    updateModel: (model) => ({ type: 'UPDATE_MODEL', model: model })
}