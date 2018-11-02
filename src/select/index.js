import React from 'react';

const Select = ({options, id, onChange, valueField, textField, required}) => {
	return (
		<select id={id}
						onChange={onChange}
						required={required}
		>
			{options.map((item, index) => {
				return (
					<option key={index}
									value={item[valueField]}
					>
						{item[textField]}
					</option>
				)
			})}
		</select>
	)
};
export default Select;