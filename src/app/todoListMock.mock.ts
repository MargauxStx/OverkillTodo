import { Todo } from './todo';
import { TodoEtatEnum } from './todoEtat.enum';

export const TODOS: Todo[] = [
  { id: 1, titre: 'Recherche', etat: TodoEtatEnum.DONE, description: '' },
  { id: 2, titre: 'Analyse', etat: TodoEtatEnum.DONE, description: ''  },
  { id: 5, titre: 'Documentation', etat: TodoEtatEnum.DONE, description: ''  },
  { id: 6, titre: 'Reunion AMO', etat: TodoEtatEnum.PROGRESS, description: ''  },
  { id: 7, titre: 'Reunion Metier', etat: TodoEtatEnum.PROGRESS, description: ''  },
  { id: 3, titre: 'Developpement Front', etat: TodoEtatEnum.PROGRESS, description: ''  },
  { id: 9, titre: 'Developpement Back', etat: TodoEtatEnum.WAITING, description: ''  },
  { id: 8, titre: 'Test', etat: TodoEtatEnum.WAITING, description: ''  },
  { id: 10, titre: 'Deploiement', etat: TodoEtatEnum.WAITING, description: ''  },
  { id: 4, titre: 'Bilan', etat: TodoEtatEnum.WAITING, description: ''  }
];
