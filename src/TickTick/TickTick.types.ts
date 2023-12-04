export interface TickTickAuthData {
    access_token: string;
}

export interface TickTickProjectData {
    id: string;
    name: string;
    color: string;
}

export interface TickTickProjectWithTasksData {
    project: TickTickProjectData;
    tasks: TickTickTaskData[];
}

export interface TickTickTaskData {
    content: string;
    desc: string;
    id: string;
    isAllDay: boolean;
    priority: number;
    projectId: string;
    sortOrder: number;
    status: number;
    tags: [];
    timeZone: string;
    title: string;
}