type MyPick <T, K extends keyof T> = {
	[Key in K]: T[Key]
}

interface TodoPick {
	id: string;
	title: string;
	completed: boolean;

}


type TodoReview = MyPick<TodoPick, "id" | 'title'>;