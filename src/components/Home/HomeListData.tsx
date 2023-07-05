import React from "react";

type Props = {
	item: any;
};

const HomeListData = (props: Props) => {
	const { item } = props;

	return (
		<>
			<div style={{  marginLeft:"20px"}}>
					{item ? (
						<>
							<h1>{item?.name}</h1>
							<p>Age: {item?.age}</p>
							<p>Email: {item?.email}</p>
							<p>Phone: {item?.phone}</p>
							<p>Address: {item?.address}</p>
							<p>City: {item?.city}</p>
							<p>Country: {item?.country}</p>
							<p>Occupation: {item?.occupation}</p>
							<p>Salary: {item?.salary}</p>
						</>
					) : null}
			</div>

		</>
	);
};

export default HomeListData;
