import { useTheme } from "../Context/ThemeContext";

const Dashboard = () => {
	const themeName = useTheme().themeName;
	return (
		<>
			{/* <div style={{ backgroundColor:themeName == 'Light'? "#E5E5E5" :"black"}}> */}
				<div>
					<h1>Overview</h1>
				</div>
				<div style={{ backgroundColor:themeName == 'Light'?"#D9D9D9":"rgb(71, 70, 69)", height: "580px"}}>
					<div style={{ display: "flex" }}>
						<div
							style={{
								backgroundColor: '#5472C4',
								width: '200px',
								height: '100px',
								margin: '30px',
								padding: '10px',
								borderRadius: '21px'
							}}
						>
							<h6 style={{ color: 'white' }}>Pending creation</h6>
						</div>
						<div
							style={{
								backgroundColor: '#5472C4',
								width: '200px',
								height: '100px',
								margin: '30px',
								padding: '10px',
								borderRadius: '21px'
							}}
						>
							<h6 style={{ color: 'white' }}>Pending creation</h6>
						</div>
						<div
							style={{
								backgroundColor: '#5472C4',
								width: '200px',
								height: '100px',
								margin: '30px',
								padding: '10px',
								borderRadius: '21px'
							}}
						>
							<h6 style={{ color: 'white' }}>Pending creation</h6>
						</div>
						<div
							style={{
								backgroundColor: '#5472C4',
								width: '200px',
								height: '100px',
								margin: '30px',
								padding: '10px',
								borderRadius: '21px'
							}}
						>
							<h6 style={{ color: 'white' }}>Pending creation</h6>
						</div>
					</div>
				</div>
			{/* </div> */}
		</>
	);
};

export default Dashboard;

