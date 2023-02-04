declare global {
    interface User {
        id: number;
        name: string;
        email: string;
        dateOfBirth: string;
    }
}

export {
    User,
}
