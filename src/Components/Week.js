import React from 'react'

function Week() {

    async getForecast()
    {
        let url = "https://api.openweathermap.org/data/2.5/forecast";
        let payload = 
        {
            lat: this.$app.globals.origin.lat,
            lon: this.$app.globals.origin.lng,
            units: 'metric',
            APPID: '0feb06072d87320932559f321ca221fb',
            lang:'es',
            cnt:40
        };

        let response = await axios.get(url, { params: payload });
        this.data = response.data.list;
    }

    return (
        <div>
            <div style="width:auto; height:100%; display:flex; align-items:center;">
                <a  style="width:auto; padding:10; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:space-around;" v-for="(item,index) in data" :key="index">
                    <span class="fs_smaller c_normal">{{ item.main.temp_min }} / {{ item.main.temp_max }}</span>
                    <span class="fs_smaller c_normal">{{ item.weather[0].description }}</span>
                    <img style="width:50px; height:auto;" :src="'https://openweathermap.org/img/w/'+item.weather[0].icon+'.png'">
                </a>
            </div>
        </div>
    )
}

export default Week

