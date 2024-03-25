export type UserType = {
    id: string | number,
    name: string,
    phone: string | number,
    end: string, 
    email: string,
}
export type UserTypeContext = {
    idUser?: string | number,
    createOneUser: (data: UserType) => Promise<void>,
    listOneUser: (id: string | number) => void,
    listUsers: () => void,
    deleteOneUser: (id: string | number) => void,
    updateOneUser: (id: string | number, data: UserType) => Promise<void>,
};