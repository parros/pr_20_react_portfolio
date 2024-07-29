const ContactPage = () => {
    return (
        <>
        <h1>Contact</h1>
        <form id='contactForm'>
            <label for='name'>Name:</label><br/>
            <input type='text' id='name'></input><br/>
            <label for='emailAddress'>Email Address:</label><br/>
            <input type='email' id='emailAddress'></input><br/>
            <label id='thing' for='message'>Message:</label><br/>
            <input type='text' id='message'></input><br/>
            <input type='submit' id='idForm' value='Submit'></input>
        </form>
        </>
    )
}

export default ContactPage