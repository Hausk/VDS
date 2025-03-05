import { toast } from 'sonner';

export const handleAuthError = (error: any) => {
  if (error.message === 'Connexion non autorisée') {
    // Rediriger vers une page d'erreur ou afficher un message
    window.location.href = '/acces-refuse';
    return;
  }

  if (error.message === 'Compte non existant') {
    // Rediriger vers une page d'inscription ou afficher un message
    window.location.href = '/inscription-requise';
    return;
  }

  // Gestion des autres types d'erreurs
  console.error("Erreur d'authentification", error);
  if (error.error.status === 429) {
    toast.error(error.message);
  }
};
