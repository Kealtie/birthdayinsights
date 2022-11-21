import { eventHandler } from 'h3';

export default eventHandler(async (): Promise<{ data: User }> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        data: {
            id   : 1,
            name : 'John Doe',
            email: 'johndoe@code14.nl',
        }
    };
});
