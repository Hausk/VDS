import { fetchUsers } from '@/lib/fetchUsers';

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Liste des utilisateurs</h1>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nom</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Rôle</th>
            <th className="border p-2">Créé le</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} className="border">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name || 'N/A'}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
