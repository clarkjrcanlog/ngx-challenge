import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService){}

    async canActivate() {
        if (this.authService.hasToken()) {
            return true;
        }
        else {
            this.authService.logout();
            return false;
        }
    }

}
