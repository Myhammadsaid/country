import { useEffect, useState } from 'react'

function App() {
	const [countries, setCountries] = useState([])
	const [counInfo, setCountInfo] = useState(null)

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch(
				'https://restcountries.com/v3.1/name/deutschland'
			)
			const data = await response.json()
			setCountries(data)
		}

		fetchCountries()
	}, [])

	const CountryData = countries.map(country => (
		<option onClick={() => setCountInfo(country)} key={country.ccn3}>
			{country.name.common}
		</option>
	))

	return (
		<div className='flex items-center justify-center m-10 flex-col'>
			<select className='w-[200px] h-8 px-4 mb-5'>
				<option onClick={() => setCountInfo(null)}>Country</option>
				{CountryData}
			</select>
			{counInfo ? (
				<>
					<div className='flex flex-col gap-7 text-xl'>
						<h1>Name: {counInfo?.name?.common}</h1>
						<h2>Capital: {counInfo?.capital[0]}</h2>
						<h2>Region: {counInfo?.region}</h2>
						<span>Flag: {counInfo?.flag}</span>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default App
