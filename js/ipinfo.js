function getData() {
    data = document.getElementById('url_text').value
    console.log(data)
    document.getElementById('label').innerHTML = 'Please wait for few seconds'
    url = "https://ipinfo.io/" + data + "/geo"
    console.log(url)
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.getElementById('l1').innerHTML = data['city']
        document.getElementById('l2').innerHTML = data['region']
        document.getElementById('l3').innerHTML = data['country']
        document.getElementById('l4').innerHTML = data['loc']
        document.getElementById('l5').innerHTML = data['timezone']
    }).catch(() => {
        console.log("Something went wrong !!")
        alert('Something went wrong with the IP Address')
    });
}