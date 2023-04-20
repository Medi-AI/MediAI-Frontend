import React, {useState, useRef} from "react";
import Navbar from "../../components/Navbar";
import "./Predict.css";
import Symptoms from "./Symptoms";

const Predict = () => {
	const [query, setQuery] = useState("");
	const [initialSymptoms, setInitialSymptoms] = useState(Symptoms);
	const [selectedSymptoms, setSelectedSymptoms] = useState([]);

	const submit = async () => {
		// console.log(array);s
		// const res = await fetch("/predict", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "Application/json",
		// 	},
		// 	body: JSON.stringify(),
		// });
		// console.log("data sent");
		// const data = await res.json();
		// if (data) {
		// 	console.log(data);
		// }
	};

	const removeSymptom = (symptom) => {
		setInitialSymptoms((prevstate) => {
			return prevstate.filter((dataSymptom) => {
				return symptom !== dataSymptom;
			});
		});
	};

	const removeSelectedSymptom = (symptom) => {
		setSelectedSymptoms((prevstate) => {
			return prevstate.filter((dataSymptom) => {
				return symptom !== dataSymptom;
			});
		});
		initialSymptoms.push(symptom);
	};

	const handleOnClick = (symptom) => {
		removeSymptom(symptom);

		selectedSymptoms.push(symptom);
	};

	const submitPredict = () => {
		let symptomsArray = [];
		selectedSymptoms.map((ele) => {
			return symptomsArray.push(ele.name);
		});
		console.log(symptomsArray);
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
							{initialSymptoms
								.filter(
									(
										symptom,
									) =>
										symptom.name
											.toLowerCase()
											.includes(
												query.toLowerCase(),
											),
								)
								.slice(0, 9)
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
					<h2>Selected Symptoms</h2>
					<div className='selected-symptoms'>
						{selectedSymptoms.map(
							(symptom) => {
								return (
									<li
										className='symptom'
										onClick={() => {
											removeSelectedSymptom(
												symptom,
											);
										}}
										key={
											symptom.name
										}>
										{
											symptom.name
										}
									</li>
								);
							},
						)}
					</div>
					<div className='submit-div'>
						<button onClick={submitPredict}>
							Predict
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Predict;
