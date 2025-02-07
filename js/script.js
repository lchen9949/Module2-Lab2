window.addEventListener("load", () => {

    // Fetch all the forms we want to pass the value:
    const form = document.getElementById("empForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const ext = document.getElementById("ext").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;

        window.console.log({ id, name, ext, email, department });

        // Clear the former inputs:
        form.reset();
    });
});