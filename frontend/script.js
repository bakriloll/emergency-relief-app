document
.getElementById('requestForm')
.addEventListener('submit', async (e) => {

    e.preventDefault();

    const data = {
        requester_name:
            document.getElementById('requester_name').value,

        location:
            document.getElementById('location').value,

        people_count:
            Number(
                document.getElementById('people_count').value
            ),

        urgency_level:
            Number(
                document.getElementById('urgency_level').value
            ),

        shelter_type_needed:
            document.getElementById('shelter_type_needed').value
    };

    const response = await fetch(
        'http://localhost:3000/api/requests',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    document.getElementById('message').innerHTML =
        'Request Submitted Successfully';
});