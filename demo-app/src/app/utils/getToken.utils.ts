export class TokenUtils {

    static getToken(): string | null {
        return localStorage.getItem('token')
    }
}