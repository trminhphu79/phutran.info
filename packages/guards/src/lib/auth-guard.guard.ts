import { inject } from '@angular/core';
import { AuthService } from '@tmp/services/auth';

export const AdminAuthGuard = () => {
  const authService = inject(AuthService);
  return !!authService.getRefreshToken();
};
