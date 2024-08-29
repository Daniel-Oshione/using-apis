// Get operation
async function getTodo() {
    try {
        const response = await fetch(
            "https://todo-list-pq1u.onrender.com/api/v1/todo"
        );
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getTodo();

// create operation
async function createTOdo() {
    try {
        const response = await fetch(
            "https://todo-list-pq1u.onrender.com/api/v1/todo",
            {
                method: "POST" ,
                body:{
                    title: "this is create operation",
                    description: "this was crated by Daniel",
                },
            }
        );
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// update operation
async function updateTodo() {
    try {
        const response = await fetch(
            "https://todo-list-pq1u.onrender.com/api/v1/todo",
            {
                method: "PUT",
                
            }
        )
    } catch (error) {
        
    }
}