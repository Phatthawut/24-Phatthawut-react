function EmployeeTable({ employeeLists, isAdmin, deleteEmployee }) {
	return (
		<div>
			<h2>Employee Lists</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Last Name</th>
						<th>Position</th>
						{isAdmin && <th>Action</th>}
					</tr>
				</thead>
				<tbody>
					{employeeLists.map((employee, index) => (
						<tr key={index}>
							<td>{employee.name}</td>
							<td>{employee.lastname}</td>
							<td>{employee.position}</td>
							{isAdmin && (
								<td>
									<button onClick={() => deleteEmployee(employee.name)}>
										Delete
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default EmployeeTable;
