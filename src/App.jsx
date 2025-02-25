import { useState } from 'react';
import './App.css';

function App() {
	// State
	const [carName, setCarName] = useState('');
	const [carValue, setCarValue] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
	const [totalValue, setTotalValue] = useState(0);

	// Event Handlers
	const handleCarNameChange = (event) => {
        console.log(`car Name: ${carName}`);
		setCarName(event.target.value);
	};

	const handleCarValueChange = (event) => {
		const val = parseInt(event.target.value);
		setCarValue(val);
        console.log(`car Name: ${carValue}`);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setCarName('');
		setCarValue(0);
		console.log(`form was submited `);
	};

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(`search Term : ${searchTerm}`);
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="header">
					<label htmlFor="car-name">Car Name</label>
					<label htmlFor="car-value">Car Value</label> <br />
				</div>
				<input
					type="text"
					id="car-name"
					value={carName}
					onChange={handleCarNameChange}
				/>{' '}
				{''}
				<input
					type="number"
					id="car-value"
					value={carValue || ''}
					onChange={handleCarValueChange}
				/>{' '}
				<button>Submit</button>
			</form>

			<div className="">
				<h3>My Cars</h3>

				<label htmlFor="search-term">Search: </label>
				<input type="text" id="search-term" value={searchTerm} onChange={handleSearchChange} />
			</div>
			<hr />

            <div className='total'>
                Total Value: ${totalValue}
            </div>
		</div>
	);
}

export default App;
