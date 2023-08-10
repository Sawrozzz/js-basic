async function abc(){
    let res = await fetch('https://random-data-api.com/api/v2/users?size=2&is_xml=true');
    let data = await res.json();
    console.log(data);
}

abc();