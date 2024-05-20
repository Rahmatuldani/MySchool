export type StaffType = {
    _id: string;
    id: number;
    name: string;
    gender: string;
    address: string;
    phone: string;
    photo: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}