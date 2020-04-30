import { type as findSuggestions } from '../actions/findSuggestions';
import items from '../../api/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload}) {
    switch (type) {
        case findSuggestions: {
            const regex = new RegExp(`^${payload}` , 'i');

            return items.filter(item => regex.test(item.title));
        }

        default:
            return state;
    }
}

export default reducer;