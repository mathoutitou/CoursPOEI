import {ContactInterface} from "./ContactInterface";

class Person implements ContactInterface {

    // propriétés Public, private et protected pour + de sécurité (public par défault)
    // propriété: typage (string, number, boolean, void);

    constructor(
        private firstName: string,
        private lastName : string
    ) {
        const localVariable: number = 123;
    }

    // convention
    introduce(): string {
        return `Bonjour, je suis ${this.firstName}`;
    }

    addFriend(friend: ContactInterface): void {

    }
}