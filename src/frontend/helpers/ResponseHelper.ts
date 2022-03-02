export class ResponseHelper {
    success: boolean = false;
    errorMessage: string = "";
    message: string = "";
    /**
     *
     */
    constructor(message: string) {
        this.errorMessage = message;
    }
}