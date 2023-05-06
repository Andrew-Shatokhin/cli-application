const contacts = require("./contacts");
console.log(contacts)

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case "list":
          const allContacts = await contacts.listContacts();
          return console.log(allContacts);
    //   break;

    case "get":
          const oneContact = await contacts.getContactById(id);
           return console.log(oneContact);
    //   break;

    case "add":
          const newContact = await contacts.addContact({ name, email, phone });
          return console.log(newContact);
    //   break;

    case "remove":
          const removeContact = await contacts.removeContact(id);
          return console.log(removeContact);
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Mishanya",
//   email: "Mishanya@gmail.com",
//   phone: "(111) 111-1111",
// });
invokeAction({
  action: "remove",
  id: "kFZcqr3fY1Nonc05Qlt20",
  });