import {
	ADD_COMMENT,
	REMOVE_COMMENT,
	EDIT_COMMENT,
	THUMB_UP_COMMENT,
	THUMB_DOWN_COMMENT
} from './actions';


function comments(state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [
			{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state.comments];
		case REMOVE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					comment.text = action.text;
					return comment;
				}
				return comment;
			});
		case THUMB_UP_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					comment.votes = comment.votes + 1;
					return comment;
				}
				return comment;
			});
		case THUMB_DOWN_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					comment.votes = comment.votes - 1;
					return comment;
				}
				return comment;
			});
		default:
			return state;
	}
}

export default comments;