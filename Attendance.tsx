const dummySessions = [
  { id: 1, name: 'Frontend Fundamentals', date: '2024-08-01', status: 'Completed', present: 18, total: 20 },
  { id: 2, name: 'Advanced React Patterns', date: '2024-08-03', status: 'Completed', present: 15, total: 20 },
  { id: 3, name: 'State Management Deep Dive', date: '2024-08-05', status: 'In Progress', present: 19, total: 20 },
  { id: 4, name: 'UI/UX for Developers', date: '2024-08-08', status: 'Scheduled', present: 0, total: 20 },
  { id: 5, name: 'Final Project Kick-off', date: '2024-08-10', status: 'Scheduled', present: 0, total: 20 },
];

export default function Attendance() {
  return (
    <div>
        <h2 className="page-title">Attendance</h2>
        <div className="card">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Session Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Attendance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummySessions.map(session => (
                  <tr key={session.id}>
                    <td>{session.name}</td>
                    <td>{session.date}</td>
                    <td>{session.status}</td>
                    <td>{session.present} / {session.total}</td>
                    <td>
                      <button style={{marginRight: '8px'}}>View</button>
                      <button className="primary">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}
