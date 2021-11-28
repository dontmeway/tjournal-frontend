export type SignUpDto = {
    email: string;
    password: string
}

export interface SignInDto extends SignUpDto {
    fullName: string;
}

export type ResponseAuth = {
    createdAt: string
    email: string
    fullName: string
    id: number
    token: string
    updatedAt: string
}
