export class PostModel {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    body: string;

    constructor(data){
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.completed = data.completed;
    }
}