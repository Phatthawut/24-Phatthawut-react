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

  const

	return (
		<div>
			<h1>Generation Thailand</h1>
			<h2>React - Assessment</h2>
			<br />
			<button>User Home Sector</button>
			<button>Admin Home Sector</button>
			<EmployeeTable employeeLists={employeeLists, isAdmin} />
		</div>
	);
}

export default App;
