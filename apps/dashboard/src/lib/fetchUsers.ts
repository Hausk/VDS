import { cache } from 'react';

export const fetchUsers = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL || 'http://localhost:3000'}/api/users`, {
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Erreur lors du fetch des utilisateurs');
  return res.json();
});
