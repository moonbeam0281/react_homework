export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase());

export function validateContact({name, email, message})
{
    const errors = {};
    if(!name || name.trim().length < 3)
        errors.name = "Name must be at least 3 characters long";

    if(!email || !isEmail(email))
        errors.email = "Email address is not valid.";

    if(!message || message.trim().length < 10)
        errors.message = "Message must be at least 10 characters long";
    return errors;
}