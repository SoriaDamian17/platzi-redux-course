import { type as findResults } from '../actions/findResults';
import items from '../../api/items';

const defaultState = items;

function reducer(state = defaultState, { type, payload}) {
    switch (type) {
        case findResults: {
            const regex = new RegExp(`^${payload}` , 'i');

            return items.filter(item => regex.test(item.title));
        }
        default:
            return state;
    }
}

export default reducer;