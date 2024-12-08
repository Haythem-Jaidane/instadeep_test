test("add Task", () => {
    
    const task =({
        Title:"hello",
        Description: "5",
        Priority:2,
        Category:"Work",
        DueDate: "24/12/2024",
        CompletionStatus:true
    
    })

    expect(addTask(task)).toBe(task);
})