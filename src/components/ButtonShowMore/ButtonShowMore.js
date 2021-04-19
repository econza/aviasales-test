
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShowCount } from '../../redux/actions';

const ButtonShowMore = () => {
	const dispatch = useDispatch();
	const showCount = useSelector((state) => state.mainState.showCount);

	return (
		<button onClick={() => dispatch(setShowCount(showCount + 5))} className="buttonShowMore">
			показать еще 5 билетов!
		</button>
	);
};

export default ButtonShowMore;