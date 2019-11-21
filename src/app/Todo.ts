import { TodoEtatEnum } from './todoEtat.enum';

export class Todo {
    id: number;
    titre: string;
    etat: TodoEtatEnum;
    description: string;
}
