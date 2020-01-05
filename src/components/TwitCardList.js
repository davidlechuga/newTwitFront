import React from 'react';
import TwitCard from './TwitCard';
import SearchTwits from './SearchTwits';

// handleSearch = (search) => {
//   console.log(search);
// }

function TwitCardList() {
	const [ newTwits, setNewTwits ] = React.useState([]);

	const updateState = (dt) => {
		setNewTwits(dt);
	};

	return (
		<section>
			<SearchTwits
				// handleSearch = {this.handleSearch}
				update={(dt) => updateState(dt)}
			/>

			{newTwits.map((twit) => <TwitCard created_at={twit.created_at} full_text={twit.full_text} key={twit.id} />)}
		</section>
	);
}

export default TwitCardList;
