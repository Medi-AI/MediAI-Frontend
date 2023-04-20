import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import "./Predict.css";

const Predict = () => {
	const [array, setArray] = useState("");
	const submit = async () => {
		console.log(array);
		const res = await fetch("/predict", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(),
		});
		console.log("data sent");
		const data = await res.json();

		if (data) {
			console.log(data);
		}
	};

	return (
		<>
			<Navbar currentPage='Profile' />
			<div className='profile-div'>
				<div className='predict-div'>
					<div className='input-selected'>
						<input
							value={query}
							onChange={(e) =>
								setQuery(
									e.target
										.value,
								)
							}
							type='text'
							placeholder='Search Symptoms'
						/>
						<div className='symptoms-container'>
							{Symptoms.filter(
								(symptom) =>
									symptom.name
										.toLowerCase()
										.includes(
											query.toLowerCase(),
										),
							)
								.slice(0, 12)
								.map(
									(
										symptom,
									) => {
										return (
											<li
												onClick={() =>
													handleOnClick(
														symptom,
													)
												}
												className='symptom'>
												<p>
													{
														symptom.name
													}
												</p>
											</li>
										);
									},
								)}
						</div>
					</div>
					<div className='selected-symptoms'></div>
				</div>
			</div>
		</>
	);
};

export default Predict;
