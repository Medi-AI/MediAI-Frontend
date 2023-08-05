import React from "react";
import Disease from "./Disease";

const DiseaseEle = ({output}) => {
	const filtered_output_name = output.output[0][0];

	let result = Disease.filter((disease) => {
		return disease.name === filtered_output_name;
	});
	result = result[0];

	return (
		<>
			<h2 className='para'>
				<span className='result-heading'>Name : </span>
				{result.name}
			</h2>
			<div className='para'>
				<span className='result-heading'>
					Description :{" "}
				</span>
				{result.description}
			</div>
			<div className='para'>
				<span className='result-heading'>Facts :</span>
				{result.facts.map((fact) => {
					return <p>{fact}</p>;
				})}
			</div>
			<div className='para'>
				<span className='result-heading'>
					Prevention :
				</span>

				{result.prevention.map((prevention, index) => {
					return <p>{prevention}</p>;
				})}
			</div>

			<div className='para'>
				<span className='result-heading'>
					Severity :
				</span>
				{result.severity}
			</div>
			<div className='para'>
				<span className='result-heading'>
					Symptoms :
				</span>

				{result.symptoms.map((symptom) => {
					return <p>{symptom}</p>;
				})}
			</div>
			<div className='para'>
				<span className='result-heading'>
					Treatment :
				</span>
				{result.treatment}
			</div>
		</>
	);
};

export default DiseaseEle;
