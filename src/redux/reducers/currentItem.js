import { type as findCurrentItem } from '../actions/findCurrentItem';
import items from '../../api/items';

const defaultState = 0;

function reducer(state = defaultState, { type, payload}) {
    switch (type) {
        case findCurrentItem: {
            if (!payload) {
                return null;
            }
            return items.filter(item => payload === item.id);
        }
        default:
            return state;
    }
}

export default reducer;