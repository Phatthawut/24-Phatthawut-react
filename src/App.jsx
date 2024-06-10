import { useState } from "react";
import "./App.css";

import EmployeeTable from "./components/EmployeeTable";

function App() {
	const [employeeLists, setEmployeeLists] = useState([
		{
			name: "Jonas",
			lastname: "Jone",
			position: "Sr.Dev",
		},
		{
			name: "Marry",
			lastname: "More",
			position: "Jr.Dev",
		},
	]);

	const [toggleUser, setToggleUser] = useState(false);
	const [toggleAdmin, setToggleAdmin] = useState(false);

	const handleUserToggle = () => {
		setToggleUser(!toggleUser);
	};

	const handleAdminToggle = () => {
		setToggleAdmin(!toggleAdmin);
	};

	return (
		<div>
			<h1>Generation Thailand</h1>
			<h2>React - Assessment</h2>
			<br />
			<button onClick={handleUserToggle}>User Home Sector</button>
			{toggleUser && (
				<EmployeeTable employeeLists={employeeLists} isAdmin={false} />
			)}
			<button onClick={handleAdminToggle}>Admin Home Sector</button>
			{toggleAdmin && (
				<EmployeeTable employeeLists={employeeLists} isAdmin={true} />
			)}
			)
		</div>
	);
}

export default App;
