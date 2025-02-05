export interface AllTasksType {
  id: number;
  text: string;
  silver_coin: number;
  gold_coin: number;
  exp: number;
  link: string;
  image: string;
  can_check: boolean;
  completed: boolean;
  type: string;
}

export interface AllTasksTypeKey {
  title: string;
  tasks: AllTasksType[];
}

export interface AllTasksScheme {
  arrTasks?: AllTasksTypeKey[];
}
