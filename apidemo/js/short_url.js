// fetch("https://api.shrtco.de/v2/shorten?url=facebook.com")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     x = data['result']
//     console.log(x['short_link'])
// })

function getData() {
    data = document.getElementById('url_text').value
    console.log(data)
    document.getElementById('label').innerHTML = 'Please wait for few seconds'
    fetch("https://api.shrtco.de/v2/shorten?url="+data)
        .then((response) => {
            // console.log(response)
            return response.json();
        }).then((data) => {
            x = data['result']
            document.getElementById('l1').innerHTML = x['short_link']
            document.getElementById('l2').innerHTML = x['short_link2']
            document.getElementById('l3').innerHTML = x['short_link3']
        }).catch(()=>{
            console.log("Something went wrong !!")
            alert('Something went wrong. Enter a different URL to short !!')
        });
}