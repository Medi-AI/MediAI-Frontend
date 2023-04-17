import React, {useState} from "react";

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
		<div>
			<input
				type='text'
				onChange={(e) => setArray(e.target.value)}
				placeholder='Enter Array'></input>
			<button onClick={submit}>Submit</button>
		</div>
	);
};

export default Predict;
