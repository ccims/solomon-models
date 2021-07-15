export interface Target {
    targetName: string;
    targetId: string;
    targetDescription?: string;
    targetType?: TargetType;
}
export declare enum TargetType {
    AWS_LAMBDA = "AWS/Lambda",
    AWS_ECS = "AWS/ECS",
    AWS_APIGATEWAY = "AWS/ApiGateway",
    AWS_ELB = "AWS/NetworkELB",
    AWS_RDS = "AWS/RDS"
}
