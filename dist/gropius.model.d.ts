export interface GropiusIssue {
    title: string;
    body?: string;
    components: string[];
    category?: any;
    labels?: string[];
    assignees?: string[];
    locations?: string[];
    startDate?: number;
    dueDate?: number;
    estimatedTime?: number;
    clientMutationID?: string;
}
export interface GropiusProject {
    id: string;
    name: string;
    description: string;
}
export interface GropiusComponent {
    id: string;
    name: string;
    description: any;
}
