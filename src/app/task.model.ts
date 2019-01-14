export class Task {
    id: number;
    name: string;
    parent: string;
    priority: number;
    start: string;
    end: string;

    constructor(id: number, name: string, parent: string, priority: number, start: string, end: string) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.priority = priority;
        this.start = start;
        this.end = end;
    }
}