/**
 * Big TypeScript practice file (~500 lines) for Git rebasing
 */

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User) {
        this.users.push(user);
    }

    removeUser(id: number) {
        this.users = this.users.filter(u => u.id !== id);
    }

    getUser(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    listActiveUsers(): User[] {
        return this.users.filter(u => u.isActive);
    }
}

// Generate some dummy users
const manager = new UserManager();
for (let i = 1; i <= 100; i++) {
    manager.addUser({
        id: i,
        name: `User${i}`,
        email: `user${i}@example.com`,
        isActive: i % 2 === 0
    });
}

// Dummy functions for practice
# Append repeated dummy functions to reach ~500 lines
for i in $(seq 1 50); do
    echo "function doSomething${i}() { console.log('Doing something ${i}'); }" >> bigfile.ts
done

for i in $(seq 1 50); do
    echo "function calculate${i}(x: number, y: number): number { return x + y + ${i}; }" >> bigfile.ts
done

for i in $(seq 1 50); do
    echo "class Helper${i} { help() { console.log('Helping ${i}'); } }" >> bigfile.ts
done

// Branch changes - new functions
function branchFunc1() { console.log('Branch function 1'); }
function branchFunc2() { console.log('Branch function 2'); }
function branchFunc3() { console.log('Branch function 3'); }
function branchFunc4() { console.log('Branch function 4'); }
function branchFunc5() { console.log('Branch function 5'); }
function branchFunc6() { console.log('Branch function 6'); }
function branchFunc7() { console.log('Branch function 7'); }
function branchFunc8() { console.log('Branch function 8'); }
function branchFunc9() { console.log('Branch function 9'); }
function branchFunc10() { console.log('Branch function 10'); }
function branchFunc1() { console.log('Branch function 1'); }
function branchFunc2() { console.log('Branch function 2'); }
function branchFunc3() { console.log('Branch function 3'); }
function branchFunc4() { console.log('Branch function 4'); }

// Conflicting changes on main
function mainFunc1() { console.log('Main function 1'); }
function mainFunc2() { console.log('Main function 2'); }
function mainFunc3() { console.log('Main function 3'); }
function mainFunc4() { console.log('Main function 4'); }
function mainFunc5() { console.log('Main function 5'); }
function mainFunc6() { console.log('Main function 6'); }
function mainFunc7() { console.log('Main function 7'); }
function mainFunc8() { console.log('Main function 8'); }
function mainFunc9() { console.log('Main function 9'); }
function mainFunc10() { console.log('Main function 10'); }
function mainFunc12() { console.log('Main function 10'); }
