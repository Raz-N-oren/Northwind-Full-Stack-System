import { Notyf } from 'notyf';

class NotifyService {

    private notify = new Notyf({
        duration: 3000, // Display duration
        position: { x: "center", y: "top" }, // Message location
        dismissible: true // can user click on X
    }); 

    public success(message: string): void {
        this.notify.success(message);
    }

    public error(err: any): void {
        const message = this.extractErrorMessage(err);
        this.notify.error(message);
    }

    private extractErrorMessage(err: any): string {

        // Front: throw "some error..."
        if (typeof err === "string") return err;

        // Back: throws string (500 - server crash / 401- unauthorized / 404 - not found)
        if (typeof err.response?.data === "string") return err.response.data;

        // Back: throws string[] (400- validation)
        if (Array.isArray(err.response?.data)) return err.response.data[0];

        // Front: throw new Error("Some error...")
        if (typeof err.message === "string") return err.message;

        //Other:
        return "Some error occurred, please try again";
    }

}

const notifyService = new NotifyService();

export default notifyService;