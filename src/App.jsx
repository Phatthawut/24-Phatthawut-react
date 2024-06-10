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

	const [newEmployee, setNewEmployee] = useState({
		name: "",
		lastname: "",
		position: "",
	});

	const [toggleUser, setToggleUser] = useState(false);
	const [toggleAdmin, setToggleAdmin] = useState(false);

	const handleUserToggle = () => {
		setToggleUser(!toggleUser);
	};

	const handleAdminToggle = () => {
		setToggleAdmin(!toggleAdmin);
	};

	const handleInput = (e) => {
		setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmployeeLists([...employeeLists, newEmployee]);
		setNewEmployee({
			name: "",
			lastname: "",
			position: "",
		});
	};

	const deleteEmployee = (name) => {
		setEmployeeLists(
			employeeLists.filter((employee) => employee.name !== name)
		);
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
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="First Name"
						value={newEmployee.name}
						onChange={handleInput}
					/>
					<input
						type="text"
						name="lastname"
						placeholder="Last Name"
						value={newEmployee.lastname}
						onChange={handleInput}
					/>
					<input
						type="text"
						name="position"
						placeholder="Position"
						value={newEmployee.position}
						onChange={handleInput}
					/>
					<button type="submit">Add Employee</button>
				</form>
			)}
			{toggleAdmin && (
				<EmployeeTable
					employeeLists={employeeLists}
					isAdmin={true}
					deleteEmployee={deleteEmployee}
				/>
			)}
		</div>
	);
}

export default App;
