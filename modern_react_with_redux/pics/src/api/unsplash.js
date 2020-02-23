import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization: 'Client-ID ENxtPq42a1EFHZgOh9Z2uVDgof7mM8L-dv0796V1tfU'
    }
});

