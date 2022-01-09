const apiKey = 'wjqZ2OQkLq4kc493t8zc2uMR0eO3YvjVNNhRV79Ok-ckQwdhJv45Ahe0V55kWuK5Bb_Q4y-g0IrODxHZUi3aJihBqFR4lpXeDkdyxS9LaGsqOjkSCbrJOxJBUWPaYXYx';
const clientId = 'HasVYc9erMB0Qs8CVC_pxw';

export const Yelp = async (term, location, sortBy) => {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    try {
        const response = await fetch(endpoint, { 
            headers: { 
                Authorization: `Bearer ${apiKey}`
            } 
        });
        if(response.ok){
            const jsonResponse = await response.json();
            if(jsonResponse.businesses) {
                const businesses = jsonResponse.businesses.map(business => {
                    return {
                        id : business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount,
                        url: business.url
                    }
                })
                return businesses;
            }
        }
    } catch(error) {
        console.log(error);
    }
}
