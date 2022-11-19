let profileButton = document.getElementById("profile-btn");

profileButton?.addEventListener("click", function handleClick(event){
    console.log("haha");
    console.log(event);
    console.log(event.target);
});