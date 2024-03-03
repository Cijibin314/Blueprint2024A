document.getElementById('funFactForm').addEventListener('submit', async function(event) {
    await event.preventDefault(); // Prevent form from submitting normally
    await downloadAsTxt()
 
    // Get form values
    var name = await document.getElementById('name').value;
    var funFact = await document.getElementById('funFact').value;
    var consent = await document.getElementById('publishConsent').checked;
 
 
    // Simple validation & action
    if (!name || !funFact) {
        alert('Please fill in all the fields.');
        return;
    }
 
 
    if (!consent) {
        alert('You must allow us to publish your fun fact to proceed.');
        return;
    }
 
 
    // Here you would typically send the data to a server
    console.log('Name:', name);
    console.log('Fun Fact:', funFact);
    console.log('Consent:', consent ? 'Yes' : 'No');
    
    alert('Thank you for submitting your fun fact!');
    window.location.replace("funfacts.html");
 });
 
 
 //function getFront() {
   // window.location.href = 'funfacts.html';
 //}
 function getData(){
    return {
        "name": document.getElementById("name").value,
        "fact": document.getElementById("funFact").value,
        "consent": document.getElementById("publishConsent").checked
    }
 }
 let globalHandle;
async function writeFile(contents){
    console.log(globalHandle)
    const writable = await globalHandle.createWritable();
    await writable.write(contents)
    await writable.close()
 }
 async function downloadAsTxt(){
    //make a new text file
    globalHandle = await makeNewFile()
    await writeFile(JSON.stringify(getData()))
 }
async function makeNewFile(){
    const options = {
        types: [
            {
                description: 'Text Files',
                accept:{
                    'text/plain':[".txt"],
                },
            },
        ],
    }
    const handle = await window.showSaveFilePicker(options)
    globalHandle = handle
    console.log(globalHandle)
    return handle
 }
 